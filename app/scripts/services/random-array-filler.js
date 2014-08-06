'use strict';

(function () {

  /* @ngInject */
  function RandomArrayFiller(randNumber) {
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

      //TODO object that holds mines in col and row {col: colOfMine, row: rowOfMine} and then go over the array one time
      var minesAlreadyThere = 0;
      while (minesAlreadyThere < numOfMines) {
        row = randNumber(numOfRows);
        col = randNumber(numOfCols);
        if (arr[row][col] === 0) {
          arr[row][col] = 'x';
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
