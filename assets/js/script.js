var quiz = document.getElementById("question-container");
var timerEl = document.getElementById("timer");
var scoreEl = document.getElementById('scoring-container');
var score = 0;
var questionIndex = 0;
//array of questions
var questionArr= [
    {
        question: 'who created javascript?', 
        answers: { 
            choiceA: "Douglas Crockford",
            choiceB: "Sheryl Sandberg",
            choiceC: "Brendan Eich",
            choiceD: "Jennifer Anniston"
            },
        correctAnswer: "Brendan Eich"   
    },
        {question: 'what is a variable in javascript?', 
        answers: {
            choiceA:"a method of storing information",
            choiceB:"something to represent unknown information",
            choiceC:"type of headache",
            choiceD:"Eva Mendes",
        },
        correctAnswer: "a method of storing information"
        
    },
        {question: 'which is NOT a way to store information using javascript?', 
        answers: {       
            choiceA: "Using an Array",
            choiceB: "Local Storage",
            choiceC: "Scarlett Johansson",
            choiceD: "Session Storage",
        },
        correctAnswer:"Scarlett Johansson"
    },
        {question: 'which of the following will make something disappear?', 
        answers: {      
            choiceA: "window.prompt",
            choiceB: "Gerard Butler",
            choiceC: "function(erase)",
            choiceD: "(CSS) display:none.",
        },
        correctAnswer:"(CSS) display:none."
    }
];

var answerA = questionArr[questionIndex].answers.choiceA;
var answerB = questionArr[questionIndex].answers.choiceB;
var answerC = questionArr[questionIndex].answers.choiceC;
var answerD = questionArr[questionIndex].answers.choiceD;

var a = document.getElementById("choiceA").addEventListener("click", ()=> auditAnswer(answerA));
var b = document.getElementById("choiceB").addEventListener("click", ()=> auditAnswer(answerB));
var c = document.getElementById("choiceC").addEventListener("click", ()=> auditAnswer(answerC));
var d = document.getElementById("choiceD").addEventListener("click", ()=> auditAnswer(answerD));

var start = confirm("Push the button, Max!");
    if (start){
        quizStart();
    }
    else{
        alert("Wrong button")
        start();
    };


var auditAnswer = function(userSuppliedAnswer){
    var correctAnswer = questionArr[questionIndex].correctAnswer;
    if(userSuppliedAnswer === correctAnswer){
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
    // for (var i = 0; i < questionArr.length;i++){
        var q = questionArr[questionIndex];
        quiz.innerHTML = "<h2>" + questionArr[questionIndex].question + "</h2>";
        choiceA.innerHTML = q.answers.choiceA;
        choiceB.innerHTML = q.answers.choiceB;
        choiceC.innerHTML = q.answers.choiceC;
        choiceD.innerHTML = q.answers.choiceD;
    }
       
    console.log(questionArr[questionIndex].question);
    // };

function nextQuestion(){
    questionIndex++;
    answerA = questionArr[questionIndex].answers.choiceA;
    answerB = questionArr[questionIndex].answers.choiceB;
    answerC = questionArr[questionIndex].answers.choiceC;
    answerD = questionArr[questionIndex].answers.choiceD;
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

