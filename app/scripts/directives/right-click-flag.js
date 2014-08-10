'use strict';

(function () {

  /* @ngInject */
  function rightClickFlag($parse) {
    return function(scope, element, attrs) {
      var fn = $parse(attrs.rightClickFlag);
      element.bind('contextmenu', function(event) {
        scope.$apply(function() {
          event.preventDefault();
          fn(scope, {$event:event});
        });
      });
    };
  }

  angular
    .module('minesweeperAppInternal')
    .directive('rightClickFlag', rightClickFlag);

})();
