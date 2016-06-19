/**
 * Created by sks on 2016/6/18.
 */


window.zhang=window.zhang||{};


(function () {

    /*//继承父类代码
    function Student(name) {
        zhang.Human.call(this,name);
    }
    Student.prototype=new zhang.Human();
    zhang.Student=Student;
*/

    //重置代码
    function Student(name) {
        zhang.Human.call(this,name);


      //var superSayHello=this.sayHello;//与下面的输出父类代码同时使用
    this.sayHello=function () {
        //superSayHello.call(this);//输出父类代码
        console.log(this.name+"说你好");
    };
    this.sayHi=function () {
        this.sayHello();
        console.log("笑死我了");
      }
    }

     Student.prototype=new zhang.Human();
     zhang.Student=Student;


})();