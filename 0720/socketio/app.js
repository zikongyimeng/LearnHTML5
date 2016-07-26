/**
 * Created by plter on 7/20/16.
 */
"use strict";
var express = require("express");
var http = require("http");
var socketIO = require("socket.io");
var Connection = require("./Connection");  /*引入*/

var app = express();
var server = http.Server(app);
var io = socketIO(server);

app.use(express.static("static"));

server.listen(8000, ()=> {
    console.log("Server started at port 8000");
});

io.on("connection", (socket)=> {
    new Connection(socket);
});