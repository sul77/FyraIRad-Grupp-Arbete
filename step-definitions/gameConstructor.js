require('./_include-all')();

module.exports = function () {

  let addEventListenerWasCalled = false;
  let startWasCalled = false;

  class FakeGame2 extends Game {

    addEventListener() {
      addEventListenerWasCalled = true;
    }

    start() {
      startWasCalled = true;
    }

  }

  this.When(/^we create a new instance of class Game$/, function () {
    new FakeGame2();
  });

  this.Then(/^the method addEventListener should be called first$/, function () {
    expect(addEventListenerWasCalled,
      'The method addEventListener was not called by the constructor in Game'
    ).to.be.true;
  });

  this.Then(/^the method start should be called second$/, function () {
    expect(startWasCalled,
      'The method start was not called by the constructor in Game'
    ).to.be.true;
  });
}
