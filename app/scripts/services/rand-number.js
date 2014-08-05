'use strict';

(function () {

  /* @ngInject */
  function randNumberFactory() {
    return function (max) {
      return Math.floor(Math.random() * max);
    };
  }

  angular
    .module('minesweeperAppInternal')
    .factory('randNumber', randNumberFactory);

})();
