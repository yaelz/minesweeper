'use strict';

(function () {

  /* @ngInject */
  function GameController(_$scope_, Board) {
    var $scope = _$scope_;
    $scope.$emit('we are using controllerAs syntax, scope is used only for events and watches');
    this.game = undefined;
    this.state = undefined;
    this.startGame = function () {
      this.game = new Board(this.rows, this.cols, this.mines);
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
