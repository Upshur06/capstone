let buttonContainer = document.getElementById('button-container');
let flexboxLetters = document.getElementsByClassName("flexbox-letter");
let wrongGuessLetter = document.getElementById("wrongGuessLetter");
let dashesLetter = document.getElementById("dashesLetter");
let questionaire = document.getElementById("questionaire");
let nextArrow = document.getElementById("arrow");

let sportsListArray = [];
let hintListArray = [];
let randomizer = 0;
let splitSportsWord;
let wrongGuessCount = 0;

// array for the catagory column
function word(catagoryList, hintList){
  var catagoryList = sportsListArray.push(catagoryList)
  var hintList = hintListArray.push(hintList)
}


let wear = new word("jersey", "What is the uniform called that players wear in a game?");
let ball = new word("football", "What does the QB throw or hand off to another player?");
let drink = new word("gatorade", "What is the name of the drink that's used mostly in sports?");
let job = new word("coaches", "Who are responsible for teaching players how to play the game?");

// let hero = new word("batman", "What Caped Crusader is known as the Dark Knight?");
// let country = new word("wakanda", "T'Challa is a superhero character, who is king of what country?");
// let color = new word("grey", "What color was the Hulk when he was originally introduced in Marvel Comics?");
// let metal = new word("adamantium", "What type of metal is Wolverine's claws made of?");

// let little = new word("short", "What five-letter word becomes shorter when you add two letters to it?");
// let letter = new word("envelope", "What word begins and ends with an E but only has one letter?");
// let paper = new word("paper", "You can drop me from the tallest building and I'll be fine, but if you drop me in water I die. What am I??");
// let eat = new word("meat", "Paul's height is six feet, he's an assistant at a butcher's shop, and wears size 9 shoes. What does he weigh?");

// let sport = new word("baseball", "Jackie Robinson became the first African American to play in Major League _____?");
// let church = new word("ebenezer", "What was the name of Dr. Martin Luther King Jr.'s father's church?");
// let city = new word("chicago", "In what Midwestern city did Dr. Hale Williams establish the first African-American hospital?");
// let politics = new word("obama", "Who is the first African American President of the U.S.");


// hintList chance()
// let randomSportsWord = function chance(){
//     return (Math.floor(Math.random() * sportsListArray.length));
// }


// create a split function
 // splitSportsWord = sportsListArray[randomizer].split("")

// console.log(splitSportsWord)
// let sportsArray = [];

// function collection(dashesArray){
//   let checkArray = sportsArray.push(checkArray)
//
// }

// collection(dashesArray)

// let dashesArray = [];

// create a string dash function
// function stringDash(arg){
//   dashesArray = [];
//     for(i=0;i<arg.length;i++){
//       dashesArray.push(" __ ");
//     }
//     let dashes = dashesArray.join('')
//     return dashes
// }

// stringDash(splitSportsWord)

function testDrive(){

    for(let i=0; i<flexboxLetters.length; i++){
        flexboxLetters[i].addEventListener("click", function(event){
          wrongGuessLetter.innerHTML += flexboxLetters[i].innerHTML;

              // for(let i = 0;i<splitSportsWord.length;i++){
              //       if(event.target.innerHTML === splitSportsWord[i]){
              //           rightGuessFunction(event.target.innerHTML)
              //       }
              //  }
              //           wrongGuessFunction(event.target.innerHTML)
              //           winOrLose()
         })
     }
 }

// function wrongGuessFunction(x){
//   wrongGuessLetter.innerHTML += x
//   alert("Incorrect")
//   wrongGuessCount += 1;
//   console.log('Wrong guesses:', wrongGuessCount);
//   if (wrongGuessCount >= 5) {
//     Lose();
//   }
// }


// function rightGuessFunction(letter){
//     for(let i =0; i < splitSportsWord.length; i++){
//       if(letter === splitSportsWord[i]){
//         dashesArray.splice(i,1, letter)
//       }
//     }
//     answer.innerHTML = dashesArray.join('')
// }


//next button
// function nextButton(){
//     let arrow = document.createElement("button")
//                 arrow.addEventListener("click", hinting)
//
// }
// nextButton()

// function hinting(){
//           randomizer = (Math.floor(Math.random() * sportsListArray.length));
//           splitSportsWord = sportsListArray[randomizer].split("")
//           answer.innerHTML= stringDash(splitSportsWord);
//           questionaire.innerHTML = hintListArray[randomizer];
//           wrongGuess.innerHTML =  wrongGuess.value = " "
          // reset wrong guess counter
//           wrongGuessCount = 0;
// }


// alert("Click the next button to start the game")
// function winOrLose(){
//         if(dashesArray.join('') === splitSportsWord.join('')){
//             setTimeout(function(){
//               alert("Congrats,...You Won. Push the next button to continue with the game.")
//             }, 1000)
//         }
//
// }

// function Lose(){
//   alert('Game over!');
  // fill in answer
//   answer.innerHTML = splitSportsWord.join('');
//
// }

testDrive();
