let board = ["","","","","","","","",""];

let currentPlayer = "X";

let gameOver = false;


let winningPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],

    [0,3,6],
    [1,4,7],
    [2,5,8],

    [0,4,8],
    [2,4,6]
];


function makeMove(index){

    if(board[index] == "" && !gameOver){

        board[index] = currentPlayer;

        document.getElementsByClassName("cell")[index].innerHTML = currentPlayer;


        if(checkWinner()){
            document.getElementById("status").innerHTML =
            "Player " + currentPlayer + " Wins!";
            gameOver = true;
            return;
        }


        if(!board.includes("")){
            document.getElementById("status").innerHTML =
            "Game Draw!";
            gameOver = true;
            return;
        }


        currentPlayer =
        currentPlayer === "X" ? "O" : "X";


        document.getElementById("status").innerHTML =
        "Player " + currentPlayer + " Turn";
    }
}



function checkWinner(){

    for(let pattern of winningPatterns){

        let a = board[pattern[0]];
        let b = board[pattern[1]];
        let c = board[pattern[2]];


        if(a !== "" && a === b && b === c){
            return true;
        }
    }

    return false;
}



function restartGame(){

    board = ["","","","","","","","",""];

    currentPlayer = "X";

    gameOver = false;


    let cells = document.getElementsByClassName("cell");

    for(let cell of cells){
        cell.innerHTML="";
    }


    document.getElementById("status").innerHTML =
    "Player X Turn";
}