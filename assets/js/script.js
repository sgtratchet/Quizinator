var start = document.getElementById("start");
var quiz = document.getElementById("question-container");
var timerEl = document.getElementById("timer");
var scoreEl = document.getElementById('scoring-container');
var answerButton = document.getElementById('answers-container')
var score = 0;
var choiceA = document.getElementById("choiceA");
var choiceB = document.getElementById("choiceB");
var choiceC = document.getElementById("choiceC");
var choiceD = document.getElementById("choiceD");
var answerButton = document.getElementById('scoring-container')
//array of questions
var questionEl= [
    {
        question: 'who created javascript?', 
        answers: { 
            choiceA: "Douglas Crockford",
            choiceB: "Sheryl Sandberg",
            choiceC: "Brendan Eich",
            choiceD: "Jennifer Anniston"
            },
        correctAnswer: "choiceC"   
    },
        {question: 'what is a variable in javascript?', 
        answers: {
            choiceA:"a method of storing information",
            choiceB:"something to represent unknown information",
            choiceC:"type of headache",
            choiceD:"Eva Mendes",
        },
        correctAnswer: "choiceA"
        
    },
        {question: 'which is NOT a way to store information using javascript?', 
        answers: {       
            choiceA: "Using an Array",
            choiceB: "Local Storage",
            choiceC: "Scarlett Johansson",
            choiceD: "Session Storage",
        },
        correctAnswer:"choiceC"
    },
        {question: 'which of the following will make something disappear?', 
        answers: {      
            choiceA: "window.prompt",
            choiceB: "Gerard Butler",
            choiceC: "function(erase)",
            choiceD: "(CSS) display:none.",
        },
        correctAnswer:"choiceD"
    }
];
var start = confirm("Push the button, Max!");
    if (start){
        quizStart();
    }
    else{
        alert("Wrong button")
        start();
    };


console.log(questionEl[0].question);

function quizStart(){
        timer();
    //question loop
    for (var i = 0; i < questionEl.length;i++){
        var q = questionEl[i];
        quiz.innerHTML = "<h2>" + questionEl[i].question + "</h2>";
        choiceA.innerHTML = q.answers.choiceA;
        choiceB.innerHTML = q.answers.choiceB;
        choiceC.innerHTML = q.answers.choiceC;
        choiceD.innerHTML = q.answers.choiceD;

        if(answerButton === q.correctAnswer)
        {score++};
    }
};

function showResults(){
    var scoreEl=document.createElement("h4");
    scoreEl.className ="results";
};


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

answerButton.addEventListener("click", showResults);
