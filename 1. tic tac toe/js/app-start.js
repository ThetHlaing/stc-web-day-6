const gameModel = {
    currentPlayer: 1, //1 or 2        
    positionsOfPlayer1: [],
    positionsOfPlayer2: [],
    markStyle: ['X', 'O'],
    completeMoves: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]
};

const gameController = {
    init: function () {
        gameView.init();
    },
    restartGame: function () {
        //reset game Model
    },
    isComplete: function (positions) {        
        //Array parameters must be numbers
        //Match with predefined answer and return boolean
    },
    changePlayer: function () {
        //toggle player
    },
    getCurrentPlayer: function () {
        //return current player
    },
    getCurrentMarkStyle: function () {
        //player one for X and player 2 for O
    },
    setPosition: function (index) {
        //throw error if input is smaller than 1 or larger than 9
        //throw error if input position is already selected by current user or opposition 
        //add a position to current player               
    },
    selectPosition: function (index) {
        //set position
        //check is complete
        //change player
    }
};

const gameView = {
    init: function () {
        this.restartGameBtn = document.querySelector("#btnRestart");
        this.currentPlayerLabel = document.querySelectorAll('.currentPlayer');
        this.inputs = document.querySelectorAll('#board input');   
    }
}

