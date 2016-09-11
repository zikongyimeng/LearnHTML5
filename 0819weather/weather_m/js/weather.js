/**
 * Created by sks on 2016/8/19.
 */
(function () {

    // var cityid;

    function Main() {
        this.getBody();
        this.getCity();
        this.inputOnfocus();
    }


    Main.prototype.getBody = function () {
        document.body.style.height = window.innerHeight + "px";
    };
    Main.prototype.getCity = function () {

        var self = this;

        $("#btn").on("click", function () {
            self.topDisNone();
            $(".futureCon").empty();
            document.getElementById("topImgCon").style.background="url('../images/bg2.png')";
            document.body.style.backgroundImage="url('../images/bg2.png')";
            document.getElementById("weatherCon").style.display="none";

            var inputSchVal = $("#inputSch").val();
            $.ajax({
                url: "http://apis.baidu.com/apistore/weatherservice/citylist",
                headers: {apikey: "7303af2a59e2754c56f26100db82e8c4"},
                method: "GET",
                dataType: "json",
                data: {cityname: inputSchVal},
                success: function (data) {
                    console.log(data);
                    if (data.errNum == -1) {
                        alert("请输入城市名称或城市代码")
                    } else {
                        $("#cityAllCon").empty();
                        var retdata = data.retData;
                        var ids = [];
                        $.each(retdata, function (i) {
                            var cityAll = $("<div class='kkk'>" + retdata[i].province_cn + '-' + retdata[i].district_cn + '-' + retdata[i].name_cn + "</div>")
                            // console.log("kkk"+retdata[i].province_cn);
                            ids.push(retdata[i].area_id);
                            $("#cityAllCon").append(cityAll);
                        });
                        var item = document.querySelectorAll(".kkk");

                        /*for(var i=0;i<item.length;i++){
                         (function (m) {
                         item[m].addEventListener("click",function () {
                         $.ajax({
                         url:"http://apis.baidu.com/apistore/weatherservice/cityid",
                         headers:{apikey:"7303af2a59e2754c56f26100db82e8c4"},
                         method:"GET",
                         dataType:"json",
                         data:{cityid:ids[m]},
                         success:function (data) {
                         console.log(data);
                         }
                         })
                         });
                         })(i);
                         }*/

                        for (var j = 0; j < item.length; j++) {
                            (function (n) {

                                item[n].addEventListener("click", function () {

                                    self.topDisBlock();
                                    document.getElementById("weatherCon").style.display="block";

                                    setTimeout('document.body.style.background="white"',400);
                                    $("#cityAllCon").empty();

                                    $("#inputSch").value="";
                                    
                                    // $("#inputSch").attr("value","");

                                    // $(".curTem").empty();
                                    self.clearToday();
                                    self.clearFuture();

                                    $.ajax({
                                        url: "http://apis.baidu.com/apistore/weatherservice/recentweathers",
                                        headers: {apikey: "7303af2a59e2754c56f26100db82e8c4"},
                                        method: "GET",
                                        dataType: "json",
                                        data: {cityid: ids[n]},
                                        success: function (data) {
                                            // var today=data.retData.today;
                                            // console.log("aa"+item.length);
                                            console.log("haha", data);
                                            // console.log("mmm", today);
                                            // console.log(today.curTemp);
                                            // curTemp=$("<div>"+today.curTemp+"</div>").addClass("curTem");
                                            // $("#topImgCon").append(curTemp);

                                            self.addToday(data);
                                            self.future(data);
                                        }
                                    })
                                });
                            })(j);
                        }
                    }
                }
            })
        });
    };
    //当天的天气情况
    Main.prototype.addToday = function (td) {
        var topImgConLeft = $("#topImgConLeft");
        var today = td.retData.today;
        console.log("to", today);

        this.todayWI={
            "晴": "w0.jpg", '多云': 'w1.jpg', '阴': 'w2.jpg', '阵雨': 'w3.jpg', '雷阵雨': 'w4.jpg',
            '雷阵雨伴有冰雹': 'w5.jpg', '雨夹雪': 'w6.jpg', '小雨': 'w7.jpg', '中雨': 'w8.jpg', '大雨': 'w9.jpg',
            '暴雨': 'w10.jpg', '大暴雨': 'w11.jpg',
            '暴雪': 'baoxue.jpg', '霾': 'mai.jpg', '雾': 'wu.jpg',  '阵雪': 'xue.jpg', '小雪': 'xue.jpg',
             '小到中雨': 'zhongyu.jpg', '中到大雨': 'baoyu.jpg', '大到暴雨': 'baoyu.jpg',
            '暴到大暴雨': 'baoyu.jpg', '大到特大暴雨': 'baoyu.jpg', "沙尘暴": 'sha.jpg', '强沙尘暴': 'sha.jpg',
            '小到中雪': 'xue.jpg', '中到大雪': 'baoxue.jpg', '大到暴雪': 'baoxue.jpg'
        };
        var todayTypes=today.type;
        var todayTypeImg=this.todayWI[todayTypes];   //当天天气对应的图片
        console.log("今天",todayTypeImg);
        var topImgCon=document.getElementById("topImgCon");
        topImgCon.style.background="url('../images/"+todayTypeImg+"') no-repeat 100% 100%";
        topImgCon.style.backgroundSize="100% 100%";
        // $("#topImgCon").css({
        //     backgroundColor:"#red",
        //     // background:"url('../images/'+todayTypeImg+'') no-repeat 100% 100%"
        // });

        var todayCurTemp = $("<div>" + today.curTemp + "</div>").addClass("todayCurTemp");
        topImgConLeft.append(todayCurTemp);
        var todayTtype = $("<div>" + today.type + "</div>").addClass("todayTtype");
        topImgConLeft.append(todayTtype);
        console.log("ff", today.fengxiang);
        var todayFeng = $("<div><span>" + today.fengxiang + "</span><span>" + today.fengli + "</span></div>").addClass("todayFeng");
        topImgConLeft.append(todayFeng);
        var todayTemp = $("<div>" + today.lowtemp + '～' + today.hightemp + "</div>").addClass("todayTemp");
        topImgConLeft.append(todayTemp);

        var topImgConRight = $("#topImgConRight");
        console.log("data", today.date);
        var todayData = $("<div>" + today.date + "</div>").addClass("td");
        topImgConRight.append(todayData);
        var todayWeek = $("<div>" + today.week + "</div>").addClass("todayWeek");
        topImgConRight.append(todayWeek);

        var cutCity = $("<div>" + td.retData.city + "</div>").addClass("cutCity");
        topImgConRight.append(cutCity);
        console.log("c", td.retData);
    };
    //清空当天的天气情况
    Main.prototype.clearToday = function () {
        $(".todayCurTemp").empty();
        $(".todayTtype").empty();
        $(".todayFeng").empty();
        $(".todayTemp").empty();
        $(".td").empty();
        $(".todayWeek").empty();
        $(".cutCity").empty();
    };
    //未来四天的天气情况
    Main.prototype.future = function (fut) {
        var forecast = fut.retData.forecast;
        var weatherCon = $("#weatherCon");
        console.log("forecast", forecast);
        this.img = {
            "晴": "d00.jpg", '多云': 'd01.jpg', '阴': 'd02.jpg', '阵雨': 'd03.jpg', '雷阵雨': 'd04.jpg',
            '雷阵雨伴有冰雹': 'd05.jpg', '雨夹雪': 'd06.jpg', '小雨': 'd07.jpg', '中雨': 'd08.jpg', '大雨': 'd09.jpg',
            '暴雨': 'd10.jpg', '大暴雨': 'd11.jpg', '特大暴雨': 'd12.jpg', '阵雪': 'd13.jpg', '小雪': 'd14.jpg',
            '中雪': 'd15.jpg', '大雪': 'd16.jpg', '暴雪': 'd17.jpg', '雾': 'd18.jpg', '冻雨': 'd19.jpg', '沙尘暴': 'd20.jpg',
            '小到中雨': 'd21.jpg', '中到大雨': 'd22.jpg', '大到暴雨': 'd23.jpg', '暴到大暴雨': 'd24.jpg',
            '大到特大暴雨': 'd25.jpg', '小到中雪': 'd26.jpg', '中到大雪': 'd27.jpg', '大到暴雪': 'd28.jpg',
            '浮沉': 'd29.jpg', '强沙尘暴': 'd30.jpg', '霾': 'd31.jpg'
        };
        var self = this;
        var weth, imgurl;
        var imgurlCon = [];
        $.each(forecast, function (h) {
            weth = forecast[h].type;
            imgurl = self.img[weth];
            imgurlCon.push(imgurl);
            var futureCon = $("<div><div class='futureConLeft'><div>" + forecast[h].date + "</div><div>" + forecast[h].week + "</div><div>" + forecast[h].fengli + "</div><div>" + forecast[h].lowtemp + "～" + forecast[h].hightemp + "</div></div><div class='futureConRight'><div id='futureFeng'>"+forecast[h].type+"</div></div></div>").addClass("futureCon");

            console.log("img", imgurl);
            console.log("天气", weth);

            weatherCon.append(futureCon);
        });
        // var futureConRightAll = document.getElementsByClassName("futureConRight");
        var futureConRightAll=document.querySelectorAll(".futureConRight");
        console.log("之一节点", futureConRightAll[1]);
        console.log("节点长度", futureConRightAll.length);
        console.log("图片长度", imgurlCon.length);
        console.log("之一图片", imgurlCon[1]);
        for (var f = 0; f < futureConRightAll.length; f++) {
            //  console.log("指定",imgurlCon[f]);
            console.log(futureConRightAll[f]);
            futureConRightAll[f].style.background = "url('../images/"+imgurlCon[f]+"') no-repeat 50% 90%";
        }
    };
    Main.prototype.clearFuture=function () {
        $("#weatherCon").empty();
    };
    Main.prototype.inputOnfocus=function () {
        var inputOF=$("#inputSch");

        var inputOFval=inputOF.value;
        inputOF.focus(function () {
            $("#topImgConLeft").css({
                // display:"none"
            });
            if(inputOFval !=null){
                // inputOF.attr("value","");
                inputOFval=""
            }else {
                // alert("kong")
            }
        })
    };
    Main.prototype.topDisNone=function () {
        $("#topImgConLeft").css({
            display:"none"
        });
        $("#topImgConRight").css({
            display:"none"
        })
    };
    Main.prototype.topDisBlock=function () {
        $("#topImgConLeft").css({
            display:"block"
        });
        $("#topImgConRight").css({
            display:"block"
        })
    };
    new Main();
})();

