let doc = document.querySelector("body");
doc.style.backgroundColor = "black";

let data = [];

function handleSubmit(event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  console.log(name);
  console.log(email);
  console.log(password);

  let userData = {
    name: name,
    email: email,
  };

  data.push(userData);
  console.log(data);

  document.getElementById("form").reset();
}

let form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);
