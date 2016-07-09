/**
 * Created by sks on 2016/7/6.
 */

(function () {
    
    var div1;
    function init() {
        div1=$(".div1");
        div2=$(".div2");
        
        
        div1.css({
            width:"200px",
            height:"200px",
            background:"black",
            position:"absolute"
        });

        div2.css({
            width:"0px",
            height:"200px",
            background:"purple",
            position:"absolute",
            marginLeft:100
    });


        div1.click(function () {
            $(this).zhuan1();
        });
        div2.click(function () {
            $(this).zhuan2();
        })
    }
    init();
})();