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
                <div class="option" id=${question.option1.id}>${question.option1.value}</div>
                <div class="option" id=${question.option2.id}>${question.option2.value}</div>
                <div class="option" id=${question.option3.id}>${question.option3.value}</div>
            </div>
         </div>`
        )
        .join("");
      tools.wrapper
        .querySelectorAll(".option")
        .forEach((option) =>
          option.addEventListener("click", () => console.log(option.id))
        );
    });
  })
  .catch(handleError);
