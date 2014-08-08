'use strict';

describe('Controller: GameController', function () {

  // load the controller's module
  beforeEach(function () {
    module('minesweeperAppInternal');

    //add your mocks here
  });

  var GameController, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GameController = $controller('GameController', {
      $scope: scope
    });
  }));

  it('should initialize a board', inject(function (Board) {
    // TODO board should be mock...
    var gameCtrl = GameController;
    expect(gameCtrl.game).not.toBeDefined();
  }));

  it('should create a board when starting a game"', function () {
    var gameCtrl = GameController;
    gameCtrl.startGame();
    expect(gameCtrl.game.constructor.name).toBe('Board');
  });

  it('should hold status "Playing" when playing a game and "Done" when ending game', function () {
    var gameCtrl = GameController;
    gameCtrl.startGame();
    expect(gameCtrl.state).toEqual('Playing');
    gameCtrl.endGame();
    expect(gameCtrl.state).toEqual('Done');
  });
});
