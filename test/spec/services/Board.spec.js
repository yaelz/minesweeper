'use strict';

describe('Service: Board', function () {

  // load the service's module
  beforeEach(function () {
    module('minesweeperAppInternal');

    var fillerMock = function () {
      return [[1, 0], [0, 0]];
    };

    module({
      getRandArray: fillerMock
    });
  });

  // instantiate service
  var Board;
  beforeEach(inject(function (_Board_) {
    Board = _Board_;
  }));

  it('should create a board', function () {
    expect(new Board() instanceof Board).toBe(true);
  });

//  it('should be [-1,1,1,1]');

});
