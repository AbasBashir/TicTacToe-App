

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


function game(target){

    if (currentPlayer === 'O') {

        // Checking if the grid item has no child, if true, then we create one 
        if (target.firstElementChild === null) {

            let circle = document.createElement("div");
    
            circle.classList.add("circle");

            circle.innerText = 'O';
    
            target.appendChild(circle);

            sumCount++;
            
        }

        // Change currentplayer once player O has played 
        currentPlayer = 'X';
        
    } else {

        if (target.firstElementChild === null) {
    
            let x = document.createElement("div");

            x.classList.add("x");

            x.innerText = 'X';
    
            target.appendChild(x);
    
            sumCount++;

        }
    
        currentPlayer = 'O';
        
    }
    
    // Check the outcome of the game
    checkResult(target);

}

function checkResult(target){

    // Storing the original content of the content in the section with .display class before deleting it 
    let matchConcluded = originalDisplayPlayerParent;
        
    for (let i = 0; i < 3; i++) {

        // Checking the outcome of the game for all rows
        if ((appContainer.children[i * 3].innerText !== '' && appContainer.children[i * 3].innerText === appContainer.children[i * 3 + 1].innerText && appContainer.children[i * 3 + 1].innerText === appContainer.children[i * 3 + 2].innerText) 
        ){
            // Display the reset button
            resetBtn.style.display = 'block';

            // Deleting the <span class="display-player">O</span> tag including its content
            displayPlayer.remove();

            // Modify the content in the section with .display class
            matchConcluded.innerText = 'Game Over';
            matchConcluded.style.fontSize = '30px';
            matchConcluded.style.color = 'red';

            // Adding a custom message when current player wins 
            result.innerText = `Player ${target.firstElementChild.innerText} , you've won the game!`;
            gameOver = true;
            flagSum = true;

            resetGame(matchConcluded);

        }

    }

}