'use strict';

function MainPage() {
  this.navigate = function () {
    browser.get('/');
  };

//  this.getTitle = function () {
//    return $('h2');
//  };

  this.getInputs = function () {
    return $$('input');
  };

  this.getFormNameRows = function () {
    return $('.form-names .rows');
  };

  this.getFormNameCols = function () {
    return $('.form-names .cols');
  };

  this.getFormNameMines = function () {
    return $('.form-names .mines');
  };

  this.getFormWrapperButtons = function () {
    return $$('.form-wrapper button');
  };
}

module.exports = MainPage;
