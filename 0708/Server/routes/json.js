var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function (req, res, next) {

    if (req.query.callback) {
        var obj = {name: "ucai", age: 3};
        var jsonStr = JSON.stringify(obj);//解析成json格式

        res.send(req.query.callback + "(" + jsonStr + ");");//get方式是query,post方式是body
    } else {
        res.send("error");
    }
});

module.exports = router;

