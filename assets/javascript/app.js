  
$(document).ready(function () {

    var quizQuestions = [
        {
            question: "When did Phish start performing as a band?",
            choices: ["1985", "1990", "1983", "1993"],
            correctAnswer: "1983"

        },
        {
            question: "Why",
            choices: ["why not", "why not", "why not", "ok"],
            correctAnswer: "Why not"   
        },


        {
            question: "where did Phish orignally form?",
            choices: ["Colorado", "New Jersey", "Vermont", "Pennsylvania"],
            correctAnswer: "Vermont"

        }
    ]


    var counter = 30;
    var currentQuestion = 0;
    var correct = 0;
    var incorrect = 0;
    var timer;
    var correctAnswer;

    function startGame() {
        $('#start').remove();
        currentQuestion = 0;
        correct = 0;
        incorrect = 0;
        loadQuestion();
        timer();
    }


    function loadQuestion() {
        answered = false;
        var correctAnswer = quizQuestions[currentQuestion].correctAnswer;
        counter = 30;
        timer = setInterval(timer, 1000);
        correct = quizQuestions[currentQuestion].correctAnswer;
        var question = quizQuestions[currentQuestion].question;
        $('#questions').html(question);
        for (var i = 0; i < 4; i++) {
            var newChoices = quizQuestions[currentQuestion].choices[i];
            $('#choices').append('<h4 id=' + i + '>' + newChoices + '</h4>')
        }
        
        $("h4").click(function () {
            var id = $(this).attr('id');
            if (id = correctAnswer) {
                answered = true;
                $('#questions').html('the answer is: ' + quizQuestions[currentQuestion].correctAnswer);
                correctAnswer();
                userAnswer();
            }
        })
    }
    
    function correctAnswer() {
        correct++;
        nextQuestion();

    }

    function incorrectanswer() {
        incorrect++;
        nextQuestion()

    }

    function unanswered() {
        if (counter <= 0) {
        incorrect++;
        nextQuestion();
        }
    }

    function nextQuestion() {
        currentQuestion++;
    }

    function userAnswer() {
        if (id === correctAnswer) {
            correctAnswer();
        } else {
            incorrectanswer();
        }
    }


    function results() {
        if (currentQuestion > 5) {
            $('#correct').html(correct);
            $('#correct').html(incorrect);

        }
    }results();

    $('#start').on("click", function () {
        $('#start');
        startGame()
    })
    
    
    function timer() {
        if (counter === 0) {
            answered = true;
            clearInterval(timer);
            $('#questions').html("correct");
            unanswered();
        } else if (answered === true) {
            clearInterval(timer);
        } else {
            counter--;
            $('#time-left').html(counter);
        }
    };
})
   