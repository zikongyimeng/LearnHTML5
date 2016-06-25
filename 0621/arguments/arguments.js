/**
 * Created by sks on 2016/6/21.
 */


(function () {

   /* function max() {
        console.log(arguments);  //输出结果[2,4,3,6,5,67,45,23,22]
        console.log(arguments.length);//输出结果是9
        console.log(arguments[4]);//输出下标为4的数字5
    }
   max(2,4,3,6,5,67,45,23,22);*/


    /*
    //排序输出最大值
    function max() {
        var arr=[];//定义一个空数组
        for (var i=0;i<arguments.length;i++){
            arr.push(arguments[i]);//把数添加到空数组里
        }
        console.log(arr);//输出[2, 4, 3, 6, 5, 67, 45, 23, 22]
        
        arr.sort(function (a,b) {
            return a<b;//当a<b的时候a与b调换位置，大数在前
        });
        return arr[0];//因为排序是让大数在前，所以这里返回的是下标为0即最大值的下标的数字
    }
    console.log(max(2,4,3,6,5,67,45,23,22));
*/




    //也可这样排序输出最大值
    function max() {
        var arr=[];
        for (var i=0;i<arguments.length;i++) {
            arr.push(arguments[i]);
        }
        var arr1=arr.sort(function (a,b) {

            if (a<b){
                return 1;
            }
            if (a>b){
                return -1;
            }
            return 0;
        });
        return arr1[0];//返回最大值
    }
    console.log(max(2,4,3,6,5,67,45,23,22));//输出最大值
})();