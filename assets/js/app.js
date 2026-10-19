const architectureOptions = {
  monolith: {
    index: "01",
    title: "Todo en una sola unidad.",
    description:
      "La interfaz, la lógica y los datos forman una aplicación integrada. Un cambio puede afectar al sistema completo.",
    tag: '<i class="bi bi-link-45deg" aria-hidden="true"></i> COMPONENTES ACOPLADOS',
    label:
      "Arquitectura monolítica: interfaz, lógica y datos integrados en un solo bloque",
  },
  decoupled: {
    index: "02",
    title: "Componentes independientes.",
    description:
      "La interfaz, la lógica y los datos se separan en servicios que pueden evolucionar de forma autónoma y comunicarse entre sí.",
    tag: '<i class="bi bi-bezier2" aria-hidden="true"></i> SERVICIOS INDEPENDIENTES',
    label:
      "Arquitectura desacoplada: interfaz, lógica y datos separados en componentes independientes conectados",
  },
};

const architectureStage = document.querySelector("#architecture-stage");
const architectureButtons = document.querySelectorAll("button[data-architecture]");
const architectureIndex = document.querySelector("#architecture-index");
const architectureTitle = document.querySelector("#architecture-title");
const architectureDescription = document.querySelector("#architecture-description");
const architectureTag = document.querySelector("#architecture-tag");

architectureButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedArchitecture = button.dataset.architecture;
    const option = architectureOptions[selectedArchitecture];

    if (!option) {
      return;
    }

    architectureStage.classList.toggle("is-monolith", selectedArchitecture === "monolith");
    architectureStage.classList.toggle("is-decoupled", selectedArchitecture === "decoupled");
    architectureStage.dataset.architecture = selectedArchitecture;
    architectureStage.setAttribute("aria-label", option.label);
    architectureIndex.textContent = option.index;
    architectureTitle.textContent = option.title;
    architectureDescription.textContent = option.description;
    architectureTag.innerHTML = option.tag;

    architectureButtons.forEach((architectureButton) => {
      const isSelected = architectureButton === button;
      architectureButton.classList.toggle("is-active", isSelected);
      architectureButton.setAttribute("aria-pressed", String(isSelected));
    });
  });

  document.querySelectorAll(".quiz-option").forEach((button) => {
    button.addEventListener("click", () => {
      const quizId = button.dataset.quiz;
      const quizOptions = document.querySelectorAll(`.quiz-option[data-quiz="${quizId}"]`);
      const feedback = document.querySelector(`[data-feedback="${quizId}"]`);
      const isCorrect = button.dataset.correct === "true";

      quizOptions.forEach((option) => {
        option.classList.remove("is-correct", "is-incorrect");
        option.setAttribute("aria-pressed", String(option === button));
      });

      button.classList.add(isCorrect ? "is-correct" : "is-incorrect");
      feedback.classList.toggle("is-correct", isCorrect);

      if (isCorrect) {
        feedback.textContent = "¡Correcto! Esa es la idea clave.";
        return;
      }

      const correctAnswer = Array.from(quizOptions).find(
        (option) => option.dataset.correct === "true",
      );
      feedback.textContent = `No exactamente. La respuesta es: ${correctAnswer.textContent.trim()}.`;
    });
  });
});
