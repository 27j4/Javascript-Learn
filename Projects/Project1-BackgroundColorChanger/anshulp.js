let buttons = document.querySelectorAll(".button");
let body = document.body;

console.log(buttons);

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    document.body.style.backgroundColor = event.target.id;
  });
});
