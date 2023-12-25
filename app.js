

// Globale variables

let appContainer = document.querySelector(".app-container");

let displayPlayer = document.querySelector(".display-player");

let result = document.querySelector(".display-outcome");

let resetBtn = document.getElementById('reset');

let originalDisplayPlayerParent = displayPlayer.parentElement;

let currentPlayer = 'O';

let sumCount = 0;

let flagSum = false;

let gameOver = false;


// Dynamically create grid-items
for (let i = 1; i < 10; i++) {

    // Create the grid-items divs
    let gridItems = document.createElement("div");

    // Add class to the grid-items
    gridItems.classList.add("grid-items");

    // Append each grid-items to appContainer parent
    appContainer.appendChild(gridItems);

    // Adding event listener to all grid item
    gridItems.addEventListener("click", function(e){

        if (e.target.innerHTML != '') {

            return;

        }

        // Condition to check if the game is over and to prevent further clicking
        if (gameOver) {
            
            console.log("Please reset the game to play again!");
            return;
        }

        // Condition to check current player in order to switch the content inside the displayPlayer 
        if (displayPlayer.classList.toggle('playerX')) {
            
            displayPlayer.innerText = 'X';
            game(e.target);

        }else{

            displayPlayer.innerText = 'O';
            game(e.target);

        }

        
    });

}
