var quiz = document.getElementById("question-container");
var timerEl = document.getElementById("timer");
var scoreEl = document.getElementById('scoring-container');
var score = 0;
var questionIndex = 0;
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

var response = function(){
    //add id as variable
    var selection;
        switch(selection){
            case a:
                selection = choiceA;
                auditAnswer(selection);
                break;
            case b:
                selection = choiceB;
                auditAnswer(selection);
                break;
            case c:
                selection = choiceC;
                auditAnswer(selection);
                break;
            case d:
                selection = choiceD;
                auditAnswer(selection);
        }
        console.log(selection);
};

var auditAnswer = function(selection){
    var q = questionEl[questionIndex];
    if(selection === q.correctAnswer){
        score++;
        var score= document.createElement("h4");
        score.className = "results";
        score.innerHTML = "Correct!";
        scoreEl.appendChild(score)
    }
    else{
        var score= document.createElement("h4");
        score.className = "results";
        score.innerHTML = "Wrong!";
        scoreEl.appendChild(score)
    }
    nextQuestion();
};


function quizStart(){
        timer();

    //question loop
    for (var i = 0; i < questionEl.length;i++){
        var q = questionEl[questionIndex];
        quiz.innerHTML = "<h2>" + questionEl[questionIndex].question + "</h2>";
        choiceA.innerHTML = q.answers.choiceA;
        choiceB.innerHTML = q.answers.choiceB;
        choiceC.innerHTML = q.answers.choiceC;
        choiceD.innerHTML = q.answers.choiceD;
    }
       
    console.log(questionEl[questionIndex].question);
    };

function nextQuestion(){
    questionIndex++;
    quizStart();
}

function timer(){
    var timeLeft = 75;
    var timeInterval = setInterval(function(){
        timerEl.textContent = timeLeft;
        timeLeft--;
        if (timeLeft===0){
            timerEl.textContent="0";
            clearInterval(timeInterval);
        };
    }, 1000);
};

var a = document.getElementById("choiceA").addEventListener("click", response);
var b = document.getElementById("choiceB").addEventListener("click", response);
var c = document.getElementById("choiceC").addEventListener("click", response);
var d = document.getElementById("choiceD").addEventListener("click", response);
