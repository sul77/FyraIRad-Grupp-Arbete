class Game {

    constructor() {
        this.addEventListener();
        this.start();
    }

    start() {
            this.board = new Board(this);
        }
        /* tellTurn(player) {

             if (player < 1 || player > 2 || player % 1 != 0) {
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
        $message.innerHTML = player === 1 ? 'Röds tur...' :
            player === 2 ? 'Guls  tur...' :
            "...";

    }

    over(won) {

        if (won !== "draw" && won !== 1 && won !== 2) throw (Error('player must be 1 or 2')); {

        }
        //Visar färg på den spelare som vinnar eller om det blir oavgjort.
        $('.message').innerHTML = won === "draw" ? "Det blev oavgjort!" :
            won === 2 ? "Gul vann!" :
            won === 1 ? "Röd vann!" :
            "";

        let $button = document.createElement('button');
        $button.className = 'Spela';
        $button.innerHTML = ' Spela igen';
        $('.message').append($button);

    }



    addEventListener() {
        let self = this;
        $('.message').addEventListener("click", function(e) {
            if (e.target.className == 'Spela') {
                self.start();
            }
        });
    }

}


// make it possible to test on backend
if (typeof global !== 'undefined') {
    global.Game = Game
};