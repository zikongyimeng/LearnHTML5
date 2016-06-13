/**
 * Created by sks on 2016/6/12.
 */
/*
 function init(){
 document.body.innerHTML="Hello World";
 }*/



 for(var i=1;i<=5;i++){
 for(var j=1;j<=i;j++){
 document.write("* ");
 }
 document.write("<br/>");
 }                 // 控制台输出递加星号


for(var i =1;i <=9;i++){
 var str="";
 for(var j =1;j <=i;j++){
 str += i +"*"+j +"="+i *j +" "
 }
 console.log(str);
 }                                    //控制台里面输出乘法表



/*
var str="Hello World";
console.log(str.charCodeAt(0));//获取下标是0的字符的编码
console.log(String.fromCharCode("A".charCodeAt(0)+32));//大写A变成小写a
console.log(String.fromCharCode(72));//字符编码转成字符
console.log(str.toLowerCase());//字符串大写字母变小写
console.log(str.substr(2,3));//截取从下标为2开始的3个字符
console.log(str.substring(2,3));//截取从下标为2开始下标为3结束的字符
console.log(str.indexOf("o",0));//从前往后搜索输出搜索字符的下标，第一个是搜索的字符，第二个是起始位置
console.log(str.lastIndexOf("r",4));//从后往前搜索输出搜索字符的下标，第一个是要搜索的字符，第二个是起始位置
console.log(str.replace("lo","aa"));//替换
*/


/*function hello(){
    console.log(arguments);
}
hello(1,2,3,"Hello");  */           //关键字arguments


/*
var rep="hello %s,%d\n";
var rep1=console.log(rep.replace("%s","World"));
var rep2=console.log(rep1.replace("%d\n","a"));
console.log(rep2);*/


/*
var rep="Hello %s,%d\n";
var rep1
*/




/*function rep(){
 var aaa=arguments[0];
 for(var i=1;i<arguments.length;i++){
  var str=aaa.substr(aaa.indexOf("%"),2);
  aaa=aaa.replace(str,arguments[i]);
 }
 console.log(aaa);
}
rep("Hello %s,%d\n","World",100);*/



function printf() {
var formatString = arguments[0];
 if(!formatString){
  console.error("参数不正确");
  return;
 }

for (var i=1; ; i++){
 var index =formatString.indexOf("%");
 if(index==-1){
  break;
 }
 var typeChar=formatString.charAt(index+1);
 var replacevar=arguments[i];
 formatString=formatString.substring(0,index)+replacevar+formatString.substring(index+2);
}
 console.log(formatString);
}
printf("Hello %s,%d","World",100);













