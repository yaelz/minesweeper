'use strict';

require('../lib/matchers.protractor.js');
var MainPage = require('../pages/main-page.js');

describe('minesweeperApp Main Page', function () {
  var mainPage;

  beforeEach(function () {
    mainPage = new MainPage();
    browser.addMockModule('minesweeperAppMocks', function () {});
  });

  afterEach(function () {
    browser.removeMockModule('minesweeperAppMocks');
  });

//  it('should load successfully', function () {
//    mainPage.navigate();
//    expect(mainPage.getTitle().getText()).toEqual('Minesweeeeeeper');
//  });
// TODO how can I make this work?
  it('should have three inputs', function () {
    mainPage.navigate();
    expect(mainPage.getInputs().get(0).getText()).toEqual('');
    expect(mainPage.getInputs().get(1).getText()).toEqual('');
    expect(mainPage.getInputs().get(2).getText()).toEqual('');
  });

  it('should have three form names', function () {
    mainPage.navigate();
    expect(mainPage.getFormNameRows().getText()).toEqual('Rows:');
    expect(mainPage.getFormNameCols().getText()).toEqual('Columns:');
    expect(mainPage.getFormNameMines().getText()).toEqual('Mines:');
  });

  it('should have two buttons', function () {
    mainPage.navigate();
    expect(mainPage.getFormWrapperButtons().get(0).getText()).toEqual('RESET');
    expect(mainPage.getFormWrapperButtons().get(1).getText()).toEqual('SAVE');
  });
});
