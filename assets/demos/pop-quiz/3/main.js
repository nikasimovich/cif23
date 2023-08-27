let container = document.querySelector(".wrapper");
let dateDiv = document.createElement("div");
let otherText = document.createElement("span");
let colors = ["chartreuse", "cyan", "orange", "gold", "greenyellow", "lavender", "lemonchiffon", "tomato", "yellowgreen", "springgreen"];



function displayDate() {
  let date = new Date();
  let randColor = colors[Math.floor(Math.random()*colors.length)];
  container.appendChild(otherText);
  container.appendChild(dateDiv);
  dateDiv.classList.add("date");
  otherText.classList.add("other");
  otherText.innerHTML = "Right now it is "
  dateDiv.innerHTML = date;
  dateDiv.style.color = randColor;
  console.log(date);
}

function clearPage() {
  dateDiv.innerHTML = " ";
}

displayDate();
setInterval(displayDate, 1000);
