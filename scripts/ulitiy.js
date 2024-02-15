function hideElementById(elementId){
    const element =document.getElementById(elementId);
    element.classList.add('hidden')
}
function ShowELementById(elementId){
    const element=document.getElementById(elementId);
    element.classList.remove('hidden')
}


function addBackgroundColorById(elementId){

    const element=document.getElementById(elementId);
    element.classList.add('bg-green-400')
}
function removeBackgroundColorById(elementId){

    const element=document.getElementById(elementId);
    element.classList.remove('bg-green-400');
}


function getElementValueById(elementId){

    const element=document.getElementById(elementId);
    const elementText=element.innerText;
    const value=parseInt(elementText);
    return value;

}
function setElementValueById(elementId,value){

   const element=document.getElementById(elementId);
 element.innerText=value;
   
}
function setElementTextById(elementId){
    const element=document.getElementById(elementId);
    const trxt =element.innerText;
    return trxt;
}

 function getRandomAlphabet(){
    const alphabetString='abcdefghijklmnopqrstuvwxyz';
    const alphabets=alphabetString.split('');
     console.log('your random alphabet',alphabets);


    // get a random index betwwen 0 -25
     
    const randomNumber=Math.random()*25;
    const index=Math.round(randomNumber);
    const alphabet=alphabets[index];
    console.log(index,alphabet);
    return alphabet;
 }