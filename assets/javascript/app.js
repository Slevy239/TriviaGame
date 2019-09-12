
$(document).ready(function () {

    var quizQuestions = [
        {
            question: "When did Phish start performing as a band?",
            choices: ["1985", "1990", "1983", "1993"],
            correctAnswer: "1983"

        },

        {
            question: "Where did Phish orignally form?",
            choices: ["Colorado", "New Jersey", "Vermont", "Pennsylvania"],
            correctAnswer: "Vermont"

        },

        {
            question: "Who is the Eagles Starting Quarterback?",
            choices: ["John Elway", "Tom Brady", "Joe Namath", "Carson Wentz"],
            correctAnswer: "Carson Wentz"

        },

        {
            question: "What planet's days are longer than it's years?",
            choices: ["Mercury", "Neptune", "Pluto", "Earth"],
            correctAnswer: "Mercury"

        },
    ]


    var counter = 10;
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
    }

    //loads random question, once start button is clicked
    //gives 10 second counter for each question.
    function loadQuestion() {
        answered = false;
        counter = 11;
        timer = setInterval(timer, 1000);
        correct = quizQuestions[currentQuestion].correctAnswer;
        var question = quizQuestions[currentQuestion].question;
        var correctAnswer = quizQuestions[currentQuestion].correctAnswer;
        $('#questions').text(question);
        for (var i = 0; i < 4; i++) {
            var newChoices = quizQuestions[currentQuestion].choices[i];
            $('#choices').append('<h4 id=' + i + '>' + newChoices + '</h4>')
        }

        $("h4").click(function () {
            
            if ($(this).text() === correctAnswer) {
                $('#choices').text('');
                answered = true;
                correct++;
                rightAnswer()
            }
            else {
                incorrect++
                wrongAnswer();
            }
        })
    }

    function rightAnswer() {
        //show the answer and score for 3 seconds then move to next question
            $('#questions').html('Correct answer!')
            $('#choices').html('')
            nextQuestion()

    }

    function wrongAnswer() {
            $('#questions').html('the answer is: ' + quizQuestions[currentQuestion].correctAnswer)
            $('#choices').html('')

        nextQuestion()
    }





    function nextQuestion() {
        currentQuestion++;
        answered = false;
        if (currentQuestion < quizQuestions.length) {
            loadQuestion()
        }
        else {
            $('#questions').remove();
            $('#time-left').remove();
            $('#correct').append('<h4>Correct Answers: ' + correct + '</h4>')
            $('#incorrect').append('<h4>Incorrect Answers: ' + incorrect + '</h4>');
        }
    }



    $('#start').on("click", function () {
        $('#start');
        startGame()
    })


    function timer() {
        if (counter === 0) {
            answered = true;
            clearInterval(timer);
            $('#questions').html("correct");
        }
        else if (answered === true) {
            clearInterval(timer);
        }
        else {
            counter--;
            $('#time-left').html(counter + ' Seconds left!');
        }
    };
})