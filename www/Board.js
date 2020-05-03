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
            [
                [0, 0],
                [0, 1],
                [0, 2],
                [0, 3]
            ], // horizontal
            [
                [0, 0],
                [1, 0],
                [2, 0],
                [3, 0]
            ], // vertical
            [
                [0, 0],
                [1, 1],
                [2, 2],
                [3, 3]
            ], // diagonal
            [
                [0, 0],
                [1, -1],
                [2, -2],
                [3, -3]
            ] // diagonal
        ];

        for (let row = 0; row < 6; row++) {
            for (let col = 0; col < 7; col++) {
                for (let w of winOffset) {
                    let slots = w.map(([r, c]) => this.matrix[row + r] &&
                        this.matrix[row + r][col + c]).join('');



                    if (slots === '1111' || slots === '2222') {
                        return +slots[0];

                    }

                    //Saknas en del att skriva
                }
            }
        }
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

    markWin(combo) {}

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