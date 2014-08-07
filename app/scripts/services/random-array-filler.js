'use strict';

(function () {

  /* @ngInject */
  function RandomArrayFiller(randNumber, Cell) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    // Public API here
    this.getRandomNum = function (maxNum) {
      return Math.floor(Math.random() * maxNum);
    };

    this.init = function (numOfRows, numOfCols) {
      var rows, row, col;
      var arr = [];
      for (row = 0; row < numOfRows; row++) {
        rows = [];
        for (col = 0; col < numOfCols; col++) {
          rows.push(new Cell());
        }
        arr.push(rows);
      }
      return arr;
    };

    this.getRandArray = function (numOfRows, numOfCols, numOfMines) {
      var arr = this.init(numOfRows, numOfCols);
      var row, col;
      var minesAlreadyThere = 0;
      while (minesAlreadyThere < numOfMines) {
        row = randNumber(numOfRows);
        col = randNumber(numOfCols);
        if (!arr[row][col].isMine()) {
          arr[row][col].setMine();
          minesAlreadyThere++;
        }
      }
      return arr;
    };
  }

  angular
    .module('minesweeperAppInternal')
    .service('randomArrayFiller', RandomArrayFiller);

})();
