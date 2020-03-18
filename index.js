/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time){
  const timeString = parseInt(time, 0);
if (timeString < 12){
return "Good Morning"
}
if (timeString >= 12 && timeString < 17){
return "Good Afternoon"
}
return "Good Evening"
}
/* Write your implementation of displayMessage() */
function displayMessage(message){
  let greeting = document.getElementById('greeting');
  greeting.innerText = message;
}
