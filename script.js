let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },
    {
        "question": "Welche ist die Hauptstadt von Deutschland",
        "answer_1": "Kanada",
        "answer_2": "Barcelona",
        "answer_3": "Tokio",
        "answer_4": "Berlin",
        "right_answer": 4
    },
    {
        "question": "Wann wurde die Mauer in berlin gebaut(Jahr)",
        "answer_1": 1998,
        "answer_2": 1961,
        "answer_3": 2000,
        "answer_4": 1931,
        "right_answer": 2
    },
    {
        "question": "Wer hat Amerika entdeckt",
        "answer_1": "Christoph Kolumbus",
        "answer_2": "Jason Derulo",
        "answer_3": "El Capitan America",
        "answer_4": "Iron Man",
        "right_answer": 1
    },
    {
        "question": "wie viele Bundesländer hat Deutschland",
        "answer_1": 20,
        "answer_2": 13,
        "answer_3": 17,
        "answer_4": 16,
        "right_answer": 4
    },
];

let rightQuestions = 0;
let currentQuestion = 0;
let AUDIO_SUCCESS = new Audio ('mp3/succes.mp3');
let AUDIO_FAIL = new Audio ('mp3/wrong.mp3');
let = 0



function init() {
    document.getElementById('all-quiestions').innerHTML = questions.length;
    showQuestions();
}


function showQuestions() {

    if (currentQuestion >= questions.length) {
        // TODO: show en Screen
        document.getElementById('endScreen').style = ' ';
        document.getElementById('questionBody').style = 'display: none';
        document.getElementById('amount-of-questions').innerHTML = questions.length;
        document.getElementById('amount-right-questions').innerHTML = rightQuestions;
        document.getElementById('header-image').src = 'img/trophy-.png';
    } else {
        let percent = (currentQuestion + 1) / questions.length;
        percent = Math.round(percent * 100);

        document.getElementById('progress-bar').innerHTML = `${percent}%`;
        document.getElementById('progress-bar').style.width = `${percent}%`;
        let question = questions[currentQuestion];

        document.getElementById('question-number').innerHTML = currentQuestion + 1;
        document.getElementById('questiontext').innerHTML = question.question;
        document.getElementById('answer_1').innerHTML = question.answer_1;
        document.getElementById('answer_2').innerHTML = question.answer_2;
        document.getElementById('answer_3').innerHTML = question.answer_3;
        document.getElementById('answer_4').innerHTML = question.answer_4;
    }
}


function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);    // hier mit befehl ".slice" nehme ich nur das letzte Karacter von dem Sazt "answer_3"//
    let idOfRightAnswer = `answer_${question.right_answer}`;

    if (selectedQuestionNumber == question.right_answer) {  //Richtige Frage beantwortet//
        document.getElementById(selection).parentNode.classList.add('bg-success');    // hier greife ich mit ".parentNode" auf das übergeordnete div "<div class="card quiz-answer-card mb-2"//
        rightQuestions++;
        AUDIO_SUCCESS.play();
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        AUDIO_FAIL.play();
    }

    document.getElementById('next-button').disabled = false;                // mit befehl ".disabled = false" aktiviere mein button wieder.//
}


function nextQuestion() {
    currentQuestion++;   // z.B von 0 auf 1 von mein Global variable 
    document.getElementById('next-button').disabled = true;
    restAnswerButtons();
    showQuestions();
}


function restAnswerButtons(params) {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}


function restartGame() {
    document.getElementById('header-image').src = 'img/education.jpg';
    document.getElementById('endScreen').style = 'display: none '; // Screen ausblenden//
    document.getElementById('questionBody').style = ' ';  //questionBody wieder anzeigen//
    currentQuestion = 0;
    rightQuestions = 0;
    init();
}