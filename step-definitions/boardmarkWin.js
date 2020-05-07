require('./_include-all')();
require('./_async-helpers.js');

module.exports = function () {

  let markWinCalled = true;
  let testWin;

  class fakeBoard extends Board {
    markWin(combo) {
      testWin = combo;
    }
  }

  this.Given(/^that a player won a game$/, function () {
    // Write code here that turns the phrase above into concrete actions
    expect(markWinCalled, 'or markWin was not called').to.be.true;
  });

  this.Then(/^the method corresponds to the (\d+) elements given on board$/, function (sizeCombo, argCombo) {
    // Write code here that turns the phrase above into concrete actions
    expect(testWin).to.be.an(sizeCombo, 'Passing the elements as an argument').to.have.lengthOf(+argCombo, 'with a length of 4 as argument');
  });

  this.Then(/^each div element should be added to the win class\.$/, function (argCombo) {
    // Write code here that turns the phrase above into concrete actions
    for (let t of testWin) {
      expect(t).to.be.an(argCombo,
        'having the combo passed').to.have.lengthOf(+argCombo);
    }
  });

}