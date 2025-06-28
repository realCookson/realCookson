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

function getRandomQuestion (question) {
    questionArray = [question1.question, question2.question, question3.question, question4.question, question5.question];
    randomQuestion = questionArray[Math.round(Math.random() * 5)];
    return randomQuestion;
}

function getRandomComputerChoice (choices) {
    
}

function getResults () {

}

console.log(getRandomQuestion());
