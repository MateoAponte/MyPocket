const express = require('express');
const sync = require('sync');
const router = express.Router();
const fs = require('fs');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
let dataUser = {};

const date = new Date();
const month = date.getMonth();
const year = date.getFullYear();  

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
    let user = infoUser.user;
    if(fs.existsSync(`./server/api/${user}`)){
        dataUser.userData.status = 'Loged';
        res.send(dataUser);
    } else {
        dataUser.userData.status = 'toLog';
        fs.mkdirSync(`./server/api/${user}`);
        fs.writeFileSync(`./server/api/${user}/config.json`, JSON.stringify(dataUser), 'utf-8');
        fs.writeFileSync(`./server/api/${user}/data${convertMonth(month)}-${year}.json`, JSON.stringify( {itemsData: []} ), 'utf-8');
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
        fs.readdir(`./server/api/${user}`, function(err, files){
            files.forEach( x => {
                if(fs.existsSync(`./server/api/${user}/data${convertMonth(month)}-${year}.json`)){
                    fs.readFile(`./server/api/${user}/data${convertMonth(month)}-${year}.json`, 'utf-8', function(err, data){
                        dataUser = Object.assign(dataUser, JSON.parse(data));
                        res.send(dataUser);
                    });
                } else {
                    sync(function(){
                        fs.writeFileSync(`./server/api/${user}/data${convertMonth(month)}-${year}.json`, JSON.stringify( {itemsData: []} ), 'utf-8')
                        fs.readFile(`./server/api/${user}/data${convertMonth(month)}-${year}.json`, 'utf-8', function(err, data){
                            dataUser = Object.assign(dataUser, JSON.parse(data));
                            res.send(dataUser);
                        })
                    })
                }
            } )
        })
    } else {
        dataUser.userData.status = 'notExist';
        res.send(dataUser);
    }
})

router.post('/save', jsonParser, (req, res) => {
    dataUser.itemsData = req.body.itemsData;
    let user = req.body.user;

    fs.writeFileSync(`./server/api/${user}/data${convertMonth(month)}-${year}.json`, JSON.stringify(dataUser), 'utf-8');
    res.send("your save is Successfull");
})

router.post('/configuration', jsonParser, (req, res) => {
    dataUser.configData = req.body.configData;
    dataUser.userData = req.body.userData;
    let user = dataUser.userData.user;
    fs.readFile(`./server/api/${user}/config.json`, 'utf-8', function(err, data){
        dataUser = Object.assign(dataUser, JSON.parse(data));
    })
    fs.writeFileSync(`./server/api/${user}/config.json`, JSON.stringify(dataUser), 'utf-8');
    res.send("The config is updated");
})

module.exports = router;