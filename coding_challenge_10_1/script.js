const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
    // This generates [0, 0, 0, 0]. More in the next section!
    answers: new Array(4).fill(0),

    registerNewAnswer() {
        let answer = prompt(`${this.question}\n ${this.options.join('\n')}`);
        answer === '' ? answer = NaN : answer = +answer;

        typeof answer === 'number' && answer >= 0 && answer < 4 && ++this.answers[answer];
        poll.displayResults('string');
    },

    displayResults(type = 'array') {
        if (type === 'array')
            console.log(this.answers);
        else if (type === 'string')
            console.log(`Poll results are: ${[...this.answers]}`);
    }
};

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));
poll.displayResults.call({ answers: [5, 2, 3] }, 'array');

