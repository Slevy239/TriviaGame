
$(document).ready(function () {

    var quizQuestions = [
        {
            question: "When did Phish start performing as a band?",
            choices: ["1985", "1990", "1983", "1993"],
            correctAnswer: "1983"

        },

        {
            question: "where did Phish orignally form?",
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
        counter = 10;
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
            var id = $(this).attr('id');

            if (id = correctAnswer) {
                $('#choices').html('');
                answered = true;
                $('#questions').append('the answer is: ' + quizQuestions[currentQuestion].correctAnswer);
                nextQuestion();
                correct++;
            }
            else {
                nextQuestion();
                incorrect++
            }
        })
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
                $('#correct').append('<h4>Correct Answers:' + correct + '</h4>')
                $('#incorrect').append('<h4>Correct Answers:' + incorrect + '</h4>');
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
            unanswered();
        } 
        else if (answered === true) {
            clearInterval(timer);
        } 
        else {
            counter--;
            $('#time-left').html(counter);
        }
    };
})