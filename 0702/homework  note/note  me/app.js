/**
 * Created by plter on 7/2/16.
 */


(function () {

    window.Config = {DB_NAME: "MyDB", DB_VERSION: 1};

    function Main() {
        this.getElements();
        this.addListeners();

        this.connectDB(function () {
            this.readData();
        }.bind(this));
    }

    Main.prototype.getElements = function () {
        this._usersContainer = document.getElementById("userscontainer");
        this._msgDiv = document.getElementById("msg");
        this._form = document.getElementById("form");
        this._btnDeleteDb = document.getElementById("btndeldb");
    };

    Main.prototype.addListeners = function () {
        this._btnDeleteDb.onclick = function () {
            var req = indexedDB.deleteDatabase(Config.DB_NAME);
            req.onerror = function () {
                this._msgDiv.innerHTML = "删除数据库失败";
            }.bind(this);
            req.onsuccess = function () {
                this._msgDiv.innerHTML = "删除数据库成功";
            }.bind(this);
        }.bind(this);

        this._form.onsubmit = function (event) {

            // console.log(this._form["name"].value, this._form["age"].value);

            var trans = this._db.transaction("note  me", "readwrite");
            var os = trans.objectStore("note  me");
            var req = os.put({name: this._form["name"].value, age: this._form["age"].value,money: this._form["money"].value,huan: this._form["huan"].value});
            req.onerror = function () {
                this._msgDiv.innerHTML = "保存数据失败";
            }.bind(this);
            req.onsuccess = function () {
                this._msgDiv.innerHTML = "保存数据成功";

                this._form["name"].value = "";
                this._form["age"].value = "";
                this._form["money"].value = "";
                this._form["huan"].value = "";
            }.bind(this);

            event.preventDefault();
            window.location.reload();
        }.bind(this);
    };

    Main.prototype.readData = function () {
        var trans = this._db.transaction("note  me");
        var os = trans.objectStore("note  me");

        var req = os.getAll();
        //根据名字获取数据
        // var req = os.get(1);
        // var req = os.index("name").get("吴多");

        req.onsuccess = function (event) {
            // console.log(event.target.result);

            this._usersContainer.innerHTML = this.createTableHTMLByData(event.target.result);
        }.bind(this);
        req.onerror = function () {
            this._msgDiv.innerHTML = "获取数据失败";
        }.bind(this);
    };

    Main.prototype.createTableHTMLByData = function (data) {
        var html = "<table border='1' cellspacing='0'><tr><th>姓名</th><th>日期</th><th>欠钱数额</th><th>是否还清</th></tr>";
        for (var i = 0; i < data.length; i++) {
            var item = data[i];
            html += "<tr><td>" + item.name + "</td><td>" + item.age + "</td><td>" + item.money + "</td><td>" + item.huan + "</td></tr>";
        }
        html += "</table>";
        return html;
    };

    Main.prototype.connectDB = function (sucCallback) {
        var req = indexedDB.open(Config.DB_NAME, Config.DB_VERSION);
        req.onsuccess = function () {

            this._db = req.result;

            console.log("连接数据库成功");

            if (sucCallback) {
                sucCallback();
            }
        }.bind(this);
        req.onerror = function (event) {
            console.error(event);
        };
        req.onupgradeneeded = function (event) {
            var db = req.result;

            var os = db.createObjectStore("note  me", {keyPath: "ID", autoIncrement: true});

            os.createIndex("name", "name");
            os.createIndex("age", "age");
            os.createIndex("money", "money");
            os.createIndex("huan", "huan");
        }
    };


    new Main();
})();