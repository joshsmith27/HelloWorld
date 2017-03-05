var app = angular.module('joshuarsmith', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('Intro',{
    url:'/Intro',
    templateUrl:'/views/intro.html',
    controller: 'introAngularCtrl',
  });
  $urlRouterProvider
  .otherwise('/Intro');
});
