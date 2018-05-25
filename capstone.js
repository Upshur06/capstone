// array for the sports column
function word(sportsList, hintList){
  var sportsList = sportsListArray.push(sportsList)
  var hintList = hintListArray.push(hintList)
}

var sportsListArray = [];
var hintListArray = [];
var randomizer = 0;
var splitSportsWord;
var wear = new word("jersey", "What is the uniform called that players wear in a game?");
var ball = new word("football", "What does the QB throw or hand off to another player?");
var drink = new word("gatorade", "What is the name of the drink that's used mostly in sports?");
var job = new word("coaches", "Who are responsible for teaching players how to play the game?");

var hero = new word("batman", "What Caped Crusader is known as the Dark Knight?");
var country = new word("wakanda", "T'Challa is a superhero character, who is king of what country?");
var color = new word("grey", "What color was the Hulk when he was originally introduced in Marvel Comics?");
var metal = new word("adamantium", "What type of metal is Wolverine's claws made of?");

var little = new word("short", "What five-letter word becomes shorter when you add two letters to it?");
var letter = new word("envelope", "What word begins and ends with an E but only has one letter?");
var paper = new word("paper", "You can drop me from the tallest building and I'll be fine, but if you drop me in water I die. What am I??");
var eat = new word("meat", "Paul's height is six feet, he's an assistant at a butcher's shop, and wears size 9 shoes. What does he weigh?");

var sport = new word("baseball", "Jackie Robinson became the first African American to play in Major League _____?");
var church = new word("ebenezer", "What was the name of Dr. Martin Luther King Jr.'s father's church?");
var city = new word("chicago", "In what Midwestern city did Dr. Hale Williams establish the first African-American hospital?");
var politics = new word("obama", "Who is the first African American President of the U.S.");


// hintList chance()
function chance(){
    return (Math.floor(Math.random() * sportsListArray.length));
}
var randomSportsWord = chance();

// create a split function
// var splitSportsWord = sportsListArray[randomizer].split("")

// console.log(splitSportsWord)
var sportsArray = [];

function collection(dashesArray){
  var checkArray = sportsArray.push(checkArray)

}
collection(dashesArray)

var dashesArray = [];
// create a string dash function
function stringDash(arg){
  dashesArray = [];
    for(i=0;i<arg.length;i++){
      dashesArray.push(" __ ");
    }
    var dashes = dashesArray.join('')
    return dashes
}

// stringDash(splitSportsWord)


//wrapper for the entire page in the black border
var wrapper = document.createElement("div")
              wrapper.style.width = "100%"
              wrapper.style.height = "850px"
              wrapper.style.border = "3px solid"
              wrapper.style.postion= "relative"
              wrapper.style.top = "10px"
              document.body.appendChild(wrapper)


//category box as  blue button at the top of the screen
var subject = document.createElement("div")
              subject.style.width = "160px";
              subject.style.height = "50px";
              subject.style.border = "4px solid";
              subject.style.backgroundColor = "#0066cc"
              subject.style.position = "relative";
              subject.style.top = "10px";
              subject.style.left = "360px";
              subject.innerHTML =  "categories";
              subject.style.fontSize = "25px";
              subject.style.textTransform = "uppercase";
              subject.style.textAlign = "center";
              wrapper.appendChild(subject);

// The 4 options button below the category
var categories = ["sports", "comics", "riddles", "history"];


for(let i=0; i<4; i++){
    var topics = document.createElement("button")
                topics.style.width = "100px";
                topics.style.height = "45px";
                topics.style.position = "relative";
                topics.style.top = "30px";
                topics.style.left = "190px";
                topics.style.marginLeft = "15px"
                topics.style.padding = "10px";
                topics.style.backgroundColor = "#0066cc";
                topics.style.border = "2px solid";
                topics.style.fontSize = "20px";
                topics.style.textTransform = "uppercase";
                topics.style.textDecoration = "underline"
                topics.style.textAlign = "center";
                topics.style.float = "";
                topics.classList.add("sports")
                topics.innerHTML = categories[i];
                wrapper.appendChild(topics)
}

//The green border for Alphabet letters and the guessing letters
var box = document.createElement("div")
          box.style.width = "680px";
          box.style.height = "630px";
          box.style.border = "2px solid green";
          box.style.position = "relative";
          box.style.top = "100px";
          box.style.left = "120px";
          wrapper.appendChild(box)

