/**
 * Created by sks on 2016/6/13.
 */

(function () {

    function hello(name) {
        console.log("nihao" +  name)
    }
   // hello("lisi");//传入参数


    //调用函数
    var h=hello;
   // h("zhangsan");//传入参数
   // h();//没有参数传入

    h.call(null,"xixi");//传可变参数（call）
    h.apply(null,["ucai"]);//传数组


//console.log(Math.max((1,2,10,100,-10,101)));//输出最大值


//三目求最大值
/*function max(a,b){
    return a>b ? a:b;   //三目运算
}
console.log(max(5,2));*/



//不用三目求最大值
/*function max(a,b) {
    if (a>b){
        return a;
    }else{
        return b;
    }
}
console.log(max(5,2))*/




/*
function max(a,b){
    console.log(arguments);//把1，2当数组打印出来
}
max(1,2);*/


}());










