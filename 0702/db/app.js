/**
 * Created by plter on 7/2/16.
 */

(function () {

    window.Config = {DB_NAME: "MyDB", DB_VERSION: 1};//定义常量 DB的名字是MyDB  版本是1

    function Main() {
        this.connectDB(function () {
            this.writeData();
            this.readData();
        }.bind(this));
    }

    //读取数据
    Main.prototype.readData = function () {
        var trans = this._db.transaction("app");
        var os = trans.objectStore("app");//访问数据库app

        // var req = os.getAll();
        var req = os.get("version");
        req.onsuccess = function () {
            console.log(req.result);
        };
        req.onerror = function () {
            console.error("读取失败");
        };
    };

    //写入数据
    Main.prototype.writeData = function () {
        var trans = this._db.transaction("app", "readwrite");//readwrite提供对某个对象存储的读取和写入访问权
        var os = trans.objectStore("app");

        var req;
        new Promise(function (receive, reject) {
            req = os.put("My Application", "name");
            req.onerror = reject;
            req.onsuccess = receive;
        }).then(function (event) {
            console.log("成功写入应用名字");

            new Promise(function (receive, reject) {
                req = os.put("1.0", "version");
                req.onsuccess = receive;
                req.onerror = reject;
            }).then(function (event) {
                console.log("成功写入应用版本");
            }).catch(function (error) {
                console.log(error);
            });
        }).catch(function (error) {
            console.log(error);
        });
    };


    //连接DB
    Main.prototype.connectDB = function (sucCallback) {
        var req = indexedDB.open(Config.DB_NAME, Config.DB_VERSION);//打开数据库
        req.onerror = function (error) {   //失败onerror
            console.error(error);
        };
        req.onsuccess = function () {     //成功onsuccess
            this._db = req.result;

            sucCallback();
        }.bind(this);
        req.onupgradeneeded = function (event) {    //升级onupgradeneeded
            var db = event.target.result;

            var os = db.createObjectStore("app");  //创建 数据存储objectStore,名字是app
            os.createIndex("name", "name");//创建 索引键name
            os.createIndex("version", "version");//创建  索引键version
        };
    };

    new Main();
})();