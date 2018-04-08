
import { Card } from "./karta.js";

export class Game {
    constructor(size = 12, maxMoves = 8, maxFlipped = 4) {
        this.moveCounter = 0;
        this.flipCounter = 0;
        this.maxFlipped = maxFlipped;
        this.maxMoves = maxMoves;
        this.board = [];
        this.flippedCards = [];
        this.size = size;
        this.start();
        //console.log(this.board);


    }
    import(model)
    {
        this.moveCounter = model.moveCounter;
        this.flipCounter = model.flipCounter;
        this.board = model.board;
        this.flippedCards = model.flippedCards;
        this.size = model.size;
    }

    start()
    {
        this.BuildBoard();
    }
    flip(index) {
        //console.log(index); 
        /*if (this.flipCounter <= 4 || this.moveCounter <= 0 || this.board[index].flip === false) {
            this.board[index].flip = true;
            this.flippedCards.push(this.board[index].value);
            this.moveCounter--;
            this.getFlipped();
            const reducer = (accumulator, currentValue) => accumulator + currentValue;
            this.flippedCards.reduce(reducer);
            //console.log(this.board[index].flip);
            //console.log(this.flippedCards.reduce(reducer));
        }
        else {
            this.board[index].flip = false;
            this.flippedCards.splice(this.index, 1);
        }
        /*else if (this.moveCounter >= 0)
        {
            this.FinalScore();
        }*/
        if (this.board[index].flip === false) {
            if (this.flipCounter === this.maxFlipped) {
                this.board[index].flip = false;
            }
            else {
                this.board[index].flip = true;
                this.flipCounter++;
                this.moveCounter++;
                this.flippedCards.push(this.board[index].flip.Value);
            }
        }
        else {
            if (this.moveCounter !== 0) {
                this.board[index].flip = false;
                this.CurrentFlips--;
                let deleteIndex = this.flippedCards.indexOf(this.board[index].flip);
                this.flippedCards.splice(deleteIndex, 1);
            }
        }

        if (this.moveCounter === this.maxMoves) {
            this.Continue = false;
        }
        
    }

    BuildBoard() {
        for (var i = 1; i <= this.size; i++) {
            let card = new Card(i, false);
            this.board.push(card);
        }
        this.Shuffle(this.board)
        for (var i = 0; i < this.size; i++) {
            this.board[i].id = i;
        }
        return this.board;
    }

    Shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }
    FinalScore()
    {
        var sum = 0;
        this.flippedCards.forEach(function(i) {
            sum = sum + Number(this.i);
        }, this);
        return sum;
    }
    getFlipped()
    {
        let index = 0;
        this.board.forEach(card => {
            if(this.board[index].flip == true)
            {
                this.flipCounter++;
            }
            index++;
        });
    }
}
