/**
 * Created by sks on 2016/6/25.
 */


(function () {

    function init() {
        var url = "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu&wd=Java&rsv_pq=be8a002a0025967c&rsv_t=25e7bxH%2B%2BCsFBTGwoMxp7o4kdahT6Eeh7UpYJaNRWXmAWKjwAuoxiDuzLLM&rqlang=cn&rsv_enter=1&rsv_sug3=5&rsv_sug1=4&rsv_sug7=100&rsv_sug2=0&inputT=1307&rsv_sug4=2525";

        var pKv=/(\?|\&)([^=]+)=([^&]+)/g;   //正则公式

        while (true){
            var result=pKv.exec(url);  //匹配

            if (result){
                //console.log(result);//输出问号后面所有东西并且还输出每个&后面的东西
            }else {
                break;
            }
        }


        var result=/\?(.*)/.exec(url);
        //console.log(result);//输出问号后面所有的东西
        if (result){
            var paramsStr=result[1];
            //console.log(paramsStr);//输出问号后面所有的东西

            while (true){
                var kvResult=pKv.exec(paramsStr);
                if (kvResult){
                    //console.log(kvResult);//输出每个&符号后的东西
                }else {
                    break;
                }
            }
            var kvsStr=result[1].split("&");//从有“&”的地方截但没有“&”
            kvsStr.forEach(function (item) {
                var kv=item.split("=");//从有“=”的地方截但没有“=”
                console.log(kv);  //输出键值对
            });
        }
    }
    init();

})();