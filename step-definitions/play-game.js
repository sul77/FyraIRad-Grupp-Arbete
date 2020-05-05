// This requires Game, Board, sleep, $ and $$ as globals
// (do this in each step-definition file in this project)
require('./_include-all')();

module.exports = function () {

  // Create a subclass of Game
  // So that we can override/change the methods
  // we want to fake methods that let us test
  // if they were called

  let addEventListenerCalled = false;
  let startCalled = false;

  class TestGame extends Game {

    // Until we have written any methods here
    // TestGame will work exactly as game

    //but we can override whatever methods we want
    //in order to be able to test things

    addEventListener() {
      addEventListenerCalled = true;
    }

    start() {
      startCalled = true;
    }

  }
  let testGame;
 
  this.Given(/^that a new Game is created$/, function () {
    new TestGame();
  });

  this.Then(/^it should create a new Board$/, function () {
    expect(addEventListenerCalled,
        'The method addEventListener was not called by the constructor in Game'
      ).to.be.true;
  });

  this.Given(/^that a new Board is created$/, function () {
    // Empty the contents of .board
    $$('.board').innerHTML = '';
    // create a Game, it will create a Board
    new Game();
  });

  this.Then(/^it should render (\d+) divs as children of the board element$/, function (expectedNumberOfDivs) {
    let divsCreated = $$('.board > div').length;
    expect(divsCreated).to.equal(+expectedNumberOfDivs,
      expectedNumberOfDivs + ' divs were not created as children of the .board element'
    );
  });

  this.Given(/^that red player makes a move$/, function () {
    let makeaMove = false;
    expect(game.board).to.equal(currentPlayer + 1, ' the board should have a bricka on its board'
    );
    makeaMove = false;
  });

  this.Then(/^the board shall have a bricka on its board$/, function () {

  });

  this.Then(/^I should get a message that red player has played\.$/, function () {

  });

}