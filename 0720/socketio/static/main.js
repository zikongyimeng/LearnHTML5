/**
 * Created by sks on 2016/7/22.
 */
/**
 * Created by plter on 7/20/16.
 */

"use strict";

(function () {

    var socket, btnSend, input, output;

    function init() {
        getElements();
        connectServer();
        addListeners();
    }

    function getElements() {
        btnSend = document.querySelector("#btnsend");
        input = document.querySelector("#input");
        output = document.querySelector("#output");
    }

    function outputLine(msg) {
        output.innerHTML += msg + "\n";
        output.scrollTop = output.scrollHeight;  /*文本自动滚动*/
    }

    function addListeners() {
        btnSend.onclick = function () {
            var inputVal = input.value;
            if (inputVal && inputVal != "") {
                socket.emit("chat", inputVal);  /*emit发送inputVal到服务器*/
                input.value = "";
            }
        }
    }

    function connectServer() {
        socket = io(location.origin);   /*获取本地地址*/
        socket.on("chat", function (data) {
            outputLine(data);
        });
        socket.on("login", function (data) {
            outputLine(data);
        });
        socket.on("logout", function (data) {
            outputLine(data);
        });
    }

    init();
})();