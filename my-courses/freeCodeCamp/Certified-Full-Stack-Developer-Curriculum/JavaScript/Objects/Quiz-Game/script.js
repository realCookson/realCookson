const questions = [] ;

const question1 = {
    category: `closed question`,
    question: `What is the capital of Poland?`,
    choices: [`Łódź`, `Warsaw`, `Gdańsk`],
    answer: `Warsaw`,
};

const question2 = {
    category: `closed question`,
    question: `What is the capital of France?`,
    choices: [`Rennes`, `Marseille`, `Paris`],
    answer: `Paris`,
};

const question3 = {
    category: `closed question`,
    question: `What is the capital of Spain?`,
    choices: [`Toledo`, `Madrid`, `Valencia`],
    answer: `Madrid`,
};

const question4 = {
    category: `closed question`,
    question: `What is the capital of Deutschland?`,
    choices: [`Berlin`, `Hamburg`, `Frankfurt`],
    answer: `Berlin`,
};

const question5 = {
    category: `open question`,
    question: `With how many countries Poland is neighboring?`,
    choices: [`5`, `6`, `7`],
    answer: `7`,
};

questions.push(question1, question2, question3, question4, question5);

let randomQuestion;

// 8. You should have a function named getRandomQuestion that takes an array of questions as a parameter and returns a random question object from the array.
function getRandomQuestion (questions) {
    randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    return randomQuestion;
}

console.log(getRandomQuestion(questions));

let randomChoice;

// 9. You should have a function named getRandomComputerChoice that takes the array of the available choices as a parameter, and returns a random answer to the selected question.
function getRandomComputerChoice (choices) {
    randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}

console.log(getRandomComputerChoice(randomQuestion.choices));

// 11. Your getResults function should take the question object as the first parameter and the computer's choice as the second parameter.
function getResults (randomQuestion, randomChoice) {
    if (randomChoice === randomQuestion.answer) {
        return `The computer's choice is correct!`;
    } else {
        return `The computer's choice is wrong. The correct answer is: ${randomQuestion.answer}`;
    }
}

console.log(getResults(randomQuestion, randomChoice));
