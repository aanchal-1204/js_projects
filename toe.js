let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector(".new-btn");
let winnerMsg = document.querySelector(".hide");
let msgContainer = document.querySelector(".msg-container");

//2-D array
const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let turnO = true;

const resetGame = () => { 
    turnO = true;
    enableBoxes();
     winnerMsg.classList.add('hide');

}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    if (turnO) { //player O
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X"; //Player X
      turnO = true;
    }
    box.disabled = true;  //so that the "same box" when given value doesn't change

    checkWinner(); 
  });
});



const disableBoxes = () => { 
    for (let box of boxes) { 
        box.disabled = true;
    }
}
const enableBoxes = () => { 
    for (let box of boxes) { 
      box.disabled = false;
      box.innerText = "";
    }
}

const showWinner = (winner) => { 
    winnerMsg.innerText = `Congratulations,Winner is ${winner}`;
    winnerMsg.classList.remove('hide');
    disableBoxes();
}



const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1val = boxes[pattern[0]].innerText; 

    let pos2val = boxes[pattern[1]].innerText;

    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
          console.log("winner", pos1val);

          showWinner(pos1val);
          }
    }
  }
};



resetbtn.addEventListener('click', resetGame);
newgamebtn.addEventListener('click', resetGame);


