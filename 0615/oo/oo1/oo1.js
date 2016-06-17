/**
 * Created by sks on 2016/6/15.
 */

(function () {

    function init() {

        var h=Human("ucai");
        h.sayHello();//输出 ucai say hello
        
        
        var s=Student("zhangsan");
        s.learn();//输出 zhangsan 学习
        s.sayHello();//输出 学生zhangsan说：“你好”
    }
    init();
}());