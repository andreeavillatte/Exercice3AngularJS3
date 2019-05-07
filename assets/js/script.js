var app = angular.module('myapp', []);

app.controller('myCtrl', ['$scope', '$http', '$filter', function ($scope, $http, $filter) {
  $scope.item = $filter('date')('2017-01-23', "dd/MM/yyyy");
}]);

