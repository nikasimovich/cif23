let container = document.querySelector(".wrapper");
let dateDiv = document.createElement("div");




function displayDate() {
  let date = new Date();
  container.appendChild(dateDiv);
  dateDiv.classList.add("date");
  dateDiv.innerHTML = date;
  console.log(date);
}

function clearPage() {
  dateDiv.innerHTML = " ";
}

displayDate();

let button = document.querySelector(".button");

button.addEventListener("click", clearPage);
button.addEventListener("click", displayDate);