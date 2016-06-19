/**
 * Created by sks on 2016/6/18.
 */

window.zhang=window.zhang||{};

(function () {

    function Human(name) {
        return{
            _name:name,
            sayHello:function () {
            console.log(this.name+"　干嘛呢");
        },
            get name(){
              return this._name;
        }
      };
    }
   window.zhang.Human=Human;

})();