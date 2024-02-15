//   function play(){   const homesection=document.getElementById('home-screen');
//      homesection.classList.add('hidden'); 
//      const playsection=document.getElementById('play-ground');
//      playsection.classList.remove('hidden');
//  }

function handleKeyboardButtonPress(event){
    const playerPressed =event.key;
    // stop game
    if(playerPressed==='Escaped'){
        gameover();
    }
  

    // get the expected to press
    const currentAlphabetElement=document.getElementById('current-alphabet');
    const currentAlphabet=currentAlphabetElement.innerText;
    const captureAlphabet=currentAlphabet.toLowerCase()
    


    //  cheak matched or not
    if(playerPressed===captureAlphabet){
        console.log('you win');

// update score
//  1 current scorer

const currentScore=getElementValueById('current-score');
const updateScore=currentScore+1;
setElementValueById('current-score',updateScore)


//    const currentScoreElement=document.getElementById('current-score');
//    const currentScoreText=currentScoreElement.innerText;
//    const currentScore=parseInt(currentScoreText);
//    console.log(currentScore)
// //    increase the update score by 1
// const newScore=currentScore+1;
// // show a new update score
// currentScoreElement.innerText=newScore;

        console.log('you  have pressed ',captureAlphabet);
        removeBackgroundColorById(captureAlphabet);
      continueGame();
    }
    else{
        console.log('you lost')
const currentLife=getElementValueById('current-life');
 const updateLife=currentLife -1;
 setElementValueById('current-life',updateLife);
 if(updateLife ===0){
   gameover();
 }
        // const currentLifeElement=document.getElementById('current-life');
        // const currentLifeText=currentLifeElement.innerText;
        // const currentLife=parseInt(currentLifeText);


        // const newLife=currentLife-1;
        // currentLifeElement.innerText=newLife;
    }

    
}


// capture Keyboard key press
document.addEventListener('keyup',handleKeyboardButtonPress);


 function continueGame(){
     const alphabet=getRandomAlphabet();
    //  console.log('your random',alphabet)


    //  screen show

const currentAlphabet=document.getElementById('current-alphabet');
currentAlphabet.innerText=alphabet;

// set bg color
addBackgroundColorById(alphabet);


 }

 function play(){
     hideElementById('home-screen');
     ShowELementById('play-ground');
    continueGame();
    hideElementById('fina-score');

    // reset score and life

    setElementValueById('current-life',5);
    setElementValueById('current-score',0);
 }
 function gameover(){
    hideElementById('play-ground');
    ShowELementById('fina-score');
    // update final score
    const lastScore=getElementValueById('current-score');
    console.log(lastScore);
    setElementValueById('last-score',lastScore);
// last alphabet clear
const currentAlphabet=setElementTextById('current-alphabet');
removeBackgroundColorById(currentAlphabet);
 }
