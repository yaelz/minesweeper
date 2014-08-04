'use strict';

(function () {

  /* @ngInject */
  function BoardFactory(randomArrayFiller) {
    function Board(numOfRows, numOfColumns, numOfMines) {
      var columns;
      this._numOfMines = numOfMines;
      this._rows = randomArrayFiller.getRandArray(numOfRows, numOfColumns, numOfMines);
    }
    // Service logic
    // ...

    Board.prototype.getRows = function () {
      return this._rows;
    };

    Board.prototype.numOfMines = function () {
      return this._numOfMines;
    };

    return Board;
  }

  angular
    .module('minesweeperAppInternal')
    .factory('Board', BoardFactory);

})();
