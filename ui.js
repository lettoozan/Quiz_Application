function UI() {
    this.btn_start = document.querySelector(".btn_start"),
    this.next_btn = document.querySelector(".next_btn"),
    this.btn_replay = document.querySelector(".btn_replay"),
    this.btn_quit = document.querySelector(".btn_quit"),
    this.quiz_box = document.querySelector(".quiz_box"),
    this.score_box = document.querySelector(".score_box"),
    this.option_list = document.querySelector(".option_list"),
    this.timer_text = document.querySelector(".timer_text"),
    this.timer_second = document.querySelector(".timer_second"),
    this.time_line = document.querySelector(".time_line"),
    this.correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>',
    this.incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>'
};
UI.prototype.showquestion = function(soru) {
    let question = `<span>${soru.questionText}</span>`;
    let options = '';

    for(let answer in soru.answersOptions) {
        options += 
        `
            <div class="option">
            <span><b>${answer}</b>${soru.answersOptions[answer]}</span>
            </div>
        `;
    }

    document.querySelector(".question_text").innerHTML = question;
    this.option_list.innerHTML = options;

    const option = this.option_list.querySelectorAll(".option");

    for(let opt of option) {
        opt.setAttribute("onclick" , "optionSelected(this)")
    }
}
UI.prototype.showQuestionNumber = function(questionNumber, sumOfQuestion) {
    let tag = `<span class="badge bg-warning">${questionNumber} / ${sumOfQuestion}</span>`;
    document.querySelector(".quiz_box .question_index").innerHTML = tag;
}
UI.prototype.showScore = function(sumOfQuestion, correctAnswer) {
    let tag = `Toplam ${sumOfQuestion} sorudan ${correctAnswer} doğru cevap verdiniz.`;
    document.querySelector(".score_box .score_text").innerHTML = tag;
}