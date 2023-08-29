//module for a game board to play tic tac toe on
const gameBoard = ( () => {
    const board = [];
    return {board};
}

)();


//------------------------------------------------------------------------//----------------------------------------------------------------------------//
//factory to create players
const Players = (name, symbol) => {
    return{name, symbol};
}

// const player1 = Players('ash', 'x');
// const player2 = Players('himu', 'o');
let player1;
let player2;


//------------------------------------------------------------------------//----------------------------------------------------------------------------//
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
                pTurn.children[1].innerText = player2.name;
                e.target.style.color = 'red';
            }
            else{
                cell = e.target.dataset.value;
                console.log(cell);
                player = player2;
                flag = 0;
                pTurn.children[1].innerText = player1.name;
                e.target.style.color = 'green';
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
            winMsg.children[0].innerText = 'We Have a WINNER!';
            winMsg.children[1].innerText = `The winner is ${win}`;
            return true;
        }

        //to check if the board is all filled up
        for(i in gameBoard.board){
            total++;
        }

        if(total == 9){
            winMsg.children[0].innerText = 'You played neck to neck!';
            winMsg.children[1].innerText = "It's a draw";
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
        // for(let i = 0; i < 9; i++){
        //     dValue[i].addEventListener('click', chance);
        // }      
        let winMsg = document.querySelector('.winner');
        let pTurn = document.querySelector('.pTurn');
        let pName = document.querySelector('.pName');
        let startBtn = document.querySelector('.startBtn');
        startBtn.addEventListener('click', () => { 
            let p1 = prompt("Player 1, enter your name");
            let p2 = prompt("player 2, enter your name");

            player1 = Players(p1.toUpperCase(), 'x');
            player2 = Players(p2.toUpperCase(), 'o');

            pName.children[0].children[0].innerText = 'Player 1:';
            pName.children[0].children[1].innerText = player1.name;
            pName.children[1].children[0].innerText = 'Player 2:';
            pName.children[1].children[1].innerText = player2.name;  
            
            pTurn.children[0].innerText = 'Current Player is:'; 
            pTurn.children[1].innerText = player1.name;

            for(let i = 0; i < 9; i++){
                dValue[i].addEventListener('click', chance);
            }
        })

        let reStart = document.querySelector('.reStart');
        reStart.addEventListener('click', () => {
            window.location.reload();
        })
    
})();


