/**
 * Created by sks on 2016/8/17.
 */
//创建应用程序模板
// 第一个参数是应用程序的名字
// angular.module("app",[]);   /*可以这样定义，也可以下面这一行声明一下*/
var app=angular.module("app",[]);

// 一个应用程序可以有多个控制器
// 通过应用模板创建控制器
// 每个控制器控制不同的代码
// 第一个参数是控制器的名字，第二个参数是回调函数
app.controller("mainController",function ($scope,$rootScope) {
    // $scope是控制器中的对象,作用域是只在本控制器内，通过它的变量在其他控制器内访问不到，必须是这个名字,已经封装好的
    // $rootScope作用域是全局，通过它的变量在任何控制器都能访问，例如names在其他控制器内也能访问到
    $scope.score=50;
    $rootScope.names=["zhao","qian","sun","li"];
});
app.controller("otherController",function ($scope) {
    
});