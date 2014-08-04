'use strict';

(function () {

  /* @ngInject */
  function randomArrayFiller() {
    // AngularJS will instantiate a singleton by calling "new" on this function

    // Public API here
    this.getRandomNum = function (maxNum) {
      var rand = Math.floor(Math.random() * maxNum);
      return rand;
    };

    this.getRandArray = function (numOfRows, numOfCols) {
      var arr = [];
      var rows;
      for (var row = 0; row < numOfRows; row++) {
        rows = [];
        for (var col = 0; col < numOfCols; col++) {
          rows.push(0);
        }
        arr.push(rows);
      }
      return arr;
    };
  }

  angular
    .module('minesweeperAppInternal')
    .service('randomArrayFiller', randomArrayFiller);

})();
