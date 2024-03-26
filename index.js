// Retrieving DOM elements
let ratioWidth = document.getElementById("ratio-width"); // Getting the input for width ratio
let ratioHeight = document.getElementById("ratio-height"); // Getting the input for height ratio
let width = document.getElementById("width"); // Getting the input for width
let height = document.getElementById("height"); // Getting the input for height

// Function to calculate width based on aspect ratio
let calculateWidth = () => {
    // Calculating aspect ratio
    let aspectRatio = ratioWidth.value / ratioHeight.value;
    // Setting the width value based on the calculated aspect ratio and the height value
    width.value = parseFloat((height.value * aspectRatio).toFixed(2));
};

// Function to calculate height based on aspect ratio
let calculateHeight = () => {
    // Calculating aspect ratio
    let aspectRatio = ratioWidth.value / ratioHeight.value;
    // Setting the height value based on the calculated aspect ratio and the width value
    height.value = parseFloat((width.value / aspectRatio).toFixed(2));
}

// Event listeners for input changes
height.addEventListener("input", calculateWidth); // When height changes, recalculate width
width.addEventListener("input", calculateHeight); // When width changes, recalculate height
ratioHeight.addEventListener("input", calculateWidth); // When height ratio changes, recalculate width
ratioWidth.addEventListener("input", calculateHeight); // When width ratio changes, recalculate height
