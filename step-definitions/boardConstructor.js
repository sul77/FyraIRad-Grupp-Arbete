// This requires Game, Board, sleep, $ and $$ as globals
// (do this in each step-definition file in this project)
//Runs test for board Constructor
require('./_include-all')();

module.exports = function () {

  let game;
  let board;

  //When a new Board is created
  this.When(/^a new Board is created$/, function () {
    //game = new Game();
    //board = new Board(game);
  });

  //Then the game parameter from Game should be an instance of Game
  this.Then(/^the game parameter from Game should an instance of Game$/, function () {
    //game = new Game();
    //board = new Board(game);
    //expect(board.game).to.be.an.instanceof(Game, 'board.game is not an instance of board');
  });

  //And incase game is not an instance of Game; then error "game must be an instance of Game" should be thrown
  this.Then(/^incase game is not an instance of Game; then error "([^"]*)" should be thrown$/, function (errorMessageThrown) {
    expect(function () {
      //inside this function the test will expect  code that throws an error in order for the test to pass
      //In this case creating an instance of board without an instance of game to it should throw an error
      // choosing to test by sending generic object to the constructor
      new Board({});
    }).to.throw(
      Error,
      errorMessageThrown,
      'The Board constructor did not throw an error when trying to make an instance of board without sending a game to it. '
      )
  });

  //And all values in the matrix grid should be set to zero
  this.Then(/^all values in the matrix grid should be set to zero$/, function () {
    new Board();
    expect(board.matrix).to.deep.equal([
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
  ])
  });

  //And currentPlayer should have the initial value 1
  this.Then(/^currentPlayer should have the initial value (\d+)$/, function (currentPlayer) {
    expect(board.currentPlayer).to.deep.equal(1, 'currentPlayer is not set to 1');
  });

  //And playInProgress should have the initial value false
  this.Then(/^playInProgress should have the initial value false$/, function () {
    expect(board.playInProgress).to.be.false;
  });

  //And method AddEvenListener() should be called upon
  this.Then(/^method addEventListener\(\) should be called upon$/, function () {
    
  });

  //And method render() should be called upon afterwards
  this.Then(/^method render\(\) should be called upon afterwards$/, function () {
    
  });
  
  //And  then the method tellTurn() with inagrument currentPlayer from game should be called upon
  this.Then(/^then the method tellTurn\(\) with inargument currentPlayer from game should be called upon$/, function () {
    
  });
}
