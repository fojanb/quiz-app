const questions = [
  {
    question: "where is the capital of Canada?",
    answer: "Ottawa",
    op1: "Tehran",
    op2: "Abadan",
    op3: "Ankara",
    id: Math.floor(Math.random() * 16777215).toString(16),
  },
  {
    question: "What is the result of (-1)^0?",
    answer: "1",
    op1: "0",
    op2: "-1",
    op3: "Infinity",
    id: Math.floor(Math.random() * 16777215).toString(16),
  },
  {
    question: "What is the Canada popular word?",
    answer: "Eh",
    op1: "heh",
    op2: "ehe",
    op3: "heheheh",
    id: Math.floor(Math.random() * 16777215).toString(16),
  },
  {
    question: "What is the capital of Brazil?",
    answer: "Brazil",
    op1: "Abadan",
    op2: "Ahvaz",
    op3: "Vancouver",
    id: Math.floor(Math.random() * 16777215).toString(16),
  },
  {
    question: "Where is the capital of Iran?",
    answer: "Tehran",
    op1: "Ahvaz",
    op2: "Amol",
    op3: "Arizona",
    id: Math.floor(Math.random() * 16777215).toString(16),
  },
];
const tools = {
  wrapper: document.querySelector(".wrapper"),
  options: document.querySelector(".options"),
  start: document.querySelector("#startBtn"),
};

tools.start.addEventListener("click", () => {
  tools.wrapper.style.display = "grid";
  tools.wrapper.innerHTML = questions.map(
    (question) =>
      `<div class="question">${question.question}</div>
      <div class="options">
          <div class="option" id="option-1">${question.answer}</div>
          <div class="option" id="option-2">${question.op1}</div>
          <div class="option" id="option-3">${question.op2}</div>
          <div class="option" id="option-4">${question.op3}</div>
      </div>`
  );
});
