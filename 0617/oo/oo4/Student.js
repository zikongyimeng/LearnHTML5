/**
 * Created by sks on 2016/6/18.
 */

window.zhang=window.zhang||{};

(function () {

    function Student(name) {
        return{
            __proto__:zhang.Human(name),//继承关键字__proto__，继承父类

            sayHi:function () {
                console.log(this.name+" say hi");
            },
            
            
            
            //继承父类的sayHello方法
            sayHello:function () {
                this.__proto__.sayHello.call(this);//输出父类的结果
                console.log(this.name+"说你好");//重置
                
            }

        };
    }

    zhang.Student=Student;
})();