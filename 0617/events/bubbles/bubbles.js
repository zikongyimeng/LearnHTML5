/**
 * Created by 楠 on 2016/6/18.
 */


(function () {

    var a,b,c;

    function findDivs() {
        a=document.getElementById("a");
        b=document.getElementById("b");
        c=document.getElementById("c");
    }
    function addListeners() {
/*

        //冒泡从里到外，不加true;捕获从外到里，加true
        a.addEventListener("click",function (event) {
            console.log("a 被点击了");
        });


        b.addEventListener("click",function (event) {
            console.log("b 被点击了");//此时点击b时输出 a 被点击了、b 被点击了

            //阻止事件冒泡
           // event.stopPropagation();//阻止事件冒泡，关键字stopPropagation，此时点击b时只输出 b 被点击了，而不再输出 a 被点击了

            //事件立即停止冒泡
             event.stopImmediatePropagation();//关键字stopImmediatePropagation
        });


        c.addEventListener("click",function (event) {
            console.log("c 被点击了");
        });

*/



        //捕获阶段、冒泡阶段 对比,  冒泡从里到外，不加true;捕获从外到里，加true
         a.addEventListener("click", function (event) {
             console.log("捕获阶段 a clicked");

             //此操作可以屏蔽子级对象的事件响应
            //event.stopImmediatePropagation();//这里是捕获阶段，从外到里，只输出 捕获阶段 a clicked，无论点a或b或c都只输出这个，子级不再输出

         }, true);
         b.addEventListener("click", function (event) {
             console.log("捕获阶段 b clicked");
         }, true);
         c.addEventListener("click", function (event) {
             console.log("捕获阶段 c clicked");
         }, true);
         a.addEventListener("click", function (event) {
             console.log("冒泡阶段 a clicked");
         });
         b.addEventListener("click", function (event) {
             console.log("冒泡阶段 b clicked");
         });
         c.addEventListener("click", function (event) {
             console.log("冒泡阶段 c clicked");
         });


         a.addEventListener("contextmenu",function (event) {
         console.log("将要呈现右键菜单");

         //取消该事件
         event.preventDefault();//不再出现菜单
         });



    }
    function init() {
        findDivs();
        addListeners();
    }
    init();
})();
