/**
 * Created by sks on 2016/8/18.
 */
var app=angular.module("app",[]);

app.controller("controler",function ($scope) {
    $scope.message="ok";
    // $apply传递数据模型，要有回调函数
    // 如果使用jquery里面的方式改变数据模型失败的时候要加$apply(如下面的例子)
    // setTimeout不可以改变里面的内容，可以使用angularjs提供的timeout
    
    // 2秒后把message的内容变为aaa
    setTimeout(function () {
        $scope.$apply(function () {
            $scope.message="aaa"   
        });
    },2000);
});