//  The orange box for the Alphabet buttons
var wrap = document.createElement("div")
            wrap.style.width = "400px"
            wrap.style.height = "325px"
            // wrap.style.border = "2px solid orange"
            wrap.style.position = "relative";
            wrap.style.top = "50px";
            wrap.style.left = "110px";
            box.appendChild(wrap)


//The individual Alphabet buttons
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

for(let i=0; i<26; i++){
    var letters = document.createElement("div")
                letters.style.width = "70px";
                letters.style.height = "35px";
                letters.style.position = "relative";
                letters.style.bottom = "30px";
                letters.style.left = "0px";
                letters.style.marginLeft = "18px"
                letters.style.marginTop = "5px"
                letters.style.border = "2px solid navy";
                letters.style.fontSize = "15px";
                letters.style.textTransform = "uppercase";
                letters.style.borderRadius = "20%"
                letters.style.textAlign = "center";
                letters.style.float = "left";
                letters.classList.add("a")
                letters.innerHTML = alphabet[i];
                wrap.appendChild(letters);
                var selector = document.getElementsByClassName("a")
                    selector[i].addEventListener('click', function(event){
                      for(let i = 0;i<splitSportsWord.length;i++){
                        if(event.target.innerHTML === splitSportsWord[i]){
                          rightGuessFunction(event.target.innerHTML)
                        }
                      }
                      wrongGuessFunction(event.target.innerHTML)
                      winOrLose()
                    })
}

function wrongGuessFunction(x){
  wrongGuess.innerHTML += x
}


function rightGuessFunction(letter){
    for(let i =0; i < splitSportsWord.length; i++){
      if(letter === splitSportsWord[i]){
        dashesArray.splice(i,1, letter)
      }
    }
    answer.innerHTML = dashesArray.join('')
}


// The red box where the wrong guess letter will be stored
var wrongGuess = document.createElement("div")
            wrongGuess.style.width = "430px";
            wrongGuess.style.height = "40px";
            wrongGuess.style.border = "1px solid red";
            wrongGuess.style.position = "relative";
            wrongGuess.style.textAlign = "center"
            wrongGuess.style.fontSize = "25px"
            wrongGuess.style.top = "60px";
            wrongGuess.style.left = "83px";
            wrongGuess.style.input = "onfocus"
            box.appendChild(wrongGuess)


// // Purple box where the number of dashes will be present
var answer = document.createElement("div")
            answer.style.width = "480px";
            answer.style.height = "50px";
            answer.style.border = "4px solid purple";
            answer.style.position = "relative";
            answer.style.textAlign = "center"
            answer.style.fontSize = "35px"
            answer.style.top = "70px";
            answer.style.left = "60px";
            box.appendChild(answer)


// Blue box that will prompt hint
var questionaire = document.createElement("div")
                  questionaire.style.width = "500px";
                  questionaire.style.height = "100px";
                  questionaire.style.border = "5px solid #0066cc";
                  questionaire.style.position = "relative";
                  questionaire.style.textAlign = "center"
                  questionaire.style.fontSize = "20px"
                  questionaire.style.top = "85px";
                  questionaire.style.left = "55px";
                  box.appendChild(questionaire)

//next button
function nextButton(){
    var arrow = document.createElement("button")
                arrow.style.width = "50px"
                arrow.style.height = "40px"
                arrow.style.border = "4px solid"
                arrow.style.position = "relative"
                arrow.style.bottom = "30px"
                arrow.style.left = "595px"
                arrow.innerHTML = "next"
                arrow.style.fontSize = "12px"
                arrow.style.textTransform = "uppercase"
                arrow.style.textAlign = "center";
                box.appendChild(arrow)

                arrow.addEventListener("click", hinting)
}
nextButton()

function hinting(){
          randomizer = (Math.floor(Math.random() * sportsListArray.length));
          splitSportsWord = sportsListArray[randomizer].split("")
          answer.innerHTML= stringDash(splitSportsWord);
          questionaire.innerHTML = hintListArray[randomizer];
          wrongGuess.innerHTML =  wrongGuess.value = " "
}



alert("Click the next button to start the game")

function winOrLose(){
        if(dashesArray.join('') === splitSportsWord.join('')){
            setTimeout(function(){
              alert("Congrats,...You Won. Push the next button to continue with the game.")
            }, 1000)
        }
}
