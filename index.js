/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
function greet(input) {
  const time = parseInt(input, 10)
  if (time < 12) return "Good Morning"
  if (time > 17) return "Good Evening"
  return "Good Afternoon"
}

function displayMessage(msg) {
  document.getElementById('greeting').innerText = msg
}

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
