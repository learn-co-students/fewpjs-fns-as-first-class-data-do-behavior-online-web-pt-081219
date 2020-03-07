/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time) {
  let split_time = time.split(":"); 
  let hour = parseInt(split_time[0]);
  let minute = parseInt(split_time[1]);
  
  

  if (hour < 12) {
    return 'Good Morning';
  } else if (hour >= 12 && hour < 17) {
    return 'Good Afternoon';
  } else {
    return 'Good Evening';
  }

}

/* Write your implementation of displayMessage() */
function displayMessage(message) {
  let greeting = document.getElementById('greeting');
  greeting.innerText = message
}