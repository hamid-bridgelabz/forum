angular.module("myApp")
.controller("questionCtrl",function ($scope,restService) {
  $scope.questionInit=function () {
restService.httpRequest("/api/tech-list.json").then(function (data) {
  $scope.questionList=data.data;
})
  }
})
