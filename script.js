// ==========================
// DARK MODE
// ==========================

const darkModeBtn =
document.getElementById("darkModeToggle");

darkModeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

});


// ==========================
// QUIZ
// ==========================

const quizQuestions = [

    {
        question:
        "O que é agricultura sustentável?",

        options: [
            "Uso excessivo de agrotóxicos",
            "Equilíbrio entre produção e meio ambiente",
            "Desmatamento"
        ],

        answer: 1
    },

    {
        question:
        "Qual prática ajuda o meio ambiente?",

        options: [
            "Queimadas",
            "Plantio direto",
            "Poluição"
        ],

        answer: 1
    }

];

const quizContainer =
document.getElementById("quiz-container");

quizQuestions.forEach((q, index) => {

    const div =
    document.createElement("div");

    div.innerHTML = `
        <p><strong>${q.question}</strong></p>

        ${q.options.map((option, i) => `
            <label>
                <input
                    type="radio"
                    name="question${index}"
                    value="${i}"
                >
                ${option}
            </label>
            <br>
        `).join("")}
    `;

    quizContainer.appendChild(div);

});


// BOTÃO DO QUIZ
document.getElementById("quiz-submit")
.addEventListener("click", () => {

    let score = 0;

    quizQuestions.forEach((q, index) => {

        const selected =
        document.querySelector(
            `input[name="question${index}"]:checked`
        );

        if(
            selected &&
            parseInt(selected.value) === q.answer
        ){
            score++;
        }

    });

    document.getElementById("quiz-result")
    .textContent =
    `Você acertou ${score} de ${quizQuestions.length} perguntas!`;

});


// ==========================
// CALCULADORA
// ==========================

document.getElementById("calcForm")
.addEventListener("submit", (e) => {

    e.preventDefault();

    const hectares =
    parseFloat(
        document.getElementById("hectares").value
    );

    const fertilizante =
    parseFloat(
        document.getElementById("fertilizante").value
    );

    const impacto =
    (fertilizante / hectares).toFixed(2);

    document.getElementById("calcResult")
    .textContent =
    `Impacto estimado: ${impacto} kg por hectare.`;

});


// ==========================
// FORMULÁRIO
// ==========================

document.getElementById("contactForm")
.addEventListener("submit", (e) => {

    e.preventDefault();

    document.getElementById("contactMessage")
    .textContent =
    "Mensagem enviada com sucesso!";

    e.target.reset();

});


// ==========================
// SCROLL SUAVE
// ==========================

document.querySelectorAll("nav a")
.forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(
            this.getAttribute("href")
        ).scrollIntoView({
            behavior: "smooth"
        });

    });

});
