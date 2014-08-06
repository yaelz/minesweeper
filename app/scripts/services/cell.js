'use strict';

(function () {

  /* @ngInject */
  function cellFactory() {
    function Cell(isMine) {
      this._isMine = isMine || false;
      this._mineNeighbors = 0;
      this._isFlagged = false;
    }

    // Service logic
    // ...

    // Public API here
    Cell.prototype.isMine = function () {
      return this._isMine;
    };

    Cell.prototype.addMineNeighbor = function () {
      this._mineNeighbors++;
    };

    Cell.prototype.numOfMineNeighbors = function () {
      return this._mineNeighbors;
    };

    Cell.prototype.isFlagged = function () {
      return this._isFlagged;
    };

    Cell.prototype.toggleFlag = function () {
      this._isFlagged = !this._isFlagged;
    };

    return Cell;
  }

  angular
    .module('minesweeperAppInternal')
    .factory('Cell', cellFactory);

})();
