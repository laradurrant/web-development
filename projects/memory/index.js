var list = [];
var matches = 0;
var squares = document.getElementsByClassName("square");
var count = squares.length;
var pairs = count / 2;
var characterList = ["☆", "♡", "♢", "☐", "♫", "♪", "♤", "♧"];
var characters = [];


document.getElementById("reset").addEventListener("click", reset); 

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

createList();
shuffleSquares();
makeBoard();

function addListener(){

      var current = {
        value: this.innerHTML, 
        id: this.id
      };
      
      this.classList.add("active");
      this.removeEventListener("click", addListener);
      addPair(current);
    
}

function reset(){
  document.getElementById("reset").removeEventListener("click", reset); 
  document.getElementById("reset").classList.add("processing");
  document.getElementById("reset").innerHTML = "Start memorizing... ;)";
  shuffleSquares();
 
  list.length = 0;
  matches = 0;
  document.getElementById("Win Text").innerHTML = "";
//   document.getElementById("status").innerHTML = "OK, here's your next set!";
  
    for(var i = 0; i < squares.length; i++){
 
      squares[i].classList.add("highlighted");
    }
  setTimeout(displayBoard, 3000);
  
   
}

function displayBoard(){
   for(var i = 0; i < squares.length; i++){
      squares[i].classList.remove("selected");
      squares[i].classList.remove("active");
      squares[i].classList.remove("highlighted");
    }
   document.getElementById("Win Text").innerHTML = "";
  document.getElementById("status").innerHTML = "";
  
   makeBoard();
  document.getElementById("reset").addEventListener("click", reset); 
  document.getElementById("reset").classList.remove("processing");
  document.getElementById("reset").innerHTML = "Reset";
 
}

function addPair(current){

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
       if(list[0].value === list[1].value){ 
       
         matches++;
         document.getElementById(list[0].id).removeEventListener("click", addListener);
         document.getElementById(list[1].id).removeEventListener("click", addListener);
         
        document.getElementById(list[0].id).classList.remove("active");
        document.getElementById(list[1].id).classList.remove("active");
        document.getElementById(list[0].id).classList.add("selected");
        document.getElementById(list[1].id).classList.add("selected");
         
         if(matches === pairs) {
            document.getElementById("Win Text").innerHTML = "You win!";
           for(var i = 0; i < squares.length; i++){
 
      squares[i].classList.add("highlighted");
    }
         }
     }
    else {
       
        document.getElementById(list[0].id).addEventListener("click", addListener);
        document.getElementById(list[1].id).addEventListener("click", addListener);
      
        document.getElementById(list[0].id).classList.remove("active");
        document.getElementById(list[1].id).classList.remove("active");
       
    }
 
  }

}

