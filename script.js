// DARK MODE
const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// SCROLL SUAVE
const explorarBtn = document.getElementById("explorarBtn");

explorarBtn.addEventListener("click", () => {
  document
    .getElementById("sobre")
    .scrollIntoView({
      behavior: "smooth"
    });
});

// CALCULADORA
function calcularImpacto() {

  const agua =
    Number(document.getElementById("agua").value);

  const energia =
    Number(document.getElementById("energia").value);

  const resultado =
    document.getElementById("resultado");

  // validação
  if (agua <= 0 || energia <= 0) {

    resultado.innerHTML =
      "Digite valores válidos.";

    resultado.style.color = "red";

    return;
  }

  // cálculo simples
  const impacto =
    agua * 0.4 + energia * 0.6;

  // resultado
  if (impacto < 100) {

    resultado.innerHTML =
      "🌱 Excelente sustentabilidade!";

    resultado.style.color = "green";

  } else if (impacto < 300) {

    resultado.innerHTML =
      "⚠ Impacto moderado.";

    resultado.style.color = "orange";

  } else {

    resultado.innerHTML =
      "❌ Alto impacto ambiental.";

    resultado.style.color = "red";
  }
}

// QUIZ
function respostaQuiz(resposta) {

  const resultadoQuiz =
    document.getElementById("quizResultado");

  if (resposta === "certa") {

    resultadoQuiz.innerHTML =
      "✅ Resposta correta!";

    resultadoQuiz.style.color = "green";

  } else {

    resultadoQuiz.innerHTML =
      "❌ Resposta incorreta.";

    resultadoQuiz.style.color = "red";
  }
}

// FORMULÁRIO
const form =
  document.getElementById("formContato");

form.addEventListener("submit", (event) => {

  event.preventDefault();

  const nome =
    document.getElementById("nome").value;

  const email =
    document.getElementById("email").value;

  const mensagem =
    document.getElementById("mensagem").value;

  const mensagemForm =
    document.getElementById("mensagemForm");

  // validações
  if (
    nome === "" ||
    email === "" ||
    mensagem === ""
  ) {

    mensagemForm.innerHTML =
      "Preencha todos os campos.";

    mensagemForm.style.color = "red";

    return;
  }

  // regex email
  const regex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!regex.test(email)) {

    mensagemForm.innerHTML =
      "Digite um email válido.";

    mensagemForm.style.color = "red";

    return;
  }

  mensagemForm.innerHTML =
    "✅ Mensagem enviada com sucesso!";

  mensagemForm.style.color = "green";

  form.reset();
});
