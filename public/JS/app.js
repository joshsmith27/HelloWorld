var app = angular.module('joshuarsmith', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('Intro',{
    url:'/Intro',
    templateUrl:'/views/intro.html',
    controller: 'introAngularCtrl',
  })
  .state('resume',{
    url:'/Resume',
    templateUrl:'/views/resume.html',
  })
  .state('coverletter',{
    url:'/CoverLetter',
    templateUrl:'/views/coverletter.html',
  });
  $urlRouterProvider
  .otherwise('/Intro');
});
