class Game {

    constructor() {
        this.addEventListener();
        this.start();
        this.game.tellTurn(this.currentPlayer);
        this.over(won)
    }

    start() {
        this.board = new Board(this);
    }
    tellTurn(player) {}
    over(won) {}
    addEventListener() {

    }

}


// make it possible to test on backend
if (typeof global !== 'undefined') {
    global.Game = Game
};