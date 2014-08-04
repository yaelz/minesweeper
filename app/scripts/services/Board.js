'use strict';

(function () {

  /* @ngInject */
  function BoardFactory() {
    function Board(numOfRows, numOfColumns, numOfMines) {
      var columns;
      this._numOfCols = numOfColumns;
      this._numOfRows = numOfRows;
      this._numOfMines = numOfMines;
      this._rows = [];
      for (var row = 0; row < numOfRows; row++) {
        columns = [];
        for (var col = 0; col < numOfColumns; col++) {
          columns.push(0);
        }
        this._rows.push(columns);
      }
      this.initBoard(numOfMines);
    }

    Board.prototype.initBoard = function (numOfMines) {
      var minesAlreadyThere = 0;
      var mineIdx, row, col;
      var placesInBoard = this._numOfRows * this._numOfCols;
      while (minesAlreadyThere < numOfMines) {
        mineIdx = Math.floor(Math.random() * placesInBoard);
        row = Math.floor(mineIdx / this._numOfRows);
        col = mineIdx % this._numOfCols;
        if (this._rows[row][col] === 0) {
          this._rows[row][col] = 1;
          minesAlreadyThere++;
        }
      }
    };
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
