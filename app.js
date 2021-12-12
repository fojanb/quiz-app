const questions = [
  {
    Q: "What is the capital of Canada?",
    A: "Manitoba",
    op1: "Tehran",
    op2: "Abadan",
    op3: "Ankara",
    id: Math.floor(Math.random() * 16777215).toString(16),
  },
  {
    Q: "What is the result of (-1)^0?",
    A: "1",
    op1: "0",
    op2: "-1",
    op3: "Infinity",
    id: Math.floor(Math.random() * 16777215).toString(16),
  },
  {
    Q: "What is the Canada popular word?",
    A: "Eh",
    op1: "heh",
    op2: "ehe",
    op3: "heheheh",
    id: Math.floor(Math.random() * 16777215).toString(16),
  },
  {
    Q: "What is the capital of Brazil?",
    A: "Brazil",
    op1: "Abadan",
    op2: "Ahvaz",
    op3: "Vancouver",
    id: Math.floor(Math.random() * 16777215).toString(16),
  },
  {
    Q: "What is the capital of Iran?",
    A: "Tehran",
    op1: "Ahvaz",
    op2: "Amol",
    op3: "Arizona",
    id: Math.floor(Math.random() * 16777215).toString(16),
  },
];
const wrapper = document.querySelector(".wrapper");
const options = document.querySelector(".options")
const start = document.querySelector("#startBtn");

start.addEventListener("click", () => {
  wrapper.style.display = "grid";
  wrapper.querySelector(".question").textContent = `${questions[0].Q}`;
  console.log(options.querySelectorAll(".option"))

});
