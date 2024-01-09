function Question(questionText, answersOptions, correctAnswer) {
    this.questionText = questionText;
    this.answersOptions = answersOptions;
    this.correctAnswer = correctAnswer;
}

Question.prototype.checkAnswer = function(answer) {
    return answer === this.correctAnswer
}

let questions = [
    new Question("1-Hangisi JavaScript paket yönetim uygulamasıdır?", {a: ": Node.Js", b: ": Typescript", c: ": NPM", d: ": Nuget"}, "c"),
    new Question("2-Hangisi frontend kapsamında değerlendirilmez?", {a: ": Css", b: ": HTML", c: ": JavaScript", d: ": SQL"}, "d"),
    new Question("3-Hangisi backend kapsamında değerlendirilir?", {a: ": Node.Js", b: ": Typescript", c: ": Angular", d: ": React"}, "a"),
    new Question("4-Hangisi JavaScript programlama dilini kullanmaz?", {a: ": React", b: ": Angular", c: ": Vuejs", d: "Asp.net"}, "d"),
    new Question("5-Test?", {a: ": test", b: ": test", c: ": test", d: "test"}, "a")
];