const express = require('express');
const sync = require('sync');
const router = express.Router();
const fs = require('fs');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const readMultipleFiles = require('read-multiple-files');
let dataUser = {};

const date = new Date();
const month = date.getMonth();
const year = date.getFullYear(); 

const iconsConfig = 
    [
        {
            category: 'Casa',
            name: 'home',
            color: '#24C1FD'
        },
        {
            category: 'Servicios',
            name: 'lightbulb',
            color: '#FFBF53'
        },
        {
            category: 'Banco & Transacciones',
            name: 'money-bill-wave',
            color: '#12BB85'
        },
        {
            category: 'Comida',
            name: 'utensils',
            color: '#FD7E14'
        },
        {
            category: 'Tecnología',
            name: 'mobile-alt',
            color: '#BE4BDB'
        },
        {
            category: 'Viajes',
            name: 'plane',
            color: '#F963A0'
        },
        {
            category: 'Entretenimiento',
            name: 'gamepad',
            color: '#FF5154'
        },
        {
            category: 'Moda',
            name: 'tshirt',
            color: '#4C6EF5'
        }
    ]
function convertMonth(value){
    value = value + 1;
    return value < 10 ? `0${value}` : value
}

router.get('/', (req, res) => {
    res.redirect('index.html')
})

router.post('/registrer', jsonParser, (req, res) => {  
    let infoUser = req.body.userData;
    dataUser.userData = infoUser;
    dataUser.configData = {};
    dataUser.iconsConfig = iconsConfig;
    let user = infoUser.user;
    if(fs.existsSync(`./server/api/${user}`)){
        dataUser.userData.status = 'Loged';
        res.send(dataUser);
    } else {
        dataUser.userData.status = 'toLog';
        fs.mkdirSync(`./server/api/${user}`);
        fs.mkdirSync(`./server/api/${user}/${year}`);
        fs.writeFileSync(`./server/api/${user}/config.json`, JSON.stringify(dataUser), 'utf-8');
        fs.writeFileSync(`./server/api/${user}/${year}/data${convertMonth(month)}-${year}.json`, JSON.stringify( {itemsData: []} ), 'utf-8');
    }
});

router.post('/login', jsonParser, (req, res) => {
    let infoUser = req.body.userData;
    dataUser.userData = infoUser;
    let user = infoUser.user;
    if(fs.existsSync(`./server/api/${user}`)){
        fs.readFile(`./server/api/${user}/config.json`, 'utf-8', function(err, data){
            dataUser = JSON.parse(data);
        });
        if(fs.existsSync(`./server/api/${user}/${year}`)){
            fs.readdir(`./server/api/${user}`, function(err, files){
                files.forEach( x => {
                    if(fs.existsSync(`./server/api/${user}/${year}/data${convertMonth(month)}-${year}.json`)){
                        fs.readFile(`./server/api/${user}/${year}/data${convertMonth(month)}-${year}.json`, 'utf-8', function(err, data){
                            dataUser = Object.assign(dataUser, JSON.parse(data));
                            res.send(dataUser);
                        });
                    } else {
                        sync(function(){
                            fs.writeFileSync(`./server/api/${user}/${year}/data${convertMonth(month)}-${year}.json`, JSON.stringify( {itemsData: []} ), 'utf-8')
                            fs.readFile(`./server/api/${user}/${year}/data${convertMonth(month)}-${year}.json`, 'utf-8', function(err, data){
                                dataUser = Object.assign(dataUser, JSON.parse(data));
                                res.send(dataUser);
                            })
                        })
                    }
                } )
            })
        } else {
            sync(function(){
                fs.mkdirSync(`./server/api/${user}/${year}`);
                fs.writeFileSync(`./server/api/${user}/${year}/data${convertMonth(month)}-${year}.json`, JSON.stringify( {itemsData: []} ), 'utf-8')
                fs.readFile(`./server/api/${user}/${year}/data${convertMonth(month)}-${year}.json`, 'utf-8', function(err, data){
                    dataUser = Object.assign(dataUser, JSON.parse(data));
                    res.send(dataUser);
                })
            })
        }
    } else {
        dataUser.userData.status = 'notExist';
        res.send(dataUser);
    }
})

router.post('/save', jsonParser, (req, res) => {
    dataUser.itemsData = req.body.itemsData;
    let user = req.body.user;

    fs.writeFileSync(`./server/api/${user}/${year}/data${convertMonth(month)}-${year}.json`, JSON.stringify(dataUser), 'utf-8');
    res.send("your save is Successfull");
})

router.post('/configuration', jsonParser, (req, res) => {
    dataUser.configData = req.body.configData;
    dataUser.iconsConfig = req.body.iconsConfig;
    dataUser.userData = req.body.userData;
    let user = dataUser.userData.user;
    fs.readFile(`./server/api/${user}/config.json`, 'utf-8', function(err, data){
        dataUser = Object.assign(dataUser, JSON.parse(data));
    })
    fs.writeFileSync(`./server/api/${user}/config.json`, JSON.stringify(dataUser), 'utf-8');
    res.send("The config is updated");
})

router.post('/summary/historic', jsonParser, (req, res) => {
    let user = req.body.user;
    let dirPath = `./server/api/${user}/${year}`;
    let historic = [];
    fs.readdir(dirPath, function (err, filesPath) {
        filesPath = filesPath.map(function (filePath) {
            return `${dirPath}/${filePath}`
        });
        readMultipleFiles(filesPath, 'utf-8')
            .subscribe({
                next({path, contents}){
                    historic.push(JSON.parse(contents))
                },
                complete(){
                    res.send(historic);
                }
            })
    });
})

router.post('/summary/monthly', jsonParser, (req, res) => {
    let user = req.body.user;
    let reqMonth = req.body.month;
    fs.readdir(`./server/api/${user}/${year}`, function (err, files) {
        if(fs.existsSync(`./server/api/${user}/${year}/data${reqMonth}-${year}.json`)){
            fs.readFile(`./server/api/${user}/${year}/data${reqMonth}-${year}.json`, 'utf-8', function(err, data){
                res.send(JSON.parse(data))
            })
        } else {
            res.send("Inexistente")
        }
    });
})

module.exports = router;