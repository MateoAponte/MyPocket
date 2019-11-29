const express = require('express');
const app = express();
const router = express.Router();
const fs = require('fs');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
let dataUser = {};

const date = new Date();
const month = date.getMonth();
const year = date.getFullYear();  

router.get('/', (req, res) => {
    res.redirect('index.html')
})

router.post('/registrer', jsonParser, (req, res) => {  
    let infoUser = req.body.configUser;
    let fullname = infoUser.name + infoUser.lastname;
    dataUser.configUser = infoUser;
    if(fs.existsSync(`./server/api/${fullname}`)){
        dataUser.configUser.status = 'Loged';
        res.send(dataUser);
    } else {
        dataUser.configUser.status = 'toLog';
        fs.mkdirSync(`./server/api/${fullname}`);
        fs.writeFileSync(`./server/api/${fullname}/data${month}-${year}.json`, JSON.stringify(dataUser), 'utf-8');
    }
});

router.post('/login', jsonParser, (req, res) => {
    let infoUser = req.body.configUser;
    let fullname = infoUser.name + infoUser.lastname;
    dataUser.configUser = infoUser;
    if(fs.existsSync(`./server/api/${fullname}`)){
        fs.readdir(`./server/api/${fullname}`, function(err, files){
            files.forEach( x => {
                if(fs.existsSync(`./server/api/${fullname}/data${month}-${year}.json`)){
                    fs.readFile(`./server/api/${fullname}/data${month}-${year}.json`, 'utf-8', function(err, data){
                        dataUser = JSON.parse(data);
                        dataUser.configUser.status = 'Loged';
                        fs.writeFileSync(`./server/api/${fullname}/data${month}-${year}.json`,JSON.stringify(dataUser), 'utf-8');
                        res.send(dataUser.configUser);
                    });
                } else {
                    fs.readFile(`./server/api/${fullname}/data${month}-${year}.json`, 'utf-8', function(err, data){
                        dataUser = JSON.stringify(data);
                        dataUser.configUser.status = 'Loged';
                        fs.writeFileSync(`./server/api/${fullname}/data${month - 1}-${year}.json`, JSON.stringify(dataUser), 'utf-8');
                        res.send(dataUser.configUser);
                    });
                }
            } )
        })
    } else {
        dataUser.configUser.status = 'notExist';
        res.send(dataUser);
    }
})

router.post('/confirmation', (req, res) => {
    let date = new Date();
    let month = date.getMonth();
    let year = date.getFullYear();

    req.body = {userInitialInfo: req.body}
    let reqUserInfo = req.body.userInitialInfo
    let fullname = reqUserInfo.name + reqUserInfo.lastname;

    dataUser.push(req.body);
    const jsonData = JSON.stringify(dataUser);
    fs.readdir(`./src/api/`, function(err, files){
        if(files.includes(fullname)){
            files.forEach(file => {
                if(file == fullname){
                    fs.readdir(`./src/api/${fullname}`, function(err, subFiles){
                        if(subFiles.includes(`data${month}-${year}.json`)){
                            res.redirect('/#/login');
                        } else {
                            fs.writeFileSync(`./src/api/${fullname}/data${month}-${year}.json`, jsonData, 'utf-8');
                            res.redirect('/#/confirmation');
                        }
                    })
                }
            });
        } else {
            fs.mkdirSync(`./src/api/${fullname}`);
            fs.writeFileSync(`./src/api/${fullname}/data${month}-${year}.json`, jsonData, 'utf-8');
            res.redirect('/#/confirmation');
        }
    })
})

router.post('/save', (req, res) => {
    let {data} = req.body;
    let parseData = JSON.parse(data);
    let name = parseData[0].userInitialInfo.name;
    let lastname = parseData[0].userInitialInfo.lastname;
    let fullname = name + lastname;

    let date = new Date();
    let month = date.getMonth();
    let year = date.getFullYear();

    fs.writeFileSync(`./src/api/${fullname}/data${month}-${year}.json`, data, 'utf-8');
    res.redirect(`/#/Financias?name=${name}&lastname=${lastname}`);
})

router.get('/dataUser', (req, res) => {
    let query = req.query;
    fs.readFile(`./src/api/${query.dir}/data${query.month}-${query.year}.json`, 'utf8', (err, data) => {
        res.send(data);
    })
})

module.exports = router;