'use strict';

(function () {

  /* @ngInject */
  function BoardFactory(randomArrayFiller) {
    function Board(numOfRows, numOfColumns, numOfMines) {
      this._numOfRows = numOfRows;
      this._numOfColumns = numOfColumns;
      this._grid = randomArrayFiller.getRandArray(numOfRows, numOfColumns, numOfMines);
      this.fillBoard();
    }
    // Service logic
    // ...

    Board.prototype.getCell = function (col, row) {
      return this._grid[col][row];
    };

    Board.prototype.fillBoard = function () {
      var numOfRows = this._grid.length;
      if (numOfRows === 0) {
        // TODO ugly! but what if the board is empty? Should I allow the first test with no args in the board constructor?
        return Board;
      }
      // TODO refactor
      var numOfCols = this._grid[0].length;
      for (var row = 0; row < numOfRows; row++) {
        for (var col = 0; col < numOfCols; col++) {
          if (!this._grid[row][col].isMine()) {
            continue;
          }
          if (row !== 0) {
            this._grid[row - 1][col].addMineNeighbor();
            if (col !== 0) {
              this._grid[row - 1][col - 1].addMineNeighbor();
            }
          }
          if (col !== 0) {
            this._grid[row][col - 1].addMineNeighbor();
            if (row !== numOfRows - 1) {
              this._grid[row + 1][col - 1].addMineNeighbor();
            }
          }
          if (row !== numOfRows - 1) {
            this._grid[row + 1][col].addMineNeighbor();
            if (col !== numOfCols - 1) {
              this._grid[row + 1][col + 1].addMineNeighbor();
            }
          }
          if (col !== numOfCols - 1) {
            this._grid[row][col + 1].addMineNeighbor();
            if (row !== 0) {
              this._grid[row - 1][col + 1].addMineNeighbor();
            }
          }
        }
      }
    };

    Board.prototype.getBoard = function () {
      return this._grid;
    };

    Board.prototype.reveal = function (row, col) {
      var cell = this._grid[row][col];
      var numOfRevealed = 0;
      cell.reveal();
      numOfRevealed++;
      if (cell.isMine() || (cell.numOfMineNeighbors() !== 0 && cell.numOfMineNeighbors() !== undefined)) {
        return 1;
      }
      //console.log('row: ' + row + ' col: ' + col);
      var rowStart = Math.max(row - 1, 0);
      var rowFinish = Math.min(row + 1, this._numOfRows - 1);
      var colStart = Math.max(col - 1, 0);
      var colFinish = Math.min(col + 1, this._numOfColumns - 1);
      for (var curRow = rowStart; curRow <= rowFinish; curRow++) {
        for (var curCol = colStart; curCol <= colFinish; curCol++) {
          if ((curRow !== row || curCol !== col) && !this._grid[curRow][curCol].isRevealed()) {
            //console.log('row n: ' + curRow + ' col n: ' + curCol);
            numOfRevealed += this.reveal(curRow, curCol);
//            var i = 1;
          }
        }
      }
      return numOfRevealed;
    };

    return Board;
  }

  angular
    .module('minesweeperAppInternal')
    .factory('Board', BoardFactory);

})();
