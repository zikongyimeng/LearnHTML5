/**
 * Created by sks on 2016/6/24.
 */


(function () {

    var p,targetContainer,currentDragged;

    function getElements() {
        p=document.getElementById("p");
        targetContainer=document.getElementById("target-container");
    }

    /*//最开始的能拖入的代码
    function implement1() {
        p.ondragstart=function (event) {
            currentDragged=p;
        };
        targetContainer.ondragover=function (event) {
            //阻止事件默认行为,默认不接受拖入元素,阻止后可接受拖入元素
            event.preventDefault();
        };
        targetContainer.ondrop=function (event) {
            targetContainer.appendChild(currentDragged);
        }
    }*/





    function init() {
        getElements();
        // implement1();

        p.ondragstart=function (event) {
            event.dataTransfer.setData("domId",this.id);//这里的this指p，通过setdata把p的id给domId，domId是自定义的，dataTransfer是传递数据
        };

        
/*
        /!*这种循环Firefox不支持，下面的循环可以*!/
        console.log(document.querySelectorAll(".container"));
        document.querySelectorAll(".container").forEach(function (item) {
            item.acceptDrop=true;
        });*/

        var result=document.querySelectorAll(".container");
        for (var i=0;i<result.length;i++){
            result[i].acceptDrop=true;
        }
    }
    init();
})();