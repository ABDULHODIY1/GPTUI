// Select the input and the button
var input = document.querySelector("input");
var button = document.querySelector("iconX_send");

// Function to update classes based on input validity
function updateClasses() {
    if (isNaN(input.value)) {
        button.classList.add("value");
        button.classList.remove("none");
    } else {
        button.classList.remove("value");
        button.classList.add("none");
    }
}

// Initial call to set classes based on initial input value
updateClasses();

// Add event listener to input for live updates
input.addEventListener("input", updateClasses);
