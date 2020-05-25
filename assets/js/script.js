var timerEl=document.getElementById("timer");
var scoreEl=document.getElementById('scoring');
var answerButton= document.getElementById('results')
var start = prompt("push the button max");
var answers= []

//array of questions
var questions= [
    {question: 'who created javascript?', 
        answer:{
            a:"Douglas Crockford",
            b: "Sheryl Sandberg",
            c: "Brendan Eich",
            d: "Jennifer Anniston"
        },
        correctAnswer:"c"
    },
    {question: 'what is a variable in javascript?', 
        answer:{
            a:"a method of storing information",
            b:"something to represent unknown information",
            c:"type of headache",
            d:"Eva Mendes"
        },
        correctAnswer:"a"
    },
    {question: 'which is NOT a way to store information using javascript?', 
        answer:{
            a: "Using an Array",
            b: "Local Storage",
            c: "Scarlett Johansson",
            d: "Session Storage"
        },
        correctAnswer:"c"
    },
    {question: 'which of the following will make something disapear?', 
        answer:{
            a: "window.prompt",
            b: "Gerard Butler",
            c: "function(erase)",
            d: "(CSS) display:none. "
        },
        correctAnswer:"d"
    }

]
//question loop
for (var i = 0; i < questions.length;i++){
    var response=
    
    if(response === correctAnswer)
    {score++};
}

// var start=confirm(questions[i].question);
//     (buildQuiz());




function timer(){
    var timeLeft = 75;
    var timeInterval=setInterval(function(){
        timerEl.createElement("div")
        timerEl.textContent = timeLeft;
        timeLeft--;
        if (timeLeft===0){
            timerEl.textContent="0";
            clearInterval(timeInterval);
            // endQuiz();
        };
    }, 1000);
};

function showResults(){

};
// function endQuiz(){
//     scoreEl.textContent = score;
// }
answerButton.addEventListener('click", showResults')