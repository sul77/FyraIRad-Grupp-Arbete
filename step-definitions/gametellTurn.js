require('./_include-all')();

module.exports = function () {

    let tellTurnWasCalled = false;      //'tellTurnWasCalled' with value false is created
    let testPlayerZero = 0;             //'testPlayerZero' with value 0 is created
    class TestGameZero extends Game {   //TestGameZero is created as subclass of Game. TestGameZero begins
        tellTurn(testPlayerZero) {      //tellTurn() with a passing through 'testPlayerZero' is created. tellTurn begins
            tellTurnWasCalled = true;   //tellTurnWasCalled receives value true
        }                               //tellTurn ends
    }                                   //TestGameZero ends

    new TestGameZero();                 //New instance of TestGameZero is created
    let game = new Game();              //'game' is created as a class of Game.
                                        //Since we override tellTurn in TestGameZero for step 1 and 2;
                                        //we need to create another Game so we can test step 3

    //Given that tellTurn has been called upon
    this.Given(/^that tellTurn has been called upon$/, function () {
        expect(tellTurnWasCalled, 'tellTurn was not called upon').to.be.true;           //Expect 'tellTurnWasCalled' to be true. If not; throw 'tellTurn was not called upon'
    });

    //And player has the value 0
    this.Given(/^player has the value zero$/, function () {
        expect(testPlayerZero, 'testPlayerZero does not have the value 0').to.equal(0); //Expect 'testPlayerZero' to equal 0. If not; throw 'testPlayerZero does not have the value 0'
    });
    
    //Then tellTurn should throw error "player must be 1 or 2"
    this.Then(/^tellTurn should throw error "([^"]*)"$/, function (errorMessage) {
        expect(() => game.tellTurn(testPlayerZero)).to.throw(errorMessage,              //Expect game.tellTurn(testPlayerZero) to throw error message "player must be 1 or 2". If not;
            'game.tellTurn(testPlayerZero) did not throw errorMessage'                  //throw 'game.tellTurn(testPlayerZero) did not throw errorMessage'
        );                 
    });
}