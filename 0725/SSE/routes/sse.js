var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.writeHead(200,{      /*200是状态码，成功的意思*/
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache"
  });
  // res.end("data:HelloWorld\n\n");  /*无类型事件*/
  res.end("event: hello\ndata: {\"name\":\"ucai\",\"age\":\"3\"}\n\n");/*有类型事件*/
});

module.exports = router;
