
$(document).ready(function () {

    var quizQuestions = [ //question and answer array
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

        {
            question: "Who directed E.T.?",
            choices: ["Stanley Kubrick", "James Cameron", " Tim Burton", "Steven Spielberg"],
            correctAnswer: "Steven Spielberg"
        },

        {
            question: "In what sport is a shuttlecock used?",
            choices: ["Table Tennis", "Badminton", "Rugby", "Crickey"],
            correctAnswer: "Badminton"
        },

        {
            question: "What color is the circle on the Japanese flag?",
            choices: ["Red", "White", "Yellow", "Black"],
            correctAnswer: "Red"
        },

        {
            question: "How many countries does the United States border?",
            choices: ["1", "2", "3", "4"],
            correctAnswer: "2"
        },

        {
            question: "What is the capital of Pennsylvania?",
            choices: ["Philadelphia", "Pittsburgh", "Gettysburg", "Harrisburg"],
            correctAnswer: "Harrisburg"
        },

        {
            question: "When was the Declaration of Independence signed?",
            choices: ["1770", "1801", "1776", "1769"],
            correctAnswer: "1776"
        }
    ]

    // variables
    var counter = 10;
    var currentQuestion = 0;
    var correct = 0;
    var incorrect = 0;
    var timer;
    var correctAnswer;

    //start game function removes button, resets score and loads first question

    function startGame() {
        $('#start').remove();
        currentQuestion = 0;
        correct = 0;
        incorrect = 0;
        loadQuestion();
    }

    //loads random question, once start button is clicked
    //gives 10 second counter for each question.
    // loads choices and gives the id the value of the answers index
    function loadQuestion() {
        answered = false;
        counter = 16;
        timer = setInterval(timer, 1000);
        correctAnswer = quizQuestions[currentQuestion].correctAnswer;
        var question = quizQuestions[currentQuestion].question;
        var correctAnswer = quizQuestions[currentQuestion].correctAnswer;
        $('#questions').text(question);
        for (var i = 0; i < 4; i++) {
            var newChoices = quizQuestions[currentQuestion].choices[i];
            $('#choices').append('<h4 id=' + i + '>' + newChoices + '</h4>')
        }


        //when the h4 tag is clicked, the validity is checked with the correct answer
        //it removes the choices
        //adds score if it was right or wrong and loads the respective function
        $("h4").click(function () {
            if ($(this).text() === correctAnswer) {
                $('#choices').text('');
                answered = true;
                correct++;
                $('#questions').append('<div>');
                $('#questions').text("Correct")
                setTimeout(rightAnswer, 1000 * 3);

            }
            else {
                incorrect++

                $('#questions').append('<div>');
                $('#questions').text('WRONG!, the answer was: ' + quizQuestions[currentQuestion].correctAnswer);
                $('#choices').html('')

                setTimeout(wrongAnswer, 1000 * 5);
            }
        })
    }

    function rightAnswer() {
        //loads next question

        $('#choices').html('')
        nextQuestion()
    }

    function wrongAnswer() {
        //shows correct answer and loads next question  
        $('#choices').html('')

        nextQuestion()
    }


    //goes to next question
    //resets timer
    //if there are still questions left, it will go to the next question
    //if all questions are asked, results will be presented
    function nextQuestion() {
        var questionTotal = quizQuestions.length;
        currentQuestion++;
        answered = false;
        if (currentQuestion < quizQuestions.length) {
            loadQuestion()
        }
        else {
            $('#questions').remove();
            $('#time-left').remove();
            $('#correct').append('<h4>Your Score is: ' + correct + ' out of ' + questionTotal + ' questions!</h4>');

        }
    }

    //on click function to start game
    $('#start').on("click", function () {
        $('#start');
        startGame()
    })

    // timer function
    //when it hits 0, interval will be stopped,
    //otherwise, the clock will continue to countdown
    function timer() {
        if (counter === 0) {
            answered = true;
            clearInterval(timer);
            $('#questions').html("WRONG");
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