

let userScore = 0;
let cmpScore = 0;


const icons = document.querySelectorAll('.icons');
const msgBox = document.querySelector('#msgBox')
const message = document.querySelector('.message')
const userScoreDisplay = document.querySelector('#userScore')
const cmpScoreDisplay=document.querySelector('#cmpScore')
const reset = document.querySelector('.reset')


message.className = "message neutralMsg";
msgBox.innerText="Lets play Game"
const genCmpChoice = () => { 
    
      const options = ["rock", "paper", "scissors"];
      const val= options[Math.round(Math.random() * 2)];
      return val;
  
    
}



const drawGame = () => { 
    msgBox.innerText = "game was draw.Play again!";
    message.className = "message neutralMsg";
   
}

const showWinner = (userWin, userChoice, cmpChoice) => { 
 
    
    if (userWin) {
        message.className = "message winMsg";

        msgBox.innerText =`you win! your ${userChoice} beats ${cmpChoice}`
        userScore++;
        userScoreDisplay.innerText = userScore;
       
        }
    else { 
       message.className = "message loseMsg";

        msgBox.innerText =`you lose! Computer ${cmpChoice} beats ${userChoice}`

        console.log(userWin);
        cmpScore++;
        cmpScoreDisplay.innerText = cmpScore;
      
      
    }

}

const playGame = (userChoice) => { 

   
    console.log("user Choice", userChoice)
    
    //generate computer choice->Modular way of programming
    const cmpChoice = genCmpChoice();
    console.log("machine Choice", cmpChoice)

    // who wins
    if (userChoice === cmpChoice) {
        console.log("game draw")
        drawGame();
    } else { 
       let userWin = true;
        if (userChoice === "rock") {
            userWin = cmpChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = cmpChoice === "scissors" ? false : true;
        } else { 
            userWin = cmpChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,cmpChoice);
    }


}

icons.forEach((choice) => { 
    choice.addEventListener("click", () => { 
       
        const userChoice = choice.id;
       
        playGame(userChoice)
    })
})


reset.addEventListener('click', () => { 
    userScore = 0;
    cmpScore = 0;
    message.className = "message neutralMsg";
    msgBox.innerText = "Lets play Game";
    cmpScoreDisplay.innerText = cmpScore;
    userScoreDisplay.innerText = userScore;
    


})