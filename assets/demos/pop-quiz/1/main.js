// 1 Create a variable for the current date.
let date = new Date();

// 3 Create a variable for where you would like to display the date on the HTML document.
let container = document.querySelector(".wrapper");


// 2 Console log that variable to make sure it’s working and to preview how it will get displayed.
console.log(date);

// 4 Create a function called “displayDate” 

function displayDate() {
  // 4a Establishes a variable called “dateDiv” that creates a div element on the document
  let dateDiv = document.createElement("div");
  // 4b Appends the “dateDiv” as a child to the container of your document
  container.appendChild(dateDiv);
  // 4c Adds a class to your dateDiv
  dateDiv.classList.add("date");
  // 4d Sets the “innerHTML” of “dateDiv” to be the variable for your date.
  dateDiv.innerHTML = date;
}

// 5 Calls up the function
displayDate();