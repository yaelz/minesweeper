'use strict';

(function () {

  /* @ngInject */
  function cellFactory() {
    function Cell() {
      // TODO should inner functions also be with this underscore ?
      this._isMine = false;
      this._mineNeighbors = 0;
      this._isFlagged = false;
      this._isRevealed = false;
    }

    // Service logic
    // ...

    // Public API here
    Cell.prototype.isMine = function () {
      return this._isMine;
    };

    Cell.prototype.setMine = function () {
      this._isMine = true;
    };

    Cell.prototype.isEmpty = function () {
      return (!this._isMine) && (this._mineNeighbors === 0);
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

    Cell.prototype.reveal = function () {
      if (!this.isFlagged()) {
        this._isRevealed = true;
      }
    };

    Cell.prototype.isRevealed = function () {
      return this._isRevealed;
    };

    return Cell;
  }

  angular
    .module('minesweeperAppInternal')
    .factory('Cell', cellFactory);

})();
