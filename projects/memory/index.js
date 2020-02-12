var waitTime = 3000;

var list = [];
var matches = 0;
var squares = document.getElementsByClassName("square");
var count = squares.length;
var pairs = count / 2;
var characterList = ["☆", "♡", "♢", "☐", "♫", "♪", "♤", "♧"];
var characters = [];

var resetButton = document.getElementById("reset");
var winText = document.getElementById("Win Text");
var statusText = document.getElementById("status");

resetButton.addEventListener("click", reset); 



function createList(){
  for(var i = 0; i < count / 2; i++){
      characters.push(characterList[i]);
      characters.push(characterList[i]);
  }
}



function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function shuffleSquares(){
  shuffleArray(characters);
  for(var i = 1; i <= squares.length; i++){
    document.getElementById(i).innerHTML = characters[i-1];
  }
}



function makeBoard(){
  for(var i = 1; i <= count; i++)
  {
    document.getElementById(i).addEventListener("click", addListener);
  }
  
}


function addListener(){

  // sets up our basic tile object
  var current = {
    value: this.innerHTML, 
    id: this.id
  };
  
  this.classList.add("active");
  this.removeEventListener("click", addListener);
  addPair(current);

}

function disableResetButton(){
  resetButton.removeEventListener("click", reset); 
  resetButton.classList.add("processing");
  resetButton.innerHTML = "Start memorizing... ;)";
}

function enableResetButton(){
  resetButton.addEventListener("click", reset); 
  resetButton.classList.remove("processing");
  resetButton.innerHTML = "Reset";
}

function reset(){

  disableResetButton();  
  shuffleSquares();
 
  list.length = 0;
  matches = 0;
  winText.innerHTML = "";
    
    for(var i = 0; i < squares.length; i++){
 
      squares[i].classList.add("highlighted");
    }
  
  
    // will wait for a certain amount of time
    // gives the player a chance to memorize the board
    // can be modified for an easier game
  setTimeout(displayBoard, waitTime);
  
   
}


function displayBoard(){
  
  // clears out & removes any existing styling
   for(var i = 0; i < squares.length; i++){
      squares[i].classList.remove("selected");
      squares[i].classList.remove("active");
      squares[i].classList.remove("highlighted");
    }

   winText.innerHTML = "";
   statusText.innerHTML = "";
  
   makeBoard();
   enableResetButton();

 
}

function addPair(current){
  // adds an element to the list & processes it to see if we have a pair

  if(list.length < 2){ 
     list.push(current); 
  }
  else {
    list.length = 0;
    list.push(current);
  }

  checkPairs();  
}



function checkPairs(){
    if(list.length ==  2){

       // If we have a matching pair
       if(list[0].value === list[1].value){ 
       
         matches++;
         document.getElementById(list[0].id).removeEventListener("click", addListener);
         document.getElementById(list[1].id).removeEventListener("click", addListener);
         
         document.getElementById(list[0].id).classList.remove("active");
         document.getElementById(list[1].id).classList.remove("active");
         document.getElementById(list[0].id).classList.add("selected");
         document.getElementById(list[1].id).classList.add("selected");
         
         // If we have completed all of the pairs
         // displays win screen
         if(matches === pairs) {
           winText.innerHTML = "You win!";
           for(var i = 0; i < squares.length; i++){
 
              squares[i].classList.add("highlighted");
            }
         }
     }
    else {
        // Not a match, continue with the game & reset the styling

        document.getElementById(list[0].id).addEventListener("click", addListener);
        document.getElementById(list[1].id).addEventListener("click", addListener);
      
        document.getElementById(list[0].id).classList.remove("active");
        document.getElementById(list[1].id).classList.remove("active");
       
    }
 
  }

}


function init(){
  reset();
  createList();
  shuffleSquares();
  makeBoard();
  
}

init();
