/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(t) {
  let hour = t.split(':')[0]
  let time = parseInt(hour)
  if (time < 12) {
    return "Good Morning"
  } else if (time >= 12 && time <= 17) {
    return "Good Afternoon"
  } else if (time > 17) {
    return "Good Evening"
  } else {
    return "TEST"
  }
}

/* Write your implementation of displayMessage() */
function displayMessage(message) {
  const greeting = document.getElementById('greeting');
  greeting.innerText = message
}