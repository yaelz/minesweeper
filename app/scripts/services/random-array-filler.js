'use strict';

(function () {

  /* @ngInject */
  function RandomArrayFiller() {
    // AngularJS will instantiate a singleton by calling "new" on this function

    // Public API here
    this.getRandomNum = function (maxNum) {
      return Math.floor(Math.random() * maxNum);
    };

    this.getRandArray = function (numOfRows, numOfCols, numOfMines) {
      var arr = [];
      var rows, row, col;
      for (row = 0; row < numOfRows; row++) {
        rows = [];
        for (col = 0; col < numOfCols; col++) {
          rows.push(0);
        }
        arr.push(rows);
      }

      var minesAlreadyThere = 0;
      var mineIdx;
      var placesInBoard = numOfRows * numOfCols;
      while (minesAlreadyThere < numOfMines) {
        mineIdx = Math.floor(Math.random() * placesInBoard);
        row = Math.floor(mineIdx / numOfCols);
        col = mineIdx % numOfCols;
        if (arr[row][col] === 0) {
          arr[row][col] = 1;
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
