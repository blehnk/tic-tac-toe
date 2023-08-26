//module for a game board to play tic tac toe on
const gameBoard = ( () => {
    const board = [];
    return {board};
}

)();


//factory to create players
const Players = (name, symbol) => {
    return{name, symbol};
}

const player1 = Players('ash', 'x');
const player2 = Players('himu', 'o');


//module to control the flow of the game
const flow = ( () => {
    //function to choose the cell to mark your symbol
    const mark = (player, cell) => {
        if(gameBoard.board[cell] == 'NULL'){
            console.log('error');
        }
        else{
            gameBoard.board[cell] = player.symbol;
        }
    }

    //function to give chance to players
    let flag = 0;
    function chance(){
        let player;
        let cell;
        if (flag == 0){
            cell = prompt(`${player1.name} enter the index of the cell you want to mark`);
            while(gameBoard.board[cell] != null){
                cell = prompt(`${player1.name}, PLEASE ENTER IN THE CELL THAT IS UNMARKED!`);
            }
            player = player1;
            flag = 1;
        }
        else{
            cell = prompt(`${player2.name} enter the index of the cell you want to mark`);
            while(gameBoard.board[cell] != null){
                cell = prompt(`${player2.name}, PLEASE ENTER IN THE CELL THAT IS UNMARKED!`);
            }
            player = player2;
            flag = 0;
        }

        mark(player, cell);
    }

    //function to decide a winner
    const winner = function(){
        let win;
        let total = 0;

        if (flag == 1){
            player = player1;
        }
        if (flag == 0){
            player = player2;
        }
        if(gameBoard.board[0] == player.symbol){
            if(gameBoard.board[1] == player.symbol && gameBoard.board[2] == player.symbol){
                win = player.name;
            }
        }

        if(gameBoard.board[3] == player.symbol){
            if(gameBoard.board[4] == player.symbol && gameBoard.board[5] == player.symbol){
                win = player.name;
            }
        }

        if(gameBoard.board[6] == player.symbol){
            if(gameBoard.board[7] == player.symbol && gameBoard.board[8] == player.symbol){
                win = player.name;
            }
        }

        if(win){
            console.log(`The winner is: ${win}`);
            return true;
        }

        //to check if the board is all filled up
        for(i in gameBoard.board){
            total++;
        }

        if(total == 9){
            console.log("it's a draw");
            return true;
        }
    }

    //logic to stop after filling all the cells of the board and to give chance to both the players
    let i = 1;
    while(!winner() && i == 0){
        chance();
    }

})();



/*----------------------------------------------------//----------------------DOM MANIPULATION-----------------------//----------------------------------------------*/

const divGameBoard = document.querySelector('.gameBoard');
for(let i = 0; i < 9; i++){
    const divCell = document.createElement('div');
    divCell.className = 'cell';
    divCell.innerText = 'x';
    divGameBoard.appendChild(divCell);
}

