var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider

.when('/about', {
    templateUrl : 'pages/about.html',
    controller  : 'AboutController'
  })
  .when('/', {
    templateUrl : 'pages/home.html',
    controller  : 'HomeController'
  })

  .when('/reg', {
    templateUrl : 'pages/reg.html',
    controller  : 'regController'
  })

  

  .otherwise({redirectTo: '/'});
});

app.controller('AboutController', function($scope) {
});

app.controller('HomeController', function($scope) {
});

app.controller('regController', function($scope) {
});


