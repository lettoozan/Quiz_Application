function UI() {
    this.btn_start = document.querySelector(".btn_start"),
    this.next_btn = document.querySelector(".next_btn"),
    this.quiz_box = document.querySelector(".quiz_box"),
    this.option_list = document.querySelector(".option_list"),
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