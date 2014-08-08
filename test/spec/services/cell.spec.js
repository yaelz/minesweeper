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

  it('should create a new cell empty', function () {
    var cell = new Cell();
    expect(cell.isEmpty()).toBeTruthy();
  });

  it('should create a new mine cell when given true in the constructor', function () {
    var cell = new Cell();
    cell.setMine();
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

  it('should create a non-revealed cell', function () {
    var cell = new Cell();
    expect(cell.isRevealed()).toBe(false);
    cell.reveal();
    expect(cell.isRevealed()).toBe(true);
  });

  it('should do nothing when is flagged', function () {
    var cell = new Cell();
    cell.toggleFlag();
    cell.reveal();
    expect(cell.isRevealed()).toBe(false);
    cell.toggleFlag();
    cell.reveal();
    expect(cell.isRevealed()).toBe(true);
  });

});
