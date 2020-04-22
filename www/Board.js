class Board {
    
    constructor(game){
        this.game = game;
        this.matrix = [
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0]
        ]
        this.currentPlayer = 1;
        this.playInProgress = false;

        this.addEventListener();
        this.render();
        //not done -- missing tellTurn from Game
    }

    async makeMove(column){}

    wincCheck(){}

    render(){}

    markWin(combo){}

    addEventListener(){}

    removeEventListener(){}

}

// make it possible to test on backend
if (typeof global !== 'undefined') { global.Board = Board };