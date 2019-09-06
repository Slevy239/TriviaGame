$(document).ready(function () {

    var questions = ["why?"]
    var answers = ["why not?"]



    function timer () {
        var counter = 5;

        setInterval(function () {
            counter--;
            if (counter >= 0) {
                span = document.getElementById("time-left");
                span.innerHTML = counter;
                $("#questions").text(questions);
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