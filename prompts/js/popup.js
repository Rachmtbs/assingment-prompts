 // establish the functionality on window load:

 window.onload = function (){
    'use strict'
    document.getElementById('link').onclick = conformationFunction;
    console.log(link2);
    document.getElementById('link2').onclick = conformationFunction2;
 };
// Ask the user to play another game
function conformationFunction(){
    'use strict';
   let play = confirm("Would you like to play a game?");
   if(play){
    console.log('play');
       promptFunction();
   }
} //end conformationFunction

//Below inspect error said line 7 uncaught refrences undefined but now no error I did not change anything 

// prompt we will ask the user to pick heads or tales we will decaler a function

function promptFunction (){
// inside we set up use strict. we also will be getting a random value
// in order to get a random value we use the math.round 
   'use strict'
   let randomValue = Math.round(Math.random());
   let userInput = prompt( " Please enter 0 for heads and 1 for tails!");
    // we are going to take our two functions and send the to an alert function

    alertFunction(userInput, randomValue);
   
} // End Prompt function

function conformationFunction2 (){
   'use strict';
   let play2 = confirm("would you like to play Rock Paper and Scissors!");
   if(play2){
      promptFunction2();
   } 
}


//⬆️ did not right promptFunction2 therefore it wasnt calling the second prompt untill I changed it
// decide who won heads or tails

function alertFunction(userInput, randomValue){
   'use strict'
   if(userInput == randomValue){
    alert("You win!" +userInput +" " + randomValue );
   } 
   else{
    alert("You lost!" +userInput + " " + randomValue);
   }
}

function promptFunction2 (){
   'use strict';
   let randomValue = Math.round(Math.random());
   let userInput2 = prompt( " Please enter 0 for Rock, 1 for paper and 2 for scisssors!");
   alertFunction2(userInput2, randomValue);
}

function alertFunction2(userInput2, randomValue){
   'use strict'
   if(userInput2 == randomValue){
    alert("You win!" +userInput2 +" " + randomValue );
   } 
   else{
    alert("You lost!" +userInput2 + " " + randomValue);
   }
}