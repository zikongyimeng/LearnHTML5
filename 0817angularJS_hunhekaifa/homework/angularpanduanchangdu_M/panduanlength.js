/**
 * Created by sks on 2016/8/17.
 */


(function () {
    function Main() {
        var myApp=angular.module("myApp",[]);

        myApp.controller("panduan",function ($scope) {

            $scope.put="";
            $scope.xishu="";


            $scope.aaa=function () {
                if($scope.put.length>0&&$scope.put.length<=5){
                    return $scope.xishu="危险"
                }
                if($scope.put.length>5&&$scope.put.length<=10){
                    return $scope.xishu="中等"
                }
                if($scope.put.length>10&&$scope.put.length<=15){
                    return $scope.xishu="安全"
                }
                if($scope.put.length>16){
                    return $scope.xishu="输入有错"
                }
            }


        });
    }
    Main();
})();

