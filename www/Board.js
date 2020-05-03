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
        ];
        this.currentPlayer = 1;
        this.playInProgress = false;

        this.addEventListener();
        this.render();
        this.game.tellTurn(this.currentPlayer);

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
        if (column < 0 || column > 6 || column % 1 != 0) {
            throw console.error("column must be an integer between 0 and 6");
        }

        if (this.playInProgress === true) {
            return null;
        }

        let noEmptySpace = true;

        for (let i = 0; i < this.matrix.length; i++) {
            if (this.matrix[i][column] === 0) {
                if (i > 0) {
                    this.matrix[i - 1][column] = 0;
                }
                this.matrix[i][column] = this.currentPlayer;

                this.playInProgress = true;
                noEmptySpace = false;
            }
        }

        if (!noEmptySpace) {
            this.render();
            await sleep(50);
            this.playInProgress = false;
            this.game.tellTurn(this.currentPlayer);
            if (this.currentPlayer == 1) {
                this.currentPlayer = 2;
            } else {
                this.currentPlayer = 1;
            }
        } else {
            return false;
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
                for (w in winOffset) {
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

    markWin(combo) {

        for (w in combo) {
            //check which tray corresponds to a position
            let p = (w[0] * 7) + (w[1] + 1);
            //add the tray to win class
            let mp = $(".board > div: nth - child(" + p + ")");
            mp.classList.add('win');
        }
    }

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
if (typeof global !== 'undefined') { global.Board = Board };
