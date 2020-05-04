// This requires Game, Board, sleep, $ and $$ as globals
// (do this in each step-definition file in this project)
//Runs test for board Constructor
require('./_include-all')();

module.exports = function () {

  let game;
  let board;
  let objectToReturn = {};
  let currentPlayer;
  let player1;
  let player2;

  //Given that a new Board is created
  this.Given(/^that a board has been created$/, function () {

  });

  //When one of the players has won a game session
  this.When(/^one of the players has won a game session$/, function () {

  });

  //Then winCheck() method should return an object
  this.Then(/^winCheck method should return an object$/, function () {
    objectToReturn;
    currentPlayer = player1;

  });

  //And the object should contain the property 'winner' with the value set to the winner (1 or 2)
  this.Then(/^the object should contain the property "([^"]*)" with the value set to the winner \((\d+) or (\d+)\)$/, function (propertyWinner, player1, player2) {
    objectToReturn.winner = currentPlayer;

  });

  //And the object should contain an array of four arrays named 'combo' where every inner array is a position on the board [rownumber, kolumnnumber]
  this.Then(/^the object should contain an array of four arrays named "([^"]*)" where every inner array is a position on the board \[rownumber, kolumnnummer\]$/, function (arrayCombo) {

  });

  //When neither of the players has won
  this.When(/^neither of the players has won$/, function () {

  });

  //Then winCheck() should return an object
  this.Then(/^the winCheck method should return an object$/, function () {

  });

  //And the object should contain the property 'winner' with the value set to string 'draw'
  this.Then(/^the object should contain the property "([^"]*)" with the value set to string "([^"]*)"$/, function (propertyWinner, valueDraw) {

  });

  //When neither of the players has won
  this.When(/^neither of players has won$/, function () {

  });

  //And neither has it been a draw
  this.When(/^neither has it been a draw$/, function () {

  });

  //Then winCheck() method should return false
  this.Then(/^wincCheck method should return false$/, function () {

  });
}