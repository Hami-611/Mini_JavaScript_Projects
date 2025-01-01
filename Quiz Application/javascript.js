const quizData= [{
        question:"Which of the following is correct about JavaScript?",
        a:"JavaScript is an Object-Based language",
        b:"JavaScript is Assembly-language",
        c:"JavaScript is an Object-Oriented language",
        d:"JavaScript is a High-level language",
        correct:"a"
    },
    {
        question:"Which syntax is used to describe elements in CSS?",
        a:"Protectors",
        b:"Selectors",
        c:"Both Protectors and Selectors",
        d:"Protectors or Selectors",
        correct:"b"
    },
    {
        question:"What is JavaScript?",
        a:"JavaScript is a scripting language used to make the website interactive",
        b:"JavaScript is an assembly language used to make the website interactive",
        c:"JavaScript is a compiled language used to make the website interactive",
        d:" None of the mentioned",
        correct:"a"
    },
    {
        question:"Where is Client-side JavaScript code is embedded within HTML documents? ",
        a:"A URL that uses the special javascript:code",
        b:"A URL that uses the special javascript:protocol",
        c:"A URL that uses the special javascript:encoding",
        d:"A URL that uses the special javascript:stack",
        correct:"b"
    },
    {
        question:"Which of the following is not an example of a Shortcut Property?",
        a:"Border",
        b:"Font",
        c:"Text",
        d:"Value",
        correct:"d"
    },
    {
        question:"HTML uses ______?",
        a:"User-defined tags",
        b:"Predefined tags",
        c:"Fixed tags defined by language",
        d:"Tags for links only",
        correct:"c"
    },
    {
        question:"Which of the following is the default positioning elements with CSS?",
        a:"Relative",
        b:"Static",
        c:"Absolute",
        d:"Fixed",
        correct:"b"
    },
    {
        question: "Stricter type of HTML document is known as ______?",
        a:"DHTML",
        b:"XHTML",
        c:"XML",
        d:"HTML",
        correct:"b"
    }
];

const userSelected = {}

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const labelEls = document.querySelectorAll('.op_label');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const submitBtn = document.getElementById('submit');
const reloadBtn = document.getElementById('reload');
const scoreEle = document.getElementById('score');
const resultEle = document.getElementById('result');
let currentQtn = 0;
let score = 0;
let submitted = false;

loadQtn();

function loadQtn() {
    const currentQtnData = quizData[currentQtn];
    questionEl.innerText = currentQtnData.question;
    a_text.innerText = currentQtnData.a;
    b_text.innerText = currentQtnData.b;
    c_text.innerText = currentQtnData.c;
    d_text.innerText = currentQtnData.d;
    if (submitted) {
        let actualAns = currentQtnData.correct;
        let userAns = userSelected[currentQtn];
        labelEls.forEach(labelEl => {
            labelEl.classList.remove("correct");
            labelEl.classList.remove("wrong");


        });
        if (actualAns == userAns) {
            let correct = actualAns + "_text";
            document.getElementById(correct).classList.add("correct")

        }
        else {
            let correct = actualAns + "_text";
            let wrong = userAns + "_text";

            document.getElementById(correct).classList.add("correct")

            document.getElementById(wrong).classList.add("wrong")

        }
    }
    else {
        deselectAnswer();
    }
    if (currentQtn == quizData.length - 1) {
        nextBtn.style.display = "none";
        if (submitted) {
            reloadBtn.style.display = "block";
            submitBtn.style.display = "none";
        }
        else {
            reloadBtn.style.display = "none";
            submitBtn.style.display = "block";


        }
    }
    if (userSelected[currentQtn]) {
        let selected = userSelected[currentQtn];
        document.getElementById(selected).checked = true
    }

}

function deselectAnswer() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
            userSelected[currentQtn] = answer

        }
    });

    return answer;
}
prevBtn.addEventListener('click', () => {
    getSelected()
    if (currentQtn > 0) {
        currentQtn--;
        if (currentQtn == 0) {
            prevBtn.disabled = true;
            prevBtn.classList.add('disabled')
        }
        loadQtn();
    }


})

nextBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (!submitted) {
        if (answer) {
            if (answer === quizData[currentQtn].correct) {
                score++;
            }
            currentQtn++;
            if (currentQtn < quizData.length) {
                loadQtn();
                prevBtn.disabled = false;
                prevBtn.classList.remove('disabled')
            }
        }
    }
    else {
        currentQtn++;
        loadQtn()
    }
})
submitBtn.addEventListener('click', () => {
    if (getSelected()) {
        submitted = true
        quiz.style.display = "none";
        resultEle.style.display = "block";
        scoreEle.innerHTML = `${score}/${quizData.length} questions answered correctly`


    }


})

function loadAnswers() {
    currentQtn = 0
    quiz.style.display = "block";
    resultEle.style.display = "none";
    answerEls.forEach(answerEl => {
        answerEl.disabled = true;

    });
    submitBtn.style.display = "none";
    nextBtn.style.display = "block";
    loadQtn();

}