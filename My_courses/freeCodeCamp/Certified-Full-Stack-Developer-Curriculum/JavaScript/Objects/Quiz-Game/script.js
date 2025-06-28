const questions = [] ;

const question1 = {
    category: `closed question`,
    question: `What is the capital of Poland?`,
    choices: [`Łódź`, `Warsaw`, `Gdańsk`, `Kraków`],
    answer: `Warsaw`,
};

const question2 = {
    category: `closed question`,
    question: `What is the capital of France?`,
    choices: [`Rennes`, `Marseille`, `Paris`, `Lyon`],
    answer: `Paris`,
};

const question3 = {
    category: `closed question`,
    question: `What is the capital of Spain?`,
    choices: [`Toledo`, `Madrid`, `Valencia`, `Bilbao`],
    answer: `Madrid`,
};

const question4 = {
    category: `closed question`,
    question: `What is the capital of Deutschland?`,
    choices: [`Berlin`, `Hamburg`, `Frankfurt`, `Monachium`],
    answer: `Berlin`,
};

const question5 = {
    category: `open question`,
    question: `With how many countries Poland is neighboring?`,
    choices: [5, 6, 7, 8],
    answer: 7,
};

questions.push(question1, question2, question3, question4, question5);

let randomQuestion;

function getRandomQuestion (questions) {
    const questionsArray = [question1.question, question2.question, question3.question, question4.question, question5.question];
    randomQuestion = questionsArray[Math.round(Math.random() * 5)];
    return randomQuestion;
}

let randomChoice;

function getRandomComputerChoice (choices) {
    if (randomQuestion == question1.question) {
        randomChoice = question1.choices[Math.round(Math.random() * 5)];
        return randomChoice;
    } else {}

    if (randomQuestion == question2.question) {
        randomChoice = question2.choices[Math.round(Math.random() * 5)];
        return randomChoice;
    } else {}

    if (randomQuestion == question3.question) {
        randomChoice = question3.choices[Math.round(Math.random() * 5)];
        return randomChoice;
    } else {}

    if (randomQuestion == question4.question) {
        randomChoice = question4.choices[Math.round(Math.random() * 5)];
        return randomChoice;
    } else {}

    if (randomQuestion == question5.question) {
        randomChoice = question5.choices[Math.round(Math.random() * 5)];
        return randomChoice;
    } else {}
}

let result;

function getResults (randomQuestion, randomChoice) {
    if () {

        return `The computer's choice is correct!`;
    } else {
        return `The computer's choice is wrong. The correct answer is: ${}`
    }
}

console.log(getRandomQuestion());

console.log(getRandomComputerChoice());

console.log(getResults());

