let counter;
function startTimer(time) {
    counter = setInterval(timer, 1000);

    function timer() {
        ui.timer_second.textContent = time;
        time --;
        ui.timer_text.textContent = "Kalan Süre: ";

        if(time < 0) {
            clearInterval(counter);

            ui.timer_text.textContent = "Süre Bitti: ";
            let answer = quiz.getQuestion().correctAnswer;

            for(let option of ui.option_list.children) {
                if(option.querySelector("span b").textContent == answer) {
                    option.classList.add("correct");
                    option.insertAdjacentHTML("beforeend", ui.correctIcon);
                }
                option.classList.add("disabled");
            }
            ui.next_btn.classList.add("show");
        }
    }
}
let counterLine;
function startTimerLine() {
    let line_width = 0;
    counterLine = setInterval(timer, 20);

    function timer() {
        line_width += 1;
        ui.time_line.style.width = line_width + "px";

        if(line_width > 548) {
            clearInterval(counterLine);
        }
    }
}