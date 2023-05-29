// Get the input box element and all the buttons
let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

// Create an empty string to hold the input value
let string = "";

// Convert the buttons NodeList to an Array so we can use forEach on it
let arr = Array.from(buttons);

// Add a click event listener to each button
arr.forEach(button => {
    button.addEventListener("click", (e) => {
        // If the clicked button is the equals sign, evaluate the string and set the input value to the result
        if (e.target.innerHTML == '=') {
            string = eval(string);
            input.value = string;
        }
        // If the clicked button is the AC button, clear the string and set the input value to empty
        else if (e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        // If the clicked button is the DEL button, remove the last character from the string and set the input value to the new string
        else if (e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length - 1);
            input.value = string;
        }
        // For all other buttons, add their innerHTML to the string and set the input value to the new string
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
     })
});
