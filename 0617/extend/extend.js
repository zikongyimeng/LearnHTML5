/**
 * Created by sks on 2016/6/17.
 */
(function () {

    function copyMember(dist,from) {   //dist和from是两个变量
        for (var k in from){    //对from进行遍历
            dist[k]=from[k];     //把from里的遍历给dist
        }
    }

    function A() {
        var self={};

        self.sayHello=function () {
            console.log("Hello")
        };
        return self;
    }
    
    
    function C() {
        var self={};
        self.sayHi=function () {
            console.log("Hi");
        };
        return self;
    }
    
    
    
    function B() {
        var self={};
        copyMember(self,A());//把A()给self
        copyMember(self,C());//把C()给self
        return self;
    }
    
    var b=B();
    b.sayHello();
    b.sayHi();

})();