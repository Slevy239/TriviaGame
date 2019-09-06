$(document).ready(function () {

    var questions = ["why?", ]
    var poss = ["why not?", "ok", "2", "6"]
    var answers = ["why not?"]



    function timer () {
        var counter = 15;

        setInterval(function () {
            counter--;
            if (counter >= 0) {
                for (i = 0; i < poss.length; i++) {
                var AnswerButton = $("<button>")
                AnswerButton.text(poss[i]);
                span = document.getElementById("time-left");
                span.innerHTML = counter;
                $("#questions").text(questions);
            }
        }
            if (counter === 0) {
                clearInterval(counter);
                // once counter reaches 0, refresh page and show results
                $("#answers").text(answers);
            }
        }, 1000);
    };
    timer();
   
})