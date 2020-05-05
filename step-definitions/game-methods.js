require('./_include-all')();

module.exports = function () {

    let addEventListenerWasCalled = false;
    let startWasCalled = false;



    class TestGame extends Game {

        addEventListener() {
            addEventListenerWasCalled = true;
        }

        start() {
            startWasCalled = true;
        }

    }


    this.When(/^we create a new instance of Game$/, function () {
      new TestGame();
    });

    this.Then(/^the constructor should call the method addEventListener$/, function () {
        expect(addEventListenerWasCalled,
            'The method addEventListener was not called by the constructor in Game'    
        ).to.be.true;
    });

    this.Then(/^the constructor should call the method start$/, function () {
        expect(startWasCalled,
            'The method start was not called by the constructor in Game'    
        ).to.be.true;
    });
}