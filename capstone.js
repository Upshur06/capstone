
//wrapper for the entire page
var wrapper = document.createElement("div")
              wrapper.style.width = "100%"
              wrapper.style.height = "850px"
              wrapper.style.border = "3px solid"
              document.body.appendChild(wrapper)


//category box

var subject = document.createElement("div")
              subject.style.width = "160px";
              subject.style.height = "50px";
              subject.style.border = "2px solid";
              subject.style.backgroundColor = "blue"
              subject.style.position = "relative";
              subject.style.top = "10px";
              subject.style.left = "360px";
              subject.innerHTML =      "categories";
              subject.style.fontSize = "25px";
              subject.style.textTransform = "uppercase";
              subject.style.textAlign = "center";
              wrapper.appendChild(subject);

// Options on which category to choose from
var categories = ["sports", "comics", "riddles", "history"];

for(let i=0; i<4; i++){
    var topics = document.createElement("div")
                topics.style.width = "80px";
                topics.style.height = "30px";
                topics.style.position = "relative";
                topics.style.top = "30px";
                topics.style.left = "190px";
                topics.style.marginLeft = "15px"
                topics.style.padding = "10px";
                topics.style.backgroundColor = "blue";
                topics.style.border = "2px solid";
                topics.style.fontSize = "20px";
                topics.style.textTransform = "uppercase";
                topics.style.textAlign = "center";
                topics.style.float = "left";
                topics.classList.add("sports")
                topics.innerHTML = categories[i];
                // sports.style.postion = "relative";
                // sports.style.pos =
                wrapper.appendChild(topics)
}


//wrapper box for Alphabet letters and the guessing letters

var box = document.createElement("div")
          box.style.width = "70%";
          box.style.height = "600px";
          box.style.border = "2px solid green";
          box.style.position = "relative";
          box.style.top = "120px";
          box.style.left = "120px";
          wrapper.appendChild(box)

// wrapper box for the Alphabet buttons

var wrap = document.createElement("div")
            wrap.style.width = "60%"
            wrap.style.height = "345px"
            wrap.style.border = "2px solid orange"
            wrap.style.position = "relative";
            wrap.style.top = "10px";
            wrap.style.left = "110px";
            box.appendChild(wrap)



//Alphabet buttons
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

for(let i=0; i<26; i++){
    var letters = document.createElement("div")
                letters.style.width = "70px";
                letters.style.height = "35px";
                letters.style.position = "relative";
                letters.style.bottom = "40px";
                letters.style.left = "0px";
                letters.style.marginLeft = "18px"
                letters.style.marginTop = "5px"
                // letters.style.padding = "5px";
                // letters.style.backgroundColor = "blue";
                letters.style.border = "2px solid navy";
                letters.style.fontSize = "15px";
                letters.style.textTransform = "uppercase";
                letters.style.borderRadius = "20%"
                letters.style.textAlign = "center";
                letters.style.float = "left";
                // letters.style.
                letters.classList.add("a")
                letters.innerHTML = alphabet[i];
                // sports.style.postion = "relative";
                // sports.style.pos =
                wrap.appendChild(letters);
                var selector = document.getElementsByClassName("a")
                    selector[i].addEventListener("click", function(event){
                      answer.innerHTML = event.target.innerHTML
                    })

}

// box where the letter will be selected to make words
var answer = document.createElement("div")
            answer.style.width = "70%";
            answer.style.height = "80px";
            answer.style.border = "1px solid";
            answer.style.position = "relative";
            answer.style.top = "30px";
            answer.style.left = "80px";
            box.appendChild(answer)



// box that will prompt questions
var questionaire = document.createElement("div")
                  questionaire.style.width = "80%";
                  questionaire.style.height = "100px";
                  questionaire.style.border = "1px solid blue";
                  questionaire.style.position = "relative";
                  questionaire.style.top = "55px";
                  questionaire.style.left = "50px";
                  box.appendChild(questionaire)


// questionaires for the sports section
// var part = ["What is the uniform called that players wear in a game?",
//                       "What does the QB throw or hand off to another player?",
//                       "What is the name of the drink that's used mostely in sports?",
//                       "Who are responsible for teaching players how to play the game?"];
//
//
// function sportsPart(){
//   var askQuestion = part[Math.floor(Math.random()*part.length)];
//   questionaire.innerHTML = askQuestion;
// }

// words for the sports section
var list = ["jersey", "football", "gatorade", "coaches"];

var part = ["What is the uniform called that players wear in a game?",
            "What does the QB throw or hand off to another player?",
            "What is the name of the drink that's used mostely in sports?",
            "Who are responsible for teaching players how to play the game?"];

            obj = {
              jersey: "What is the uniform called that players wear in a game?",
              football: "What does the QB throw or hand off to another player?",
              gatorade: "What is the name of the drink that's used mostely in sports?",
              coaches: "Who are responsible for teaching players how to play the game?"

            }

function sportsColumn(){



  //   for(let i=0; i<4; i++){
  //       for(let j=0; i<4; j++){
  //         if(list[i])
  //       }
  //   }
  // }

        var randomWords = list[Math.floor(Math.random()*list.length)];
        answer.innerHTML = randomWords;

          if(randomWords = ){
            var two = answer.push(part[i])
            console.log(two)
          }

    //     var askQuestion = part[Math.floor(Math.random()*part.length)];
    //     questionaire.innerHTML = askQuestion;
    // }

// sportsColumn()
