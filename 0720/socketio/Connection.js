/**
 * Created by plter on 7/20/16.
 */

    "use strict";
class Connection {


    constructor(socket) {
        Connection.__id++;
        this._id = Connection.__id;

        this._socket = socket;
        Connection.addConn(this);

        this.addListens();

        Connection.broadcast("login", `${this.remoteAddress}登陆了`);
    }

    addListens() {
        this._socket.on("disconnect", ()=> {
            Connection.removeConn(this);

            Connection.broadcast("logout", `${this.remoteAddress}离开了`);
        });

        this._socket.on("chat", (data)=> {
            Connection.broadcast("chat", `${this.remoteAddress}:${data}`);
        });
    }

    emit(type, data) {    /*emit传递参数到服务器*/
        this._socket.emit(type, data);
    }

   /* es6中可以直接这样写get方法*/
    get id() {
        return this._id;
    }

    /*获取远程地址*/
    get remoteAddress() {
        return this._socket.conn.remoteAddress;
    }
}

Connection.__id = 0;
Connection.__conns = new Map();  /*map() 把每个元素通过函数传递到当前匹配集合中，生成包含返回值的新的 jQuery 对象*/

Connection.addConn = function (conn) {
    Connection.__conns.set(conn.id, conn);
};

Connection.removeConn = function (conn) {
    Connection.__conns.delete(conn.id);
};

Connection.broadcast = function (type, data) {
    for (var key of Connection.__conns.keys()) {
        Connection.__conns.get(key).emit(type, data);
    }
};

module.exports = Connection;
