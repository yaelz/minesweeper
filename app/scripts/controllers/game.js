'use strict';

(function () {

  /* @ngInject */
  function GameController($scope, Board) {
    $scope.$emit('we are using controllerAs syntax, scope is used only for events and watches');
    this.game = undefined;
    this.startGame = function () {
      this.game = new Board(3, 2, 1);
      //angular.element('button').addClass('try');
      angular.element('#start-button').remove();
    };
  }

  angular
    .module('minesweeperAppInternal')
    .controller('GameController', GameController);

})();
