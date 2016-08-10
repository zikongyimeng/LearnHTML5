/**
 * Created by sks on 2016/8/2.
 */
(function () {

    var obanner = document.getElementById("banner");
    var olist =document.getElementsByClassName("list")[0];
    var oLi = olist.getElementsByTagName("li");
    var ostyle = document.getElementById("ostyle");
    var octrl = document.getElementById("ctrl");
    var akey = octrl.getElementsByTagName("li");
    var uim = 20;
    var olength=olist.clientWidth/uim;
    //alert(olength)
    var sli = "";
    var ost ="";
    for (var i=0;i<olength;i++) {
        sli+='<li><a href="#"></a><a href="#"></a><a href="#"></a><a href="#"></a></li>'
        ost+='.list li:nth-child('+(i+1)+') a{background-position: -'+i*uim+'px;}'
        olist.innerHTML=sli;
        ostyle.innerHTML+=ost;
    }
    for(var i=0;i<oLi.length;i++){
        oLi[i].style.width=uim+'px'
    }

    for(var i=0;i<akey.length;i++){
        akey[i].index=i;
        akey[i].onclick=function(){
            for (var j=0;j<oLi.length;j++) {
                oLi[j].style.transition=500+(j*50)+'ms';
                oLi[j].style.transform='rotateX('+this.index*90+'deg)';
            }
        }
    }
    
})();