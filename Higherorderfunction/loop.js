//Write a higher-order function loop that provides something like a for loop statement. It should take a value, a test function, an update function, and a body function. Each iteration, it should first run the test function on the current loop value and stop if that returns false. It should then call the body function, giving it the current value, and finally call the update function to create a new value and start over from the beginning.When defining the function, you can use a regular loop to do the actual looping.
function loop(value, test, update, body){
    // Run a loop that continues as long as the test function returns true
    while (test(value)) {
        body(value); // Run the body function with the current value
        value = update(value); // Update the value by calling the update function
    }
}
loop(3, n => n > 0, n => n - 1, console.log);