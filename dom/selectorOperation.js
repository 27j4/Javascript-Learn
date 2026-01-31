document.querySelector("body").style.backgroundColor = "black";
document.querySelector("body").style.color = "white";

let main = document.querySelector("#start");
main.style.color = "blue";

// normally to select multiple elements we use querySelectorAll
// for getting one element we use querySelector, because it returns the first match only.

let skillItems = document.querySelectorAll(".skill-items");

// this will style all the skill items. It is not an array but a node list.

skillItems.forEach((item) => {
  item.style.fontWeight = "bold";
  item.style.marginBottom = "5px";
  item.style.color = "green";
});

// to select multiple elements using getElementsByClassName

let projectItems = document.getElementsByClassName("project-item");

// this will return an HTML collection. We need to convert it into an array to use forEach

Array.from(projectItems).forEach((item) => {
  item.style.backgroundColor = "#f0f0f0";
  item.style.padding = "10px";
  item.style.marginBottom = "10px";
  item.style.color = "blue";
});



// inner text vs inner HTML vs text content

let firstProject = document.querySelector(".project-item");

// innerText will return the visible text only
console.log("innerText:", firstProject.innerText);

// textContent will return all the text including hidden text
console.log("textContent:", firstProject.textContent);

// innerHTML will return the HTML structure inside the element
console.log("innerHTML:", firstProject.innerHTML);

// Modifying content

firstProject.innerHTML +=
  '<p style="color:red;">This is an additional description added via JavaScript.</p>';