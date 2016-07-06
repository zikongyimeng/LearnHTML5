/**
 * Created by sks on 2016/7/1.
 */

(function () {

    function Main() {

        this._cookieKvs={};

        this._btnAddData=document.getElementById("btnsavekv");
        this._keyInput=document.getElementById("keyinput");
        this._valueInput=document.getElementById("valueinput");
        this._output=document.getElementById("output");

        console.log(document.cookie);
        this.readCookieData();
        this.addListeners();

    }
    Main.prototype.addListeners=function () {
        this._btnAddData.onclick=function () {

            this._cookieKvs[this._keyInput.value]=this._valueInput.value;

            document.cookie=this._keyInput.value+ "="+ this._valueInput.value;
        }.bind(this);
    };

    Main.prototype.readCookieData=function () {
        var str=document.cookie;//所有的键值对构成的字符串

        if(str&&str.length!=0){
            var kvs=str.split(";");  //kvs是键值对,  用“；”把字符串分隔开
            for(var i=0;i<kvs.length;i++){
                var kv=kvs[i].split("=");   //kv是键和值，  用“=”把键值对分隔开
                // alert(kv);
                this._cookieKvs[kv[0]]=kv[1];
            }
        }

        var outputhtml="";
        for (var k in this._cookieKvs){
            outputhtml+=k+":"+this._cookieKvs[k]+"<br>";
        }
        this._output.innerHTML=outputhtml;
    };

    new Main();
})();