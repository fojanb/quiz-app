const tools = {
  home: document.querySelector(".home"),
  wrapper: document.querySelector(".wrapper"),
  options: document.querySelector(".options"),
  start: document.querySelector("#startBtn"),
  endpoint: "./questions.json",
};

const state = {
  current: null,
  prev: null,
  next: null,
};

const handleError = () => {
  console.log("No data have been found");
};

const cardDesign = (questions) => {
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
};

const cardStates = () => {
  state.current = tools.wrapper.firstElementChild;
  state.prev =
    state.current.previousElementSibling || tools.wrapper.lastElementChild;
  state.next = state.current.nextElementSibling;
};

const applyClass = () => {
  state.current.classList.add("current");
  state.prev.classList.add("prev");
  state.next.classList.add("next");
};

const cards = (questions) => {
  tools.start.addEventListener("click", () => {
    tools.home.style.display = "none";
    cardDesign(questions);
    cardStates();
    applyClass();

    const move = (forward) => {
      if (forward === "forward") {
        console.log("Next card");
        state.current.classList.remove("current");
        state.next.classList.remove("next");
        state.next.classList.add("current");
        state.current = state.next;
        console.log(state.current);
      }
    };

    tools.wrapper
      .querySelector(".card.current")
      .querySelector("#nextBtn")
      .addEventListener("click", () => move("forward"));
  });
};
// -----------------------------------
fetch(tools.endpoint)
  .then((response) => {
    return response.json();
  })
  .then((questions) => cards(questions))
  .catch(handleError);
