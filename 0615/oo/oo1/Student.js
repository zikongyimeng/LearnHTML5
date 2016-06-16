/**
 * Created by sks on 2016/6/15.
 */

(function () {
     
    function Student(name) {

        //继承
        var self=Human(name);
        
        self.learn=function () {     //self里面的learn属性
            console.log(self.name+" 学习");
        };


        //重置
        var superSayHello=self.sayHello;
        self.sayHello=function () {
            superSayHello();//在重置结果输出前输出原来的结果 zhangsan say hello
            console.log("学生"+self.name+"说：“你好”");
        };

        return self;
        
    }
    window.Student=Student;//设为全局变量，任何文件都能访问到

}());