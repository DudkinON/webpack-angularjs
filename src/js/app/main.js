import angular from "angular";

const app = angular.module('app', [
  require('angular-route')
]);

// define app config
app.config(['$routeProvider', '$locationProvider',
  function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.when('/', {templateUrl: 'index.html'});
    $routeProvider.otherwise({redirectTo: '/'});
  }]);

// TODO: Main controller
app.controller('MainController', function () {
  let $scope = this;
  $scope.header = "Angular JS: Webpack configuration";
});
