require('./_include-all')();

module.exports = function () {

    let startWasCalled = false;             //'startWasCalled' with value false was created

    class TestGame extends Game {           //TestGame class that extends Game begins
        start(){                            //recreated start() begins
            startWasCalled = true;          //startWasCalled receives the value true to indicate that start was called upon
            this.board = new Board(this);   //board is created as a new Board with instance of testGame. Code taken straight from Game.js > Start() > line 9
        }
    }

    let testGame = new TestGame();          //'testGame' is created as a new TestGame()
 
    //Given that the function start() is called upon
    this.Given(/^that the function start is called upon$/, function () {
        new TestGame(); //a new TestGame is created
    });
    
    //Then start() should create a new instance of the class Board
    this.Then(/^start should create a new instance of the class Board$/, function () {
        expect(testGame.board).to.be.an.instanceof(Board,   //Expect 'testgame.board' to be an instance of Board, if not;
            'testGame was not an instance of Board');       //Error 'testGame was not an instance of Board' will be thrown
    })
}