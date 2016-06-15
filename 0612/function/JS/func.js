/**
 * Created by sks on 2016/6/12.
 */

//函数、关键字arguments,以数组的形式输出
function hello(name,age) {
    console.log(arguments);//把所有的元素以数组的形式输出来
    //console.log(arguments[1]);//输出下标为1的元素
}
hello("ucai",4);//赋值


//关键字arguments
function printFromTo(from,to){
    for(var i=from;i<to;i++){
        console.log(arguments);
    }
}
printFromTo(5,10);