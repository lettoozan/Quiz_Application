const quiz = new Quiz(questions);

function optionSelected(option) {
    clearInterval(counter);
    clearInterval(counterLine);
    ui.timer_text.textContent = "Cevaplandı: ";
    let answer = option.querySelector("span b").textContent;
    let question = quiz.getQuestion();

    if(question.checkAnswer(answer)) {
        quiz.correctAnswers += 1;
        option.classList.add("correct");
        option.insertAdjacentHTML("beforeend", ui.correctIcon);
    }else {
        option.classList.add("incorrect");
        option.insertAdjacentHTML("beforeend", ui.incorrectIcon);
    }
    for(let i = 0; i < ui.option_list.children.length; i++) {
        ui.option_list.children[i].classList.add("disabled");
    }
    ui.next_btn.classList.add("show");
}