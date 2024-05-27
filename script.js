let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");

const gencompchoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame=()=>{
    console.log("game was draw");
    msg.innerText="Game was Draw.Play again";
    msg.style.backgroundColor="#081b31";
}

const shoWinner=(userWin,userchoice,compchoice)=>{
    if(userWin){
        userscore++;
        userscorepara.innerText=userscore;
      
        msg.innerText=`You win! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compscore++;
        compscorepara.innerText=compscore;
       
        msg.innerText=`You lose! ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor="red";
    }
};

const playgame= (userchoice)=>{
    console.log(userchoice);

    const compchoice=gencompchoice();

    console.log("comp choice=",compchoice);
    //generate comp choice

    if(userchoice===compchoice){
        //draw game
        drawGame();
    }
    else{
        let userWin=true;
        if(userchoice=="rock"){
            //scissors,paper
            userWin = compchoice === "paper"?false:true;
        }
        else if(userchoice==="paper"){
            //rock,scissors
            userWin = compchoice === "scissors"?false:true;
        }
        else{
            //paper,rock
            userWin = compchoice === "rock"?false:true;
        }
        shoWinner(userWin,userchoice,compchoice);
    }
};

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        let userchoice=choice.getAttribute("id");
        playgame(userchoice);
    });
});
