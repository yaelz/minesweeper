'use strict';

(function () {

  /* @ngInject */
  function GameController($scope, Board) {
    $scope.$emit('we are using controllerAs syntax, scope is used only for events and watches');
    this.game = undefined;
    this.state = undefined;
    this.startGame = function () {
      this.game = new Board(3, 5, 1);
      this.state = 'Playing';
    };
    this.endGame = function () {
      this.state = 'Done';
    };
  }

  angular
    .module('minesweeperAppInternal')
    .controller('GameController', GameController);

})();
