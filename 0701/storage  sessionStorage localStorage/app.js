/**
 * Created by sks on 2016/7/1.
 */

(function () {

    function Main() {

        // this._storage=sessionStorage;//sessionStorage，特定域名下的会话存储，退出软件数据消失
        this._storage=localStorage;//localStorage，本地存储，缓存到本地，退出软件数据仍存在

        this.getElements();
        this.addListeners();

        this.readData();
    }
    Main.prototype.readData=function () {
        this._output.innerHTML="";

        for (var i=0;i<this._storage.length;i++){
            var key=this._storage.key(i);
            var div=document.createElement("div");
            div.innerHTML=key+":"+this._storage.getItem(key);//this._storage.getItem（），该方法接受一个键名作为参数，返回键名对应的值
            this._output.appendChild(div);
        }
    };
    Main.prototype.addListeners=function () {
        this._btnSaveKv.onclick=function () {
            var key=this._keyInput.value;
            if (!key||key==""){
                alert("请填写key");
                return;
            }
            var value=this._valueInput.value;
            if(!value||value==""){
                alert("请填写value");
                return;
            }
            this._storage.setItem(key,value);
            
            this._keyInput.value="";
            this._valueInput.value="";
            
            this.readData();
        }.bind(this);
    };
    Main.prototype.getElements=function () {
        this._keyInput=document.getElementById("keyinput");
        this._valueInput=document.getElementById("valueinput");
        this._btnSaveKv=document.getElementById("btnsavekv");
        this._output=document.getElementById("output");
    };
    new Main();
})();