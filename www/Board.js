class Board {

    constructor(game) {
        if (!(game instanceof Game)) {
            throw (new Error('game must be an instance of Game'));
        }
        //this.ROWS = 6;    //Kept in comment until Approval of Thomas
        //this.COLS = 7;    //Kept in comment until Approval of Thomas
        //this.createGrid(); //Kept in comment until Approval of Thomas
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
        this.game.tellTurn(this.currentPlayer);
        //not done -- missing tellTurn from Game
    }

    /* //Keep within comment until approval of Thomas
    createGrid() {
        const $board = $(this.game);

        for (let row = 0; row < this.ROWS; row++) {
            const $row = $('<div>').addClass('row');
            $board.append($row);
            for (let col = 0; col < this.COLS; col++)
                const $col = $('<div').addClass('col empty');
            $row.append($col);
        }
        $board.append($row);
        console.log($board.html());
    }
    */

    async makeMove(column) {
        if (column < 0 || column > 6 || column % 1 != 0) { //If column is less than 0, greater than 6, and or column is not an integer
            throw new Error("column must be an integer between 0 and 6");
        }

        if (this.playInProgress = true) {
            return null;
        }



        //Check if chosen column is full in matrix (We know if it is empty by looking if it the element is 0 and not 1 or 2)
        for (let i = 0; i < this.matrix.length; i++) {

            if (this.matrix[i][column] === 0) {
                this.matrix[i][column] = this.currentPlayer;

                //Anropa metoden render
                this.render();

                //Pausa i 50 ms
                await sleep(50);

                //Ta bort brickan om den kan falla längre ner
            }
        }


        //anropa metoden winCheck
        let winCheck = this.wincCheck();
        if (winCheck) {
            this.removeEventListener();
            if (winCheck.combo) {
                this.markWin(winCheck.combo)
            }
            this.game.over(winCheck.winner);
            return true;
        }

        this.playInProgress = true;


    }

    //winCheck metod    
    wincCheck() {
        let winOffset = [
            [[0, 0], [0, 1], [0, 2], [0, 3]], // horizontal  
            [[0, 0], [1, 0], [2, 0], [3, 0]], // vertical     
            [[0, 0], [1, 1], [2, 2], [3, 3]], // diagonal1
            [[0, 0], [1, -1], [2, -2], [3, -3]] // diagonal2
        ];
        //declare count moves
        let c = 0;
        //declare a combo array, an array of 4 arrays
        let rArray = [];
        //declare a win or draw object
        let wdCheck = {};

        for (let row = 0; row < 6; row++) {
            for (let col = 0; col < 7; col++) {
                for (let w of winOffset) {
                    let slots = w.map(([r, c]) => this.matrix[row + r] &&
                        this.matrix[row + r][col + c]).join('');
                    this.matrix.flatMap(s => s !== 0 ? c++ : '');

                    //When one of the two players has won
                    if (slots === '1111' || slots === '2222') {
                        let w2;
                        for (w2 in w) {
                            winningCombo.push([row + w2[0], col + w2[1]]);
                        }
                        return wdCheck = {
                            combo: rArray, winner: +slots[0]
                        }
                    }
                    //when moves reach the max and no wins have been found
                    else if (slots === '1111' && slots === '2222' && c === 42) {
                        return wdCheck = {
                            winner: 'draw'
                        }
                    }

                }
            }
        }
        //When no one wins, and the game was not a draw
        return false;

    }

    render() {
        let board = document.createElement("div");
        board.className = 'board';
        for (let row = 0; row < 6; row++) {
            for (let col = 0; col < 7; col++) {
                let firstDiv = document.createElement("div");
                let secondDiv = document.createElement("div");
                secondDiv.appendChild(firstDiv);
                board.appendChild(secondDiv);
                $('body').append(board);
            }

        }
    }

    markWin(combo) { }

    addEventListener() {
        this.listener = event => {
            let $slot = event.target.closest('.board > div  ');
            if (!$slot) {
                return;
            }
            let $allSlots = [...$$('.board > div')];
            let index = $allSlots.indexOf($slot);
            let selectedColumn = index % 7;
            this.makeMove(selectedColumn);
        };
        $('.board').addEventListener('click', this.listener);
    }

    removeEventListener() {
        $('.board').removeEventListener('click', this.listener);
    }

}

// make it possible to test on backend
if (typeof global !== 'undefined') {
    global.Board = Board
};