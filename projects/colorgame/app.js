// The RGB Color Guessing Game
// Created as part of the Web Developer Bootcamp course on Udemy with Colt Steele
// See: https://www.udemy.com/course/the-web-developer-bootcamp/ for details
// This tool is designed to help web developers learn how to pick out various RGB colors quickily


// 02/02/20 Added Expert mode & additional comments for clarity

// Note: the game currently starts off in Easy mode, aka 3 active squares
// That value can be adjusted 

var numSquares = 3;
var pickedColor;
var colors = [];

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");



function init(){

    setupModeButtons();
    setupSquares();
    reset();
    
}

init();



function setupModeButtons()
{
    for(var i =0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){ 
            
           for(var j = 0; j < 3; j++)
           {
                modeButtons[j].classList.remove("selected");
           }
           
            this.classList.add("selected");

            // Determines if the game is in Easy, Hard, or Expert mode
            // Based on which button the player has just clicked
            switch(this.textContent) {
                case "Easy":
                    numSquares = 3;
                    break;
                case "Hard":
                    numSquares = 6;
                    break;
                case "Expert":
                    numSquares = 9;
                    break;
                default: 
                    numSquares = 6;
                    break;
            }
           
            reset();
        });
    }
}

// Will add event listeners to the squares & check win conditions
function setupSquares()
{
    for(var i=0; i < squares.length; i++){
        squares[i].addEventListener("click", function(){
            var clickedColor = this.style.backgroundColor;
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct";
                resetButton.textContent = "Play Again?";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            }
            else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try again";
            }
        });
    }
}


// resets the board
function reset(){

    // will generate a random list of colors based on which mode we're in
    colors = generateRandomColors(numSquares);
    // picks a random color for us to be the correct answer
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        }
        else{
            squares[i].style.display = "none";
        }
    }

    resetButton.textContent = "New Game";
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";

}


resetButton.addEventListener("click", function(){
    reset();
});


// Turns all squares to the correct answer
// providdes a nice visual indicator
function changeColors(color){
    for(var i=0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var randomNumber = Math.floor(Math.random() * colors.length);
    return colors[randomNumber];
}

function generateRandomColors(num){
    var arr = []
    for(var i = 0; i < num; i++){
        // get random color and push into array
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}