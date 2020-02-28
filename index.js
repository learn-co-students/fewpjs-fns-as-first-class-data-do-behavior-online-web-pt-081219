/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(time) {
  const timeAry = time.split(":")
  if (timeAry[0] < 12) {
    return "Good Morning"
  }
    else if (timeAry[0] > 17) {
      return "Good Evening"
  }
    else {
  return "Good Afternoon"
    }
};

function displayMessage(message) {
  let content = document.getElementById("greeting")
  content.innerText = message
};