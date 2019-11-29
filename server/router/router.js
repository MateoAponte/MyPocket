const express = require('express');
const app = express();
const router = express.Router();
const fs = require('fs');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const dataUser = {};

router.get('/', (req, res) => {
    res.redirect('index.html')
})

router.post('/asdas', (req, res) => {
    res.json("Wenas")
});

router.get('/ss', function (req, res) {
    res.send({saludo: 'hello world'})
})

router.post('/registrer', jsonParser, (req, res) => {
    let date = new Date();
    let month = date.getMonth();
    let year = date.getFullYear();    
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

// router.post('/fetchData'. jsonParser, (req, res) => {

// })






router.post('/login', (req, res) => {
    let date = new Date();
    let month = date.getMonth();
    let year = date.getFullYear();

    req.body = {registrerData: req.body}
    let reqUserInfo = req.body.registrerData;
    let fullname = reqUserInfo.name + reqUserInfo.lastname;

    dataUser.push(req.body);
    const jsonData = JSON.stringify(dataUser);
    fs.readdir(`./src/api/`, function(err, files){
        if(files.includes(fullname)){
            files.forEach(file => {
                if(file == fullname){
                    fs.readdir(`./src/api/${fullname}`, function(err, subFiles){
                        if(subFiles.includes(`data${month}-${year}.json`)){
                            fs.readFile(`./src/api/${fullname}/data${month}-${year}.json`, 'utf-8', function(err, data){
                                data = JSON.parse(data);
                                let dataReaded = data[0].userInitialInfo; 
                                res.redirect(`/#/Financias?name=${dataReaded.name}&lastname=${dataReaded.lastname}`);
                            })
                        } else {
                            fs.writeFileSync(`./src/api/${fullname}/data${month}-${year}.json`, jsonData, 'utf-8');
                            res.redirect('/#/financias');
                        }
                    })
                }
            });
        } else {
            res.redirect('/');
        }
    })

});

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