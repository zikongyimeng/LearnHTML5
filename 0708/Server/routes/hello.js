/**
 * Created by sks on 2016/7/8.
 */

var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function (req, res, next) {

    if (req.query.cb) {
        res.send(req.query.cb + "(\"Hello World\");");

    } else {
        res.send("error");
    }
});

module.exports = router;