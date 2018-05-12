// array for the sports column
var list = ["jersey", "football", "gatorade", "coaches"];
var part = ["What is the uniform called that players wear in a game?",
            "What does the QB throw or hand off to another player?",
            "What is the name of the drink that's used mostly in sports?",
            "Who are responsible for teaching players how to play the game?"];

var random = Math.floor(Math.random() * list.length);
var tempItem = list[random]
var dashes = tempItem.replace(/[a-z]/gi, "   __   ")


//wrapper for the entire page in the black border
var wrapper = document.createElement("div")
              wrapper.style.width = "100%"
              wrapper.style.height = "850px"
              wrapper.style.border = "3px solid"
              document.body.appendChild(wrapper)


//category box as  blue button at the top of the screen
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

// The 4 options button below the category
var categories = ["sports", "comics", "riddles", "history"];

for(let i=0; i<4; i++){
    var topics = document.createElement("button")
                topics.style.width = "100px";
                topics.style.height = "45px";
                topics.style.position = "relative";
                topics.style.top = "30px";
                topics.style.left = "210px";
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


//The green border for Alphabet letters and the guessing letters

var box = document.createElement("div")
          box.style.width = "70%";
          box.style.height = "600px";
          box.style.border = "2px solid green";
          box.style.position = "relative";
          box.style.top = "120px";
          box.style.left = "120px";
          wrapper.appendChild(box)


//  The orange box for the Alphabet buttons

var wrap = document.createElement("div")
            wrap.style.width = "60%"
            wrap.style.height = "345px"
            wrap.style.border = "2px solid orange"
            wrap.style.position = "relative";
            wrap.style.top = "10px";
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
                      type.innerHTML = event.target.innerHTML
                    })

}

// The red box where the letter will be keyed in from selecting a letter from the alphabets
var type = document.createElement("div")
            type.style.width = "50%";
            type.style.height = "40px";
            type.style.border = "1px solid red";
            type.style.position = "relative";
            type.style.top = "20px";
            type.style.left = "150px";
            box.appendChild(type)



// Purple box where the number of dashes will be present
var answer = document.createElement("div")
            answer.style.width = "70%";
            answer.style.height = "50px";
            answer.style.border = "4px solid purple";
            answer.style.position = "relative";
            answer.innerHTML = dashes;
            answer.style.textAlign = "center"
            answer.style.top = "40px";
            answer.style.left = "80px";
            box.appendChild(answer)


// array to get the list of letters to corrospond the correct letter

var correct = [];
var wrong = [];

function guessing(letter){
    for(i=0; i<dashes.length[i]; i++){
      if(letter === dashes[i]){
        console.log(correct.push[dashes[i]])
      }{
        // wrong.push[dashes[i]]
      }
    }
}
        // console.log(t)

function flip(){
    for(i=0; i<dashes.length[i]; i++){
      str = dashes.replace("__", "alphabet[i]")
  }
}
// Blue box that will prompt hint
var questionaire = document.createElement("div")
                  questionaire.style.width = "80%";
                  questionaire.style.height = "80px";
                  questionaire.style.border = "5px solid blue";
                  questionaire.innerHTML = part[random]
                  questionaire.style.position = "relative";
                  questionaire.style.textAlign = "center"
                  questionaire.style.fontSize = "20px"
                  questionaire.style.top = "55px";
                  questionaire.style.left = "50px";
                  box.appendChild(questionaire)


var sports = document.getElementsByClassName("sports")[0]
      sports.addEventListener("click", function(){

      });
// var comics = document.getElementsByClassName("comics")
//       comics.addEventListener("click", function(){
//
//       });
// var riddles = document.getElementsByClassName("riddles")
//       riddles.addEventListener("click", function(){
//
//       });
// var history = document.getElementsByClassName("history")
//       history.addEventListener("click", function(){
//
//       });
