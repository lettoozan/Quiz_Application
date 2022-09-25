const ui = new UI();

ui.btn_start.addEventListener("click", function() {
    ui.quiz_box.classList.add("active");
    startTimer(10);
    startTimerLine();
    ui.showquestion(quiz.getQuestion());
    ui.showQuestionNumber(quiz.questionIndex + 1, quiz.questions.length);
    ui.next_btn.classList.remove("show");
})
ui.next_btn.addEventListener("click", function() {
    if(quiz.questions.length != quiz.questionIndex + 1) {
        quiz.questionIndex += 1;
        clearInterval(counter);
        clearInterval(counterLine);
        startTimer(10);
        startTimerLine();
        ui.showquestion(quiz.getQuestion());
        ui.showQuestionNumber(quiz.questionIndex + 1, quiz.questions.length);
        ui.next_btn.classList.remove("show");
    }else {
        clearInterval(counter);
        clearInterval(counterLine);
        ui.score_box.classList.add("active");
        ui.quiz_box.classList.remove("active");
        ui.showScore(quiz.questions.length, quiz.correctAnswers);
    }
});
ui.btn_quit.addEventListener("click", function() {
    window.location.reload();
});
ui.btn_replay.addEventListener("click", function() {
    quiz.questionIndex = 0;
    quiz.correctAnswers = 0;
    ui.btn_start.click();
    ui.score_box.classList.remove("active");
});