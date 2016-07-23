/**
 * Created by sks on 2016/7/19.
 */

/*class Main{
 constructor(){

 $.get("http://news.baidu.com").done(function (data) {
 console.log(data);
 });
 }
 }
 new Main();*/



class Main{
    constructor(){
        // $.get("[图片]http://news.baidu.com/ns?word=javascript").done(function (data) {

        $.get("http://news.baidu.com/ns?word=javascript").done(function (data) {

            // console.log(data);
            var p = /<div\s+class="result"[\s\S]*?<h3\s+class="c-title"[\s\S]*?<a\s+href="([^"]+)"[\s\S]*?"([^"]+<em>JavaScript<\/em>[^"]+)"[\s\S]*?<\/div>/gi;
            var i=1;

            var result = p.exec(data);
            // console.log(result);

           while (true) {

                var result = p.exec(data);
                console.log(result);
                if (result) {

                    var href =result[1];
                    console.log(href);
                    var a = result[2];

                    var q = />(.+)<em>(.+)<\/em>(.+)<\/a>/;
                    var q2 = /><em>(.+)<\/em>(.+)<\/a>/;


                    var text = q.exec(a);
                    if (text){
                        var textAll = text[1]+text[2]+text[3]+"<br>";
                        var news = document.getElementById("news");
                        var aaa = document.createElement("a");
                        aaa.href = href;
                        aaa.innerHTML = textAll;
                        news.appendChild(aaa);
                        console.log(textAll);
                    }else {
                        text = q2.exec(a);
                        var textAll2 = text[1]+text[2]+"<br>";
                        var news = document.getElementById("news");
                        var aaa = document.createElement("a");
                        aaa.href = href;
                        aaa.innerHTML = textAll2;
                        news.appendChild(aaa);

                        console.log(textAll2);
                    }
                } else {
                    break;
                }
            }

        });
    }
}
new Main();
