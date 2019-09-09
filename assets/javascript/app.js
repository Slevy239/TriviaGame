$(document).ready(function () {

    var quizQuestions = [
        {
            question: "Why",
            choices: ["why not", "why not", "why not"],
            correctAnswer: "Why not"
        },

        {
            question: "When did Phish start performing as a band?",
            choices: ["1985", "1990", "1983", "1993"],
            correctAnswer: "1989"

        },

        {
            question: "where did Phish orignally form?",
            choices: ["Colorado", "New Jersey", "Vermont", "Pennsylvania"],
            correctAnswer: "Vermont"

        }
    ]


    var count = 30;
    var currentQuestion = 0;
    var timer;


    function loadQuestion() {
        count = 30;
        timer = setInterval(timer, 1000)
        var question = quizQuestions[currentQuestion].question;
        var choices = quizQuestions[currentQuestion].choices;

        $('#questions').html('<h4>' + question + '</h4>');
        $('#poss').html(choices);


        console.log(question)
        console.log(choices);
        console.log(quizQuestions.length)
    }
    loadQuestion();



    function loadChoices(choices) {
        var result = '';

        for (let i = 0; i < choices.length; i++) {
            result += '<p class="choice">'+ choices[i] + '</p>'

        }
        return result;
    }
    loadChoices();
    
    
    
    function timer () {
            count--;
            $('#time-left').html(count)

            if (count === 0) {
                clearTimer();
            }
}



    function clearTimer () {
        clearInterval(timer)
    }
    });
