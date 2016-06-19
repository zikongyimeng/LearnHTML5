/**
 * Created by sks on 2016/6/18.
 */


window.zhang=window.zhang||{};

(function () {

    function Human(name) {

        this._name = name;


        //get方法
        Object.defineProperty(this,"name",{
            get:function () {
                return this._name;
            }
        });
        this.sayHello=function () {
            console.log(this._name+" say hello");
        }
    }
    zhang.Human=Human;

})();