/**
 * Created by sks on 2016/7/18.
 */
namespace cn.zhang{
    import Hello=cn.zhang.hello.Hello;

    export class Main{
        constructor(){
            // var h=new cn.zhang.hello.Hello();
            var h:Hello=new Hello();
            h.sayHello();
        }
    }
}
new cn.zhang.Main();