require('./_include-all')();

module.exports = function () {

  let game = new Game();
  let addEventListenerWasCalled = false;

  class fakeBoard extends Board {

    addEventListener() {
      addEventListenerWasCalled = true;
    }
  }

  let board = new fakeBoard(game);

  this.Given(/^that listener waits for click events to take place at the board div elements$/, function () {
    board.addEventListener();
    expect(addEventListenerWasCalled).to.be.true;
  });
}