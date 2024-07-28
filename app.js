let userScore = 0;
let compScore = 0;
const msg = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");
const msgContainer =  document.querySelector(".msg-container");
const userSc = document.querySelector("#user-score");
const compSc = document.querySelector("#comp-score")
const getCompChoice = ()=>{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const playGame=(userChoice)=>{
    
    let compChoice = getCompChoice();
    console.log("computer choice = "+compChoice);
    if (userChoice===compChoice) {
        drawGame();
    }else if(userChoice==="rock" && compChoice==="paper"){
        compWin();
    }else if(userChoice==="rock" && compChoice==="scissors"){
        userWin();
    }else if(userChoice==="scissors" && compChoice==="rock"){
        compWin();
    }else if(userChoice==="scissors" && compChoice==="paper"){
        userWin();
    }else if(userChoice==="paper" && compChoice==="scissors"){
        compWin();
    }else if(userChoice==="paper" && compChoice==="rock"){
        userWin();
    }
};
choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        console.log("YOU CHOICE = "+userChoice)
        playGame(userChoice);
    })
});
drawGame=()=>{
    msg.innerText = "GAME DRAW";
    msg.style.backgroundColor = "yellow";
    msg.style.color = "black";
};
userWin=()=>{
    msg.innerText = "YOU WIN";
    msg.style.backgroundColor = "green";
    userScore++;
    userSc.innerText = userScore;
};
compWin=()=>{
    msg.innerText = "COMPUTER WINS";
    msg.style.backgroundColor = "red";
    compScore++;
    compSc.innerText = compScore;
    
   
};