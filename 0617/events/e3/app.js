/**
 * Created by sks on 2016/6/18.
 */

(function () {

    var link;

    /*
     function linkClickedHander(event) {
     console.log("Link clicked");

     link.onclick = null;//移除侦听事件，继续点击不会再出现Link clicked
     }
     */


    function link_clickedHandler(event) {
        console.log("嘻嘻");

        // link.removeEventListener("click", link_clickedHandler);//移除侦听事件，点击不再出现
    }

    function init() {
        link = document.getElementById("link");
        //link.onclick = linkClickedHander;//点击出现Link clicked

        
        /* //这样添加点击事件只会执行最后一个，这里点击出现Link clicked 2,不会出现Link clicked
         link.onclick = linkClickedHander;
         link.onclick = function (event) {
         console.log("Link clicked 2");
         }
         */


        //这样用addEventListener添加事件都会出现
        link.addEventListener("click",function (event) {
            console.log("哈哈");
        });

        link.addEventListener("click", link_clickedHandler);

        // link.addEventListener("mousemove", function (event) {
        //     console.log(event);
        // });
    }

    init();
})();
