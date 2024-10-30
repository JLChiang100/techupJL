function commit() {
    // Get the value from the text box
    const input = document.getElementById('text-input').value;
    // Display the value in the output div
    document.getElementById('output').textContent = `Goal:${input}`;
    // Clear the input field
    document.getElementById('text-input').value = '';
}