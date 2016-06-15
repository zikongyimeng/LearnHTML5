/**
 * Created by sks on 2016/6/13.
 */


var obj={name:"ucai",age:4};
obj.gender="女";//直接添加对象里的成员（gender）
//delete obj.name;//直接删除对象里的成员（delete）
console.log(obj);
console.log(obj["name"]);//输出对象里指定的成员


//面向对象
var student={name:"LiSi"};
    student.xixi=function(){
    console.log(this.name+" say hello");
};
student.xixi();



//对象里面有函数，面向对象,用this
var student = {
    name: "heihei", haha: function () {
        console.log(this.name + " say hello");
    }
};
student.haha();


//对象里面有函数，面向对象,不用this
var student = {
    name: "ZhangSan", haha: function () {
        console.log(student.name + " say hello");
    }
};
student.haha();