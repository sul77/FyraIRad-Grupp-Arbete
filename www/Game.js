class Game {

    constructor() {
        this.addEventListener();
        this.start();
        this.tellTurn(player)
        this.over(won)
    }

    start() {
            this.board = new Board(this);
        }
        /* tellTurn(player) {

             if (player < 1 || player > 2 || player % 1 != 0){
                 throw (new Error("player must be 1 or 2"));
             }
             if (player === 1) {
                 $('.message').textContent = "Röds tur...";
             }
             if (player === 2) {
                 $('.message').textContent = "Guls tur...";
             }
             
         }*/

    tellTurn(player) {
        if (player !== 1 && player !== 2) {

            throw (new Error('player must be 1 or 2'));
        }
        let $message = $('.message');
        $message.innerHTML = player === 1 ? 'Röds tur.' :
            player === 2 ? 'Guls  tur.' :
            "...";

    }
    over(won) {

        if (won < 1 || won > 2 || won != "draw") {
            throw (new Error('won must be "draw", 1 or 2'));
        }
        if (won = "draw") {
            $('.message').textContent = "Det blev oavgjort!";
        }
        if (won === 1) {
            $('.message').textContent = "Röd vann!";
        }
        if (won === 2) {
            $('.message').textContent = "Gul vann!";
        }
        /*
        let btn = document.createElement('button');
        btn.className = 'again';
        btn.textContent = 'Spela igen';
        btn.setAttribute('type', 'button');
        $('.message').appendChild(btn);
        */ //Not done, finishing later
    }

    addEventListener() {
        let self = this;
        $('.message').addEventListener("click", function(e) {
            if (e.target.className == 'again') {
                self.start();
            }
        });
    }

}


// make it possible to test on backend
if (typeof global !== 'undefined') {
    global.Game = Game
};