'use strict';

describe('Controller: SubmitGameController', function () {

  // load the controller's module
  beforeEach(function () {
    module('minesweeperAppInternal');
    //add your mocks here
  });

  var SubmitGameController, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SubmitGameController = $controller('SubmitGameController', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the controller', function () {
//    expect(SubmitGameController.awesomeThings.length).toBe(6);
  });
});
