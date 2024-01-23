let  randomNumber =parseInt(Math.random()*100 +1);
const submit =document.querySelector('#subt');
const userInput =document.querySelector('#guessField');
const guessSlot =document.querySelector('.guesses');
const remaining =document.querySelector('.lastResult');
const loworhi =document.querySelector('.lowOrHi');
const startOver =document.querySelector('.resultParas');
//const newInput =document.querySelector('#guessNew');


// ek paragraph create kr lo
const p =document.createElement('p')

// jo be user submit kra ga value  unko hm store kr la ga or us pura array ko he user ko deka da ga  because user same value repeate na kr da ...
let prevGuess =[];
let numGuess =1;    //number of attempts number starts from 1 . esko hm 10 tak la kr jya ga uska bad ma block kr da ga ..


let playGame =true;

// app game khalana ka le avaliable ha ke ni
if(playGame){
    submit.addEventListener('click',function(e){
       e.preventDefault()
       const guess = parseInt(userInput.value)  // user ke value ko print krvana ka lea use keya ha esko...
       console.log(guess);
       validateGuess(guess) ;// next function ka pass kr deya ha 
    })
}


function validateGuess(guess){
    /// ya vala function check kra ga ke number valid aha ke ni (-1,a ,0.1255). or ya check kra ga ke value 1 to 100 ha ke ni...
if(isNaN(guess)){
    alert('please enter valid number 1');
}
else if(guess<1){
    alert('please enter valid number 2');
}
else if(guess>100){
    alert('please enter valid number 3');
}
else{
       prevGuess.push(guess);
       if(numGuess ===11){
        displayGuess(guess);
       displayMessage(`game over.pandom number was ${randomNumber}`)
        endGame()
    }
    else{
       displayGuess(guess) ;// guess number ko display krva deya ha ..
       checkGuess(guess);    // guess number checkGuess ka pass kr deya ha ...
    }
}
}

function checkGuess(guess){
    ////function check es lea use kra ga kyu ke message print krvani ha .. or ya check kra ga ke value random number ka equal to ni ha agar equal ha to displayMessage ka use krka user ko bol do ke user winner ha  
     if(guess === randomNumber){
        displayMessage(`tou guessed it right`);
        endGame;
     }
     else if(guess<randomNumber){
        displayMessage(`Number is too low`);
     }
     else if(guess>randomNumber){
        displayMessage(`number is too high`);
     }
}
function displayGuess(guess){
    // ya vala function value ko clean kra ga . for new value (clean up method)
     userInput.value =''; // user ke value ko update kr da ga ...
      guessSlot.innerHTML +=`${guess} ,`;
      numGuess++;
      remaining.innerHTML =`${11-numGuess}`;
    }

function displayMessage(message){
    //ye wala function  method sidha DOM ke sath interact karega..ye messaage print karega...isme hum user ko ji input value ha usko hum empty kardenge..innerHTML me guess ko add kardenge or guess ko kam kar denge..
     loworhi.innerHTML =`<h2>${message}</h2>`;

}
function endGame(){ 
    //
    userInput.value =''; // end ma user ke value ko clean ke da ga ...
    userInput.setAttribute('disabled','')
    p.classList.add('button');
    p.innerHTML=`<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame =false;
    newGame();

}


function newGame(){
   const newGameButton= document.querySelector('#newGame')
   newGameButton.addEventListener('click',function(e){
    randomNumber = parseInt(Math.random()*100+1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML ='';
    remaining.innerHTML =`${11-numGuess}`;
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true;
   })
}
