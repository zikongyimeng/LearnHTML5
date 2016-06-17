/**
 * Created by sks on 2016/6/14.
 */
/*此代码在google浏览器上不能排序，在火狐可以，可能是浏览器的原因*/
(function () {

    var reverse=true;


    var sortScor=[{name:"zhao",score:10},{name:"qian",score:30},{name:"sun",score:50},
        {name:"li",score:39},{name:"zhou",score:70},{name:"wu",score:88},{name:"zheng",score:28},
        {name:"wang",score:49},{name:"zhang",score:99},{name:"xie",score:66},{name:"pan",score:56}];

    function sortFunction(a,b) {
        if(reverse){
            return a.score > b.score;
        }else{
            return a.score < b.score;
        }
    }

    function linkSortByScoreClickedHandler() {
        sortScor.sort(sortFunction);
        reverse= !reverse;

        addTableToBody();
    }

    function createTableHeader() {
        var tr=document.createElement("tr");
        var th=document.createElement("th");
        th.innerHTML="姓名";
        tr.appendChild(th);

        th=document.createElement("th");
        var a=document.createElement("a");
        a.href="#";
        a.innerHTML="分数";
        a.onclick=linkSortByScoreClickedHandler;
        th.appendChild(a);
        tr.appendChild(th);
        return tr;

    }



   function creatTableRow(students) {
       var tr=document.createElement("tr");
       var td=document.createElement("td");
       td.innerHTML=students.name;
       tr.appendChild(td);
       
       td=document.createElement("td");
       td.innerHTML=students.score;
       tr.appendChild(td);
       return tr;
   }

    function createTable() {
        var table=document.createElement("table");
        table.border=1;
        table.appendChild(createTableHeader());
        sortScor.forEach(function (item) {
            table.appendChild(creatTableRow(item));
        });
        return table;
    }
    var currentTable;
    function addTableToBody() {
        if (currentTable){
            document.body.removeChild(currentTable);
        }
        currentTable=createTable();
        document.body.appendChild(currentTable);
    }




    function init() {
        addTableToBody();
    }
    init();


}());