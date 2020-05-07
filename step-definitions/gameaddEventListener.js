require('./_include-all')();

module.exports = function () {

    let addEventListenerWasCalled = false;      //addEventListenerWasCalled is created with value false

    class TestGame extends Game {               //sub class of Game named TestGame is created
        addEventListener(){
            addEventListenerWasCalled = true;   //addEventListenerWasCalled receives value true
        }
    }

    new TestGame();                             //New TestGame is created

    //Given that Game's addEventListener was called upon
    this.Given(/^that Games addEventListener was called upon$/, function () {
        expect(addEventListenerWasCalled).to.be.true;       //Expect addEventListenerWasCalled to be true
    });
}