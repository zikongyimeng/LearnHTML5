/**
 * Created by sks on 2016/7/6.
 */


(function () {
    
    function init() {
        // $("div").html("Hello World");//所有的div的内容都变
        // console.log($("div").html());//只输出第一个div的内容

        // $("#div1").html("hi");//用选择器指定特定的div

        /*//第一种侦听事件方式 直接侦听
        $("div").click({name:"zhang",age:10},function (event) {   //所有的div都有点击事件，把name:"zhang",age:10传给data
            console.log(event);
            // $(this).off("click");//取消点击事件
        });*/

        /*//第二种侦听事件方式  bind
        $("div").bind("click",{name:"zhang"},function (event) {
            console.log(event.data);
            $(this).unbind("click");//取消侦听事件
        });*/
        
        //第三种侦听事件方式  on
        $("div").on("click",{age:3},function (event) {
            console.log(event.data);
            $(this).off("click");
        });
    }
    init();
})();