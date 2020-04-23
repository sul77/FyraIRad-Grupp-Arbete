class Board {
    constructor(game) {
        this.ROWS = 6;
        this.COLS = 7;
        this.currentPlayer = 1;
        this.playInProgress = false;
        this.createGrid();
        this.game = game;
    }

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
}

// make it possible to test on backend
if (typeof global !== 'undefined') {
    global.Board = Board
};