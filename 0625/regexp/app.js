/**
 * Created by sks on 2016/6/25.
 */


(function () {
    
    function init() {
        var str="Hello World";
        var p=/[a-f]/g;  //这个正则公式的意思是查找a-f之间的字符
        
        while (true){
            var result=p.exec(str);  //用正则公式进行匹配
            
            if(result){
                console.log(result);
            }else {
                break;
            }
        }
    }
    init();
})();