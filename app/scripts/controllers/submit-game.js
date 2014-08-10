'use strict';

(function () {

  /* @ngInject */
  function SubmitGameController(_$scope_) {
    var $scope = _$scope_;
    $scope.master = {};

    $scope.update = function (user) {
      $scope.master = angular.copy(user);
    };

    $scope.reset = function () {
      $scope.user = angular.copy($scope.master);
    };

    $scope.reset();
  }

  angular
    .module('minesweeperAppInternal')
    .controller('SubmitGameController', SubmitGameController);

})();
