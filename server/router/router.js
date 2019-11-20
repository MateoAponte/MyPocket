const router = require('express').Router;

router('/', (req, res) => {
    res.redirect('index.html')
})

module.exports = router