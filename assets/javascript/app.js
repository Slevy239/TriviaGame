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


    var counter = 30;
    var currentQuestion = 0;
    var score = 0;
    var lost = 0;
    var timer;


    function loadQuestion() {
        var question = quizQuestions[currentQuestion].question;
        var choices = quizQuestions[currentQuestion].choices;
        console.log(question)
        console.log(choices);
        console.log(quizQuestions.length)
    }
    loadQuestion()
})



//     function timer () {
//         var counter = 16;

//         setInterval(function () {
//             counter--;
//             if (counter >= 0) {
//                 for (i = 0; i < poss.length; i++) {
//                 var AnswerButton = $("<button>");
//                 AnswerButton.text(poss[i]);
//                 span = document.getElementById("time-left");
//                 span.innerHTML = counter;
//                 $("#questions").text(questions);
//             }
//         }
//             if (counter === 0) {
//                 clearInterval(counter);
//                 // once counter reaches 0, refresh page and show results
//                 $("#answers").text(answers);
//             }
//         }, 1000);
//     };
//     timer();
   
// })