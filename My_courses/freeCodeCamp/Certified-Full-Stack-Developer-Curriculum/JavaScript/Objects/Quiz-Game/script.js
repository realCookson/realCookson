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
    randomQuestion = questionsArray[Math.floor(Math.random() * 5)];
    return randomQuestion;
}

let randomChoice;

function getRandomComputerChoice (choices) {
    if (randomQuestion == question1.question) {
        randomChoice = question1.choices[Math.floor(Math.random() * 5)];
        return randomChoice;
    
    } else if (randomQuestion == question2.question) {
        randomChoice = question2.choices[Math.floor(Math.random() * 5)];
        return randomChoice;
    
    } else if (randomQuestion == question3.question) {
        randomChoice = question3.choices[Math.floor(Math.random() * 5)];
        return randomChoice;
    
    } else if (randomQuestion == question4.question) {
        randomChoice = question4.choices[Math.floor(Math.random() * 5)];
        return randomChoice;
    
    } else if (randomQuestion == question5.question) {
        randomChoice = question5.choices[Math.floor(Math.random() * 5)];
        return randomChoice;
    
    } else {
        return `Error - if...else doesn't work in getRandomComputerChoice function`;
    }
}

function getResults (randomQuestion, randomChoice) {
    if (randomQuestion == question1.question) {
        if (randomChoice == question1.answer) {
            return `The computer's choice is correct!`;
        } else {
            return `The computer's choice is wrong. The correct answer is: ${question1.answer}`;
        }
    
    } else if (randomQuestion == question2.question) {
        if (randomChoice == question2.answer) {
            return `The computer's choice is correct!`;
        } else {
            return `The computer's choice is wrong. The correct answer is: ${question2.answer}`;
        }
    
    } else if (randomQuestion == question3.question) {
        if (randomChoice == question3.answer) {
            return `The computer's choice is correct!`;
        } else {
            return `The computer's choice is wrong. The correct answer is: ${question3.answer}`;
        }
    
    } else if (randomQuestion == question4.question) {
        if (randomChoice == question4.answer) {
            return `The computer's choice is correct!`;
        } else {
            return `The computer's choice is wrong. The correct answer is: ${question4.answer}`;
        }
    
    } else if (randomQuestion == question5.question) {
        if (randomChoice == question5.answer) {
            return `The computer's choice is correct!`;
        } else {
            return `The computer's choice is wrong. The correct answer is: ${question5.answer}`;
        }
    } else {
        return `Error - if...else doesn't work in getResults function`;
    }
}

console.log(getRandomQuestion());

console.log(getRandomComputerChoice());

console.log(getResults());
