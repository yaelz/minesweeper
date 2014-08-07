'use strict';

describe('Service: Board', function () {

  var mockBoardArray;
  // load the service's module
  beforeEach(function () {
    module('minesweeperAppInternal');

    var fillerMock = {
      getRandArray: jasmine.createSpy('getRandArray').andCallFake(function () {
        return mockBoardArray;
      })
    };

    module({
      randomArrayFiller: fillerMock
    });
  });

  function isMineClosure(mines, i, j) {
    var row = i;
    var col = j;
    return jasmine.createSpy('isMine').andCallFake(function checkIsMine() {
      return mines.some(function (mine) {return mine[0] === row && mine[1] === col; });
    });
  }

  function numOfMineNeighborsClosure(boardArray, i, j) {
    var row = i;
    var col = j;
    return jasmine.createSpy('numOfMineNeighbors').andCallFake(function addMineNeighborCalled() {
      return boardArray[row][col].addMineNeighbor.callCount;
    });
  }

  function isRevealedClosure(boardArray, i, j) {
    var row = i;
    var col = j;
    return function () {
      return boardArray[row][col].reveal.callCount !== 0;
    };
  }

  function setBoardArray(rows, cols, mines) {
    var boardArray = [];
    for (var i = 0; i < rows; i++) {
      boardArray.push([]);
      for (var j = 0; j < cols; j++) {
        boardArray[i].push({
          addMineNeighbor: jasmine.createSpy('addMineNeighbor'),
          numOfMineNeighbors: numOfMineNeighborsClosure(boardArray, i, j),
          isMine: isMineClosure(mines, i, j),
          reveal: jasmine.createSpy('reveal'),
          isRevealed: isRevealedClosure(boardArray, i, j)
        });
      }
    }

    mockBoardArray = boardArray;
  }

  // instantiate service
  var Board;
  beforeEach(inject(function (_Board_) {
    Board = _Board_;
  }));

  describe('Filling the board', function () {
    it('should create a board with mines', function () {
      var rows = 6;
      var cols = 5;
      var minesArr = [[1, 1], [3, 4]];
      setBoardArray(rows, cols, minesArr);
      var board = new Board(rows, cols, minesArr);
      var grid = board.getBoard();
      for (var row = 0; row < rows; row++) {
        for (var col = 0; col < cols; col++) {
          if ((row !== 1 && col !== 1) && (row !== 3 && col !== 4)) {
            expect(grid[row][col].isMine()).toBe(false);
          }
        }
      }
      expect(grid[1][1].isMine()).toBe(true);
      expect(grid[3][4].isMine()).toBe(true);
    });
    it('should make the cells hold the number of mine neighbors they have', function () {
      var rows = 6;
      var cols = 5;
      var minesArr = [[1, 4], [4, 0], [4, 2]];
      setBoardArray(rows, cols, minesArr);
      var board = new Board();
      expect(mockBoardArray[1][2].addMineNeighbor.callCount).toBe(0);
      expect(mockBoardArray[0][4].addMineNeighbor.callCount).toBe(1);
      expect(mockBoardArray[0][3].addMineNeighbor.callCount).toBe(1);
      expect(mockBoardArray[1][3].addMineNeighbor.callCount).toBe(1);
      expect(mockBoardArray[2][3].addMineNeighbor.callCount).toBe(1);
      expect(mockBoardArray[2][3].addMineNeighbor.callCount).toBe(1);

      expect(mockBoardArray[3][1].addMineNeighbor.callCount).toBe(2);
      expect(mockBoardArray[4][1].addMineNeighbor.callCount).toBe(2);
      expect(mockBoardArray[5][1].addMineNeighbor.callCount).toBe(2);
    });
  });

  describe('Revealing', function () {
    it('should be able to reveal a cell', function () {
      var rows = 3;
      var cols = 5;
      var minesArr = [[1, 1], [3, 4]];
      setBoardArray(rows, cols, minesArr);
      var board = new Board(rows, cols, minesArr);
      board.reveal(1, 1);
      var grid = board.getBoard();
      for (var row = 0; row < rows; row++) {
        for (var col = 0; col < cols; col++) {
          if (col !== 1 || row !== 1) {
            expect(grid[row][col].reveal.callCount).toBe(0);
          }
        }
      }
      expect(grid[1][1].reveal.callCount).toBe(1);
    });
    it('should reveal one cell when revealing a mine or a number', function () {
      var rows = 3;
      var cols = 5;
      var minesArr = [[1, 1], [2, 2]];
      setBoardArray(rows, cols, minesArr);
      var board = new Board(rows, cols, minesArr);
      expect(board.reveal(1, 1)).toBe(1);
      expect(board.reveal(0, 1)).toBe(1);
    });
    it('should reveal more than one cell when revealing an empty cell', function () {
      var rows = 3;
      var cols = 5;
      var minesArr = [[1, 1], [2, 2]];
      setBoardArray(rows, cols, minesArr);
      var board = new Board(rows, cols, minesArr);
      var grid = board.getBoard();
      expect(board.reveal(0, 0)).toBe(1);
      expect(board.reveal(0, 3)).toBe(8);

      minesArr = [[0, 2]];
      setBoardArray(rows, cols, minesArr);
      board = new Board(rows, cols, minesArr);
      grid = board.getBoard();
      expect(board.reveal(0, 4)).toBe(14);
    });

  });
});
