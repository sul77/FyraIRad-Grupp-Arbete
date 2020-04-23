// This requires Game, Board, sleep, $ and $$ as globals
// (do this in each step-definition file in this project)
//Runs test for board Constructor
require('./_include-all')();

module.exports = function () {

  let game;
  let board;

  this.Given(/^that a new Game is created$/, function () {
    // 
    game = new Game();
    board = new Board();
  });

  this.Then(/^a board is created$/, function () {
    expect(game.board).to.be.an.instanceof(Board,
      'game.board is not an instance of Board'
    );
  });

  this.Then(/^the board should be empty as a beginning(\d+)$/, function () {
    expect(board.matrix).to.deep.equal([
      //the board has positions to a value of 0
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
    ])
  });

  this.Then(/^currentPlayer should be set to a value of 0 (\d+)$/, function (value) {
    expect(board.currentPlayer).to.deep.equal(1)
  });

  this.Then(/^playInProgress should be set to a value of false (\d+)$/, function (value) {
    expect(board.currentPlayer).to.deep.equal(false)
  });
}