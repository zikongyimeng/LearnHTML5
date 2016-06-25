/**
 * Created by sks on 2016/6/24.
 */


(function () {

    Object.defineProperty(HTMLDivElement.prototype,"acceptDrop",{
        get:function () {
            return this._acceptDrop;
        },
        set:function(value){
            this._acceptDrop=value;
            if(this._acceptDrop){
                this.ondragover=function (e) {
                    e.preventDefault();
                };
                this.ondrop=function (e) {
                    var id=e.dataTransfer.getData("domId");//和setdata对应
                    var node=document.getElementById(id);
                    node.parentNode.removeChild(node);//父级有的话先移除父级
                        this.appendChild(node);
                }
            }else {
                this.ondragover=null;//取消事件
                this.ondrop=null;//取消事件
            }
        }
    });

})();