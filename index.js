/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){
  let t = time.split(":")
  let h = parseInt(t[0])
  let m = parseInt(t[1])
  
  if (h < 12){
    return "Good Morning"
  } else if (h >= 12 && h < 17){
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
  
}

/* Write your implementation of displayMessage() */
function displayMessage(greetingText){
  let gNode = document.getElementById("greeting")
  gNode.innerText = greetingText
}