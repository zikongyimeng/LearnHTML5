/**
 * Created by sks on 2016/6/15.
 */


(function () {

    function Human(name) {
        var self={};
        
        
        self._name=name;//self里面的name属性

        //原来的方法
        /*self.setName=function (name) {
            self._name=name;
            console.log("名字改变了");
        };
        
        self.getName=function () {
            return self._name;
        };*/




        //ES5 新特性set/get方法
        Object.defineProperty(self,"name",{
            get:function () {
                return self._name;
            },
            set:function (value) {
                self._name=value;
                console.log("名字改变了");
            }
        });



        self.sayHello=function () {      //self里面的sayHello属性方法
            console.log(self._name+" say hello");
        };
        self.hi=function () {
            switch (arguments.length){
                case 0:
                    console.log("Hello World");
                    break;
                case 1:
                    var name=arguments[0];
                    console.log("Hello "+name);
                    break;
                default:
                    console.error("参数不正确");
            }
        };
        return self;
    }


    //静态函数的实现
    Human.createHuman=function (name) {
        return Human(name);
    };


    //静态属性
    Human.CLASS_NAME="Human";

    window.Human=Human;//设为全局变量，任何文件都能访问到
    
}());