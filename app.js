let userScore = 0;
let compScore =0;
let getChoice = document.querySelectorAll('.choice');
let getMsg = document.querySelector('#msg');
let userScorePara = document.querySelector('#user-score');
let compScorePara = document.querySelector('#comp-score');

const getCompChoice = () =>{
    var arr = ['rock','paper','scissors'];
    let getRandom = Math.floor(Math.random()*3);
    return arr[getRandom];
}

const drawGame = () =>{
    getMsg.textContent = 'Draw Game';
    getMsg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin) =>{
    if(userWin){
        userScore++;
        console.log('userChoice',userScore);
        userScorePara.textContent   = userScore;
        getMsg.textContent = 'You Win!';
        getMsg.style.background == 'green';
        
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        getMsg.textContent = 'You loose';
        getMsg.style.background == 'red';
        
    }
}
const playGame = (userChoice) => {
    console.log('userChoice',userChoice);
    let getComp = getCompChoice();
    console.log('compChoice',getComp);
    
    if(userChoice === getComp){
        drawGame();
    }else {
        let userWin = true;
        if(userChoice === 'rock'){
            userWin = getComp === 'paper' ? false : true;
        }else if(userChoice === 'paper'){
            userWin = getComp === 'scissors' ? false : true;
        }else{
            userWin = getComp === 'rock' ? false : true;
        }
        showWinner(userWin);
    };

}

getChoice.forEach((choices) => {
    choices.addEventListener('click',function(){
        var userChoice = choices.getAttribute('id');
        playGame(userChoice);
    })
})