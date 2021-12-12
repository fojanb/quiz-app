const questions = [
  {
    question: "Where is the capital of Canada?",
    answer: { value: "Ottawa", id: "0" },
    op1: { value: "Abadan", id: "1" },
    op2: { value: "Alaska", id: "2" },
    op3: { value: "Shiraz", id: "3" },
    id: Math.floor(Math.random() * 16777215).toString(16),
  },
  {
    question: "What is the result of (-1)^0?",
    answer: { value: "1", id: "4" },
    op1: { value: "0", id: "5" },
    op2: { value: "-1", id: "6" },
    op3: { value: "Infinity", id: "7" },
    id: Math.floor(Math.random() * 16777215).toString(16),
  },
  {
    question: "What is the Canada popular word?",
    answer: { value: "Eh", id: "12" },
    op1: { value: "he", id: "13" },
    op2: { value: "heh", id: "14" },
    op3: { value: "ehe", id: "15" },
    id: Math.floor(Math.random() * 16777215).toString(16),
  },
  {
    question: "What is the capital of Brazil?",
    answer: { value: "Brazil", id: "16" },
    op1: { value: "Arizona", id: "17" },
    op2: { value: "Ohio", id: "18" },
    op3: { value: "LA", id: "19" },
    id: Math.floor(Math.random() * 16777215).toString(16),
  },
  {
    question: "Where is the capital of Iran?",
    answer: { value: "Tehran", id: "20" },
    op1: { value: "Amol", id: "21" },
    op2: { value: "Isfahan", id: "22" },
    op3: { value: "Ankara", id: "23" },
    id: Math.floor(Math.random() * 16777215).toString(16),
  },
];
const tools = {
  home: document.querySelector(".home"),
  wrapper: document.querySelector(".wrapper"),
  options: document.querySelector(".options"),
  start: document.querySelector("#startBtn"),
};

tools.start.addEventListener("click", () => {
  tools.home.style.display = "none";
  tools.wrapper.style.display = "grid";
  tools.wrapper.innerHTML = questions
    .map(
      (question) =>
        `<div class="card" id=${question.id}>
          <div class="question">${question.question}</div>
          <div class="options">
              <div class="option" id=${question.answer.id}>${question.answer.value}</div>
              <div class="option" id=${question.op1.id}>${question.op1.value}</div>
              <div class="option" id=${question.op2.id}>${question.op2.value}</div>
              <div class="option" id=${question.op3.id}>${question.op3.value}</div>
          </div>
       </div>`
    )
    .join("");
});
