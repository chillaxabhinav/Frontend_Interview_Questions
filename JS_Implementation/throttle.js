/*
Throttling helps us to limit the function call for a certain amount of time
After that we can limit only the function can be called
*/

function throttle(mainFunction, delay) {
    let timerFlag = null; // Variable to keep track of the timer
  
    // Returning a throttled version 
    return (...args) => {
      if (timerFlag === null) { // If there is no timer currently running
        mainFunction(...args); // Execute the main function 
        timerFlag = setTimeout(() => { // Set a timer to clear the timerFlag after the specified delay
          timerFlag = null; // Clear the timerFlag to allow the main function to be executed again
        }, delay);
      }
    };
}

function test() {
    console.log("Testing throttle");
}

const throttled = throttle(test, 1000);