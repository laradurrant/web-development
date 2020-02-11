var box = document.getElementById('question-text');

box.addEventListener("mouseover", changeDialogueText);
box.addEventListener("mouseleave", revertDialogueText);


function changeText(string){

    box.innerText = string;
}

function changeDialogueText(){
   changeText("Match the RGB value to its color ★");
}

function revertDialogueText(){
   changeText("★");

}