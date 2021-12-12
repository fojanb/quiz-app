// const questions = require("./questions.json");
const tools = {
  home: document.querySelector(".home"),
  wrapper: document.querySelector(".wrapper"),
  options: document.querySelector(".options"),
  start: document.querySelector("#startBtn"),
  endpoint: "./questions.json",
};
const handleError = () => {
  console.log("No data have been found");
};
fetch(tools.endpoint)
  .then((response) => {
    return response.json();
  })
  .then((questions) => {
    tools.start.addEventListener("click", () => {
      tools.home.style.display = "none";
      tools.wrapper.style.display = "grid";
      tools.wrapper.innerHTML = questions.questions
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
  })
  .catch(handleError);
