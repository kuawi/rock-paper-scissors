const startScreen = document.querySelector('.start-screen');
const mainScreen = document.querySelector('main');
const endScreen = document.querySelector('.end-screen');
document.addEventListener('DOMContentLoaded', ()=>{
  mainScreen.classList.add('hide');
  endScreen.classList.add('hide');
});
const startBtn = document.querySelector('button.start');
const endMessages = document.querySelectorAll('p');
startBtn.addEventListener('click',()=>{
  startScreen.classList.add('hide');
  mainScreen.classList.remove('hide');
  endMessages.forEach(msg => msg.classList.add('hide'));
});

let playerChoice;
let computerChoice;
const playerButtons = document.querySelectorAll('button.player');
const computerButtons = document.querySelectorAll('button.computer');
playerButtons.forEach(btn => btn.addEventListener('click', function (e){
  playerChoice = e.target["value"];
  e.target.classList.add('selected');
  computerChoice = computerSelection();
  computerButtons[computerChoice].classList.add('selected');
  endMessages[playRound()].classList.remove('hide');
}));
playerButtons.forEach(btn => btn.addEventListener('transitionend', function(e){
  if(e.propertyName!='border-top-color') return;
  e.target.classList.remove('selected');
  computerButtons[computerChoice].classList.remove('selected');
  mainScreen.classList.add('hide');
  endScreen.classList.remove('hide');
}));

const tryAgainBtn = document.querySelector('button.try-again');
tryAgainBtn.addEventListener('click', ()=>{
  endScreen.classList.add('hide');
  mainScreen.classList.remove('hide');
  endMessages.forEach(msg => msg.classList.add('hide'));
});

function computerSelection(){
  let randomNum = Math.random();
  if(randomNum <= (1/3)) return 0;
  else if(randomNum <= (2/3)) return 1;
  else return 2;
}

//win 0
//lose 1
//draw 2
//this code is uglier because its reused
function playRound(){
  switch(true){
    case playerChoice == "rock":
      switch(true){
        case computerChoice == 0:
          return 2;
        case computerChoice == 1:
          return 1;
        case computerChoice == 2:
          return 0;
      }
    case playerChoice == "paper":
      switch(true){
        case computerChoice == 0:
          return 0;
        case computerChoice == 1:
          return 2;
        case computerChoice == 2:
          return 1;
      }
    case playerChoice == "scissors":
      switch(true){
        case computerChoice == 0:
          return 1;
        case computerChoice == 1:
          return 0;
        case computerChoice == 2:
          return 2;
      }
    default:
      console.log("playRound() error");
  }
}
