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

        gameBoard.board[cell] = player.symbol;
        if(winner()){
            console.log('thanks for playing');
            for(let i = 0; i < 9; i++){
                dValue[i].removeEventListener('click', chance);
            }  
        };
        console.log(gameBoard.board);
    }

    //function to give chance to players
    let flag = 0;
    function chance(e){
        let player;
        let cell;
        if(gameBoard.board[e.target.dataset.value] == null){
            if (flag == 0){
                cell = e.target.dataset.value;
                console.log(cell);
                player = player1;
                flag = 1;
            }
            else{
                cell = e.target.dataset.value;
                console.log(cell);
                player = player2;
                flag = 0;
            }

            e.target.innerText = player.symbol;
            mark(player, cell);
        }  
         
        else{
            console.log('error');
        }
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
            alert(`The winner is: ${win}`);
            return true;
        }

        //to check if the board is all filled up
        for(i in gameBoard.board){
            total++;
        }

        if(total == 9){
            alert("It's a draw");
            return true;
        }
    };

//------------------------------------------------------------------------//----------------------------------------------------------------------------//
        //DOM MANIPULATION
        const divGameBoard = document.querySelector('.gameBoard');
        let divCell;
        for(let i = 0; i < 9; i++){
            divCell = document.createElement('div');
    
            divCell.className = 'cell';
            //divCell.innerText = 'x';
            divCell.setAttribute('data-value', i);
    
            divGameBoard.appendChild(divCell);
        }
    
        let dValue = document.querySelectorAll('.cell');
        for(let i = 0; i < 9; i++){
            dValue[i].addEventListener('click', chance);
        }      
    
})();


