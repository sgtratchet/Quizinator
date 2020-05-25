var timerEl=document.getElementById("timer");
var scoreEl=document.getElementById('scoring-container');
var answerButton= document.getElementById('answers-container')
var score= 0;

var start = confirm("Push the button, Max!");
    if (start){
        quizStart();
    }
    else{
        alert("Wrong button")
        // return false;
    }


//array of questions
var questionEl= [
    {question: 'who created javascript?', 
        answers:{
            a:"Douglas Crockford",
            b: "Sheryl Sandberg",
            c: "Brendan Eich",
            d: "Jennifer Anniston"
        },
        correctAnswer:"c"
    },
    {question: 'what is a variable in javascript?', 
        answers:{
            a:"a method of storing information",
            b:"something to represent unknown information",
            c:"type of headache",
            d:"Eva Mendes"
        },
        correctAnswer:"a"
    },
    {question: 'which is NOT a way to store information using javascript?', 
        answers:{
            a: "Using an Array",
            b: "Local Storage",
            c: "Scarlett Johansson",
            d: "Session Storage"
        },
        correctAnswer:"c"
    },
    {question: 'which of the following will make something disapear?', 
        answers:{
            a: "window.prompt",
            b: "Gerard Butler",
            c: "function(erase)",
            d: "(CSS) display:none."
        },
        correctAnswer:"d"
    }
];
function quizStart(){
    timer();
    //question loop
    for (var i = 0; i < questionEl.length;i++){
        var response=userInput;

        if(response === correctAnswer)
        {score++};
    }
};

function ShowResults(){
    var scoreEl=document.createElement("div");
    scoreEl.className ="results";
}


function timer(){
    var timeLeft = 75;
    var timeInterval=setInterval(function(){
        timerEl.textContent = timeLeft;
        timeLeft--;
        if (timeLeft===0){
            timerEl.textContent="0";
            clearInterval(timeInterval);
        };
    }, 1000);
};
answerButton.addEventListener('click", showResults')
