angular.module("myApp",["ui.router"])
.config(function($stateProvider,$urlRouterProvider){
  $stateProvider
  .state("home",{
    url:"/",
    templateUrl:"template/header.html",
    controller:function(){
  })
  $urlRouterProvider.otherwise("/");
})
