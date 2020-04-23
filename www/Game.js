class Game {

    constructor() {
        this.addEventListener();
        this.start();

    }

    start() {}
    tellTurn(player) {}
    over(won)
    addEventListener();
}
const board = new Board('#board');

// make it possible to test on backend
if (typeof global !== 'undefined') {
    global.Game = Game
};