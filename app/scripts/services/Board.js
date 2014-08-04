'use strict';

(function () {

  /* @ngInject */
  function BoardFactory() {
    function Board(numOfRows, numOfColumns, numOfMines) {
      var columns;
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
      for (var i = 0; i < this._rows.length; i++) {
        for (var j = 0; j < this._rows[0].length; j++) {
          if (minesAlreadyThere < numOfMines) {
            this._rows[i][j] = 1;
            minesAlreadyThere++;
          }
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
