let firstInputValue = ''; // Variable to hold the first input value

function commitFirst() {
    // Get the value from the first input
    firstInputValue = document.getElementById('first-input').value;
    // Hide the header and the first input form
    document.getElementById('first-header').style.display = 'none';
    document.getElementById('first-form').style.display = 'none';
    // Show the second input container
    document.getElementById('second-input-container').style.display = 'block';
    // Clear the first input field
    document.getElementById('first-input').value = '';
}

function commitSecond() {
    // Get the value from the second input
    const habit = document.getElementById('second-input').value;
    // Display the outputs below the input forms
    document.getElementById('output').innerHTML = `
        <strong>${firstInputValue}</strong><br>
        Habit: <strong>${habit}</strong>
    `;
    // Hide the second header and the second input form
    document.getElementById('second-header').style.display = 'none';
    document.querySelector('#second-input-container form').style.display = 'none';
    // Clear the second input field
    document.getElementById('second-input').value = '';
}