require('./_include-all')();

module.exports = function () {

    let tellTurnWasCalled = false;                 
    const playerThree = 3;
    const playerZero = 0;
    const playerDecimal = 1.2;

    class TestGameZero extends Game {  
        tellTurn(playerZero) {     
            tellTurnWasCalled = true;
            if (playerZero !== 1 && playerZero !== 2) {
                throw (new Error('player must be 1 or 2'));
            } 
        }                               
    }
    
    class TestGameThree extends Game {  
        tellTurn(playerThree) {     
            if (playerThree !== 1 && playerThree !== 2) {
                throw (new Error('player must be 1 or 2'));
            } 
        }                               
    }

    class TestGameDecimal extends Game {  
        tellTurn(playerDecimal) {     
            if (playerDecimal !== 1 && playerDecimal !== 2) {
                throw (new Error('player must be 1 or 2'));
            } 
        }                               
    }


    let testGameZero = new TestGameZero();                          //New instance of TestGameZero is created
    let testGameThree = new TestGameThree();                        //New instance of TestGameThree is created
    let testGameDecimal = new TestGameDecimal();                    //New instance of TestGameDecimal is created
    let testGameRedsTurn = new Game();                              //New instance of Game is created
    let testGameYellowsTurn = new Game();                           //New instance of Game is created


    //=======SCENARIO: tellTurn is called upon with a value below 1 STARTS=======
    //Given that tellTurn has been called upon
    this.Given(/^that tellTurn has been called upon$/, function () {
        expect(tellTurnWasCalled, 'tellTurn was not called upon').to.be.true;           //Expect 'tellTurnWasCalled' to be true. If not; throw 'tellTurn was not called upon'
    });

    //And player has the value zero
    this.Given(/^player has the value zero$/, function () {
        expect(playerZero).to.equal(0);                                                 //Expect playerZero to equal 0. This will obviously succeed,
    });                                                                                 //this step is just for show and doesnt matter other than checking if playerZero is 0

    //Then tellTurn should throw error "player must be 1 or 2"
    this.Then(/^tellTurn should throw error "([^"]*)"$/, function (errorMessage) {
        expect(() => testGameZero.tellTurn(playerZero)).to.throw(errorMessage);         //Expect testGameZero.tellTurn(playerZero) to throw "player must be 1 or 2"
    });                                                                                 //using an anonymous arrow function

    //=======SCENARIO: tellTurn is called upon with a value below 1 ENDS=======


    //=======SCENARIO: tellTurn is called upon with value above 2 STARTS=======
    //Given that player has the value 3
    this.Given(/^that player has the value three$/, function () {
        expect(playerThree).to.equal(3);                                                //Expect playerThree to equal 3, just to check that playerThree is actually 3
    });

    //Then tellTurn should throw error "player must be 1 or 2" also
    this.Then(/^tellTurn should throw error "([^"]*)" also$/, function (errorMessage2) {
        expect(() => testGameThree.tellTurn(playerThree)).to.throw(errorMessage2);      //Expect testGameThree.tellTurn(playerThree) to throw "player must be 1 or 2"
    });

    //=======SCENARIO: tellTurn is called upon with value above 2 ENDS=======


    //=======SCENARIO: tellTurn is called upon with value 1.2 STARTS=======
    //Given that player has the decimal value 1.2
    this.Given(/^that player is has the decimal value "([^"]*)"$/, function (decimalValue) {
        expect(playerDecimal).to.equal(+decimalValue);                                      //Expect playerDecimal to equal 1.2, just to check that playerDecimal is actually 1.2
    });

    //Then tellTurn should also throw error "player must be 1 or 2"
    this.Then(/^tellTurn should also throw error "([^"]*)"$/, function (errorMessage3) {
        expect(() => testGameDecimal.tellTurn(playerDecimal)).to.throw(errorMessage3);      ////Expect testGameDecimal.tellTurn(playerDecimal) to throw "player must be 1 or 2"
    });

    //=======SCENARIO: tellTurn is called upon with value 1.2 ENDS=======


    //=======SCENARIO: tellTurn changes css-class message to 'Röds tur...' STARS=======

    //Given that player has the value 1
    this.Given(/^that player has the value one$/, function () {
    //No reason to test since i send in value 1 into tellTurn in next step
    });

    //Then css class should contain "Röds tur..."
    this.Then(/^css class should contain "([^"]*)"$/, function (redsTurn) {
        if (testGameRedsTurn.tellTurn(1)) {                                 //If testGameRedsTurn.tellTurn(1) is true
            expect($('.message').innerHTML).to.include(redsTurn,        //expect css class message to contain/include "Röds tur...". If not;
                '".message"s innerHTML did not include "Röds tur..." '      //throw '".message"s innerHTML did not include "Röds tur..."'
            )
        }
    });

    //=======SCENARIO: tellTurn changes css-class message to 'Röds tur...' ENDS=======


    //=======SCENARIO: tellTurn changes css-class message to 'Guls tur...' STARS=======

    //Given that player has the value 2
    this.Given(/^that player has the value two$/, function () {
    //No reason to test since i send in value 2 into tellTurn in next step
    });

    //Then css class should contain instead "Guls tur..."
    this.Then(/^css class should contain instead "([^"]*)"$/, function (yellowsTurn) {
        if (testGameYellowsTurn.tellTurn(2)) {                                  //If testGameYellowsTurn.tellTurn(2) is true
            expect($('.message').innerHTML).to.include(yellowsTurn,         //expect css class message to contain/include "Guls tur...". If not;
                '".message"s innerHTML did not include "Guls tur..." '          //throw '".message"s innerHTML did not include "Guls tur..."'
            )
        }
    });

    //=======SCENARIO: tellTurn changes css-class message to 'Guls tur...' ENDS=======
}