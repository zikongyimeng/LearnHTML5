/**
 * Created by sks on 2016/6/15.
 */


(function () {

    function Human(name) {
        var self={};
        
        self.name=name;//self里面的name属性
        
        self.sayHello=function () {      //self里面的sayHello属性
            console.log(self.name+" say hello");
        };
        return self;
    }
    window.Human=Human;//设为全局变量，任何文件都能访问到
    
}());