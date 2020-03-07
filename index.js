/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(time){
  let hour = (time.split(':'))[0];
  let number = parseInt(hour);
  if (number < 12){
    return 'Good Morning';
  } else if (number < 17){
    return 'Good Afternoon';
  } else {
    return 'Good Evening';
  }

}

function displayMessage(message){
  let node = document.getElementById('greeting');
  node.innerText = message;

}