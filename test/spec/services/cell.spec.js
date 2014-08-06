'use strict';

describe('Service: cell', function () {

  // load the service's module
  beforeEach(function () {
    module('minesweeperAppInternal');

    //add your mocks here
  });

  // instantiate service
  var Cell;
  beforeEach(inject(function (_Cell_) {
    Cell = _Cell_;
  }));

  it('should create a new cell', function () {
    expect(new Cell()).toBeDefined();
  });

  it('should create a new mine cell', function () {
    var cell = new Cell(true);
    expect(cell.isMine()).toBeTruthy();
  });

  it('should hold the number of mine cells around it', function () {
    // TODO is this fine as the next test? Am I not missing something?
    var cell = new Cell();
    cell.addMineNeighbor();
    expect(cell.numOfMineNeighbors()).toBe(1);
    cell.addMineNeighbor();
    expect(cell.numOfMineNeighbors()).toBe(2);
  });

  it('should toggle flag', function () {
    var cell = new Cell();
    expect(cell.isFlagged()).toBe(false);
    cell.toggleFlag();
    expect(cell.isFlagged()).toBe(true);
  });

});
