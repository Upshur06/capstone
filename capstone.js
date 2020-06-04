let buttonContainer = document.getElementById('button-container');

// array for the catagory column
// function word(catagoryList, hintList){
//   var catagoryList = sportsListArray.push(sportsList)
//   var hintList = hintListArray.push(hintList)
// }

// var sportsListArray = [];
// var hintListArray = [];
// var randomizer = 0;
// var splitSportsWord;
// var wrongGuessCount = 0;

// var wear = new word("jersey", "What is the uniform called that players wear in a game?");
// var ball = new word("football", "What does the QB throw or hand off to another player?");
// var drink = new word("gatorade", "What is the name of the drink that's used mostly in sports?");
// var job = new word("coaches", "Who are responsible for teaching players how to play the game?");

// var hero = new word("batman", "What Caped Crusader is known as the Dark Knight?");
// var country = new word("wakanda", "T'Challa is a superhero character, who is king of what country?");
// var color = new word("grey", "What color was the Hulk when he was originally introduced in Marvel Comics?");
// var metal = new word("adamantium", "What type of metal is Wolverine's claws made of?");

// var little = new word("short", "What five-letter word becomes shorter when you add two letters to it?");
// var letter = new word("envelope", "What word begins and ends with an E but only has one letter?");
// var paper = new word("paper", "You can drop me from the tallest building and I'll be fine, but if you drop me in water I die. What am I??");
// var eat = new word("meat", "Paul's height is six feet, he's an assistant at a butcher's shop, and wears size 9 shoes. What does he weigh?");

// var sport = new word("baseball", "Jackie Robinson became the first African American to play in Major League _____?");
// var church = new word("ebenezer", "What was the name of Dr. Martin Luther King Jr.'s father's church?");
// var city = new word("chicago", "In what Midwestern city did Dr. Hale Williams establish the first African-American hospital?");
// var politics = new word("obama", "Who is the first African American President of the U.S.");


// hintList chance()
// function chance(){
//     return (Math.floor(Math.random() * sportsListArray.length));
// }
// var randomSportsWord = chance();

// create a split function
// var splitSportsWord = sportsListArray[randomizer].split("")

// console.log(splitSportsWord)
// var sportsArray = [];

// function collection(dashesArray){
//   var checkArray = sportsArray.push(checkArray)
//
// }
// collection(dashesArray)

// var dashesArray = [];
// create a string dash function
// function stringDash(arg){
//   dashesArray = [];
//     for(i=0;i<arg.length;i++){
//       dashesArray.push(" __ ");
//     }
//     var dashes = dashesArray.join('')
//     return dashes
// }

// stringDash(splitSportsWord)



//The individual Alphabet buttons
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

for(let i=0; i<26; i++){
    var letters = document.createElement("div")
                letters.classList.add("letterStyle")
                letters.classList.add("a")
                letters.innerHTML = alphabet[i];
                buttonContainer.appendChild(letters);
                // var selector = document.getElementsByClassName("a")
                //     selector[i].addEventListener('click', function(event){
                //       for(let i = 0;i<splitSportsWord.length;i++){
                //         if(event.target.innerHTML === splitSportsWord[i]){
                //           rightGuessFunction(event.target.innerHTML)
                //         }
                //       }
                //       wrongGuessFunction(event.target.innerHTML)
                //       winOrLose()
                //     })
}

// function wrongGuessFunction(x){
//   wrongGuess.innerHTML += x
//   alert("Incorrect")
//   wrongGuessCount += 1;
  // console.log('Wrong guesses:', wrongGuessCount);
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
//     var arrow = document.createElement("button")
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
