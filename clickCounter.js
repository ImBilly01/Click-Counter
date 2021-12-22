// Gets the click & value id's from the HTML
let click = document.getElementById('count');
let value = document.getElementById('value');

// Sets the counter to 0
let counter = 0;

// Onclick it starts counting and changing the value
function count() {
    click = ++counter;
    value.innerHTML = counter;
}