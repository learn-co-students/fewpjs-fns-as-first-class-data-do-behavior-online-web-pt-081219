/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString) {
  let timeArray = timeString.split(':')
  let parsedArray = []
  let greetingText;

  for (let i = 0; i< timeArray.length; i++) {
    parsedArray.push(parseInt(timeArray[i]))
  }

  // If the time is earlier than 12pm, return "Good Morning".
  // If the time is between 12pm and 5pm, return "Good Afternoon".
  // If the time is later than 5pm, return "Good Evening".

  if (parsedArray[0] < 12) {
    greetingText = 'Good Morning'
  } else if (parsedArray[0] > 12 && parsedArray[0] < 17) {
    greetingText = 'Good Afternoon'
  } else {
    greetingText = 'Good Evening'
  }

  return greetingText
}

/* Write your implementation of displayMessage() */
function displayMessage(greetingText) {
  let greetingNode = document.querySelector('#greeting')
  greetingNode.innerText = greetingText
}