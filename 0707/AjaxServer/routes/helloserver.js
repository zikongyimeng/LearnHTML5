var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function (req, res, next) {
    switch (req.method) {
        case "GET":                               //get方式
            res.send('Hello ' + req.query.name);  //query解析
            break;
        case "POST":                             //post方式
            res.send('Hello ' + req.body.name);
            break;
    }
});

module.exports = router;
