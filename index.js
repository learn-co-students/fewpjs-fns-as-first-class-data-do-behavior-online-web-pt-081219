/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function range(n, min, max) {
  return n >= min && n <= max
}

function greet(string) {
  let time = parseInt(string.split(':'))
  if (range(time, 0, 11)) {
    return "Good Morning"
  }
  if (range(time, 12, 17)) {
    return "Good Afternoon"
  }
  if (range(time, 18, 24)) {
    return "Good Evening"
  }
}

/* Write your implementation of displayMessage() */

function displayMessage(string) {
  let node = document.getElementById('greeting')
  node.innerText = string
}
