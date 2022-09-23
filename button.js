const ui = new UI();

ui.btn_start.addEventListener("click", function() {
    ui.quiz_box.classList.add("active");
    ui.showquestion(quiz.getQuestion());
    ui.showQuestionNumber(quiz.questionIndex + 1, quiz.questions.length);
    ui.next_btn.classList.remove("show");
})
ui.next_btn.addEventListener("click", function() {
    if(quiz.questions.length != quiz.questionIndex + 1) {
        quiz.questionIndex += 1;
        ui.showquestion(quiz.getQuestion());
        ui.showQuestionNumber(quiz.questionIndex + 1, quiz.questions.length);
        ui.next_btn.classList.remove("show");
    }else {
        console.log("Quiz Bitti");
    }
});