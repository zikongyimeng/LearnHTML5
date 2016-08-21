/**
 * Created by liuyujing on 16/8/17.
 */
var app = angular.module("app",[]);
app.controller("mianController",function ($scope) {
    $scope.name = "xiaoMing";
    $scope.responseData = {image:"image",list:[3,5,4]};
    // setTimeout(function () {
    //     // $scope.name = "小明的爹";
    //     $scope.$apply(function () {
    //         $scope.name = "小明的爹";
    //     });
    // },3000);

    $scope.changeMessage = function () {
      $scope.name = "xiaoMing的爷";
    };

    $scope.$watch("name",function (newValue) {
       // alert(newValue);
    });

    $scope.isArray = angular.isArray($scope.name);
    // $scope.resultName = angular.uppercase($scope.name);
    $scope.s1 = "111";
    $scope.s2 = "111";
    // $scope.resultName =
    $scope.$watch("name",function (newVaule) {
        console.log(oldValue);
        console.log(newVaule);
        console.log($scope.name);
        if (angular.equals(newVaule,$scope.name)){
            // alert("匹配");
        }
    });

    $scope.obj1 = {name:"123"};
    $scope.obj2 = {sex:"男"};
    $scope.resultName = angular.extend($scope.obj2,$scope.obj1);
    console.log($scope.obj2);
    var list = [1,4,33,4];
    angular.forEach(list,function (value,index) {
       console.log(value);
        console.log(index);
    });

    var person = {name:"xiaoming"};
    var all = angular.bind(person,function (message) {
        this.info = this.name + message;
        console.log(this.info);
    });
    all(22);

    var string = "";
    var result = angular.isArray(string);
});
