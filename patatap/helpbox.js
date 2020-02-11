var box = document.getElementById('question-text');

box.addEventListener("mouseover", changeDialogueText);
box.addEventListener("mouseleave", revertDialogueText);


function changeText(string){

    box.innerText = string;
}

function changeDialogueText(){
   changeText("Use the keyboard keys to make music ♪");
}

function revertDialogueText(){
   changeText("♪");

}