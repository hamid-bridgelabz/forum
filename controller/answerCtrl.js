angular.module("myApp")
.controller("answerCtrl",function ($scope,restService,$state) {
  console.log($state.params.filaName);
  $scope.answerInit=function () {
    var tech = $state.params.filaName.toLowerCase();
    restService.httpRequest("/api/"+tech+".json").then(function (data) {
      $scope.linkList = data.data;
    })
  }
})
