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
      tools.wrapper.innerHTML = questions.questions
        .map(
          (question) =>
            `<div class="card" id=${question.id}>
            <div class="question">${question.question}</div>
            <div class="options">
                <div class="option" id=${question.option4.id}>${question.option4.value}</div>
                <div class="option" id=${question.option1.id}>${question.option1.value}</div>
                <div class="option" id=${question.option2.id}>${question.option2.value}</div>
                <div class="option" id=${question.option3.id}>${question.option3.value}</div>
            </div>
            <div class="controls">
                <button class="btn" id="prevBtn">←&nbsp;Prev</button>
                <button class="btn" id="nextBtn">Next&nbsp;→</button>
            </div>
         </div>`
        )
        .join("");
      let current = tools.wrapper.firstElementChild;
      let prev =
        current.previousElementSibling || tools.wrapper.lastElementChild;
      let next = current.nextElementSibling;
      current.classList.add("current");
      prev.classList.add("prev");
      next.classList.add("next");
      function move(forward) {
        if (forward === "forward") {
          console.log("Next card");
          current.classList.remove("current")
          next.classList.remove("next");
          next.classList.add("current")
          current = next;
          console.log(current)
        }
      }
      tools.wrapper
        .querySelector(".card.current")
        .querySelector("#nextBtn")
        .addEventListener("click", () => move("forward"));
      tools.wrapper
        .querySelectorAll(".option")
        .forEach((option) =>
          option.addEventListener("click", () => console.log(option.id))
        );
    });
  })
  .catch(handleError);
