function handleSubmit() {
    // Get values from input fields
    const wantInput = document.getElementById('want-input').value;
    const habitInput = document.getElementById('habit-input').value;

    // Display the calendar
    displayCalendar();

    // Set input fields with their respective values
    document.getElementById('want-input').value = wantInput;
    document.getElementById('habit-input').value = habitInput;

    return false; // Prevent page reload
}

function displayCalendar() {
    const calendarContainer = document.getElementById('calendar');
    calendarContainer.style.display = 'flex'; // Show the calendar

    // Clear previous calendar content
    calendarContainer.innerHTML = '';

    // Create calendar for the next 7 days
    for (let i = 0; i < 7; i++) {
        const d = new Date(); 
        d.setDate(d.getDate() + i); 

        // Format the date as a readable string (e.g., "Monday, Oct 29")
        const options = { weekday: 'long', month: 'short', day: 'numeric' };
        const formattedDate = d.toLocaleDateString(undefined, options);

        // Create the box
        const dayDiv = document.createElement('div');
        dayDiv.className = 'day';
        dayDiv.innerHTML = `
            <h4>${formattedDate}</h4>
            <label>
                <input type="radio" name="habit-${i}" value="completed" onchange="checkHabitStatus()"> Yes, I did it.
            </label>
            <label>
                <input type="radio" name="habit-${i}" value="not-completed" onchange="checkHabitStatus()"> Nope
            </label>
        `;

        // Append the box
        calendarContainer.appendChild(dayDiv);
    }
}

function checkHabitStatus() {
    let allCompleted = true;
    let anyNotCompleted = false;

    // Check the status of the 7 radio buttons
    for (let i = 0; i < 7; i++) {
        const radios = document.getElementsByName(`habit-${i}`);
        let selected = false;

        radios.forEach(radio => {
            if (radio.checked) {
                selected = true;
                if (radio.value === 'not-completed') {
                    anyNotCompleted = true;
                }
            }
        });

        // If no option selected for a day, consider it incomplete
        if (!selected) {
            allCompleted = false;
        }
    }

    // Display appropriate message based on the check
    const messageElement = document.getElementById('message');
    if (allCompleted && !anyNotCompleted) {
        messageElement.textContent = "Sweet Streak!";
    } else if (anyNotCompleted) {
        messageElement.textContent = "It's ok, what's been happening?";
    } else {
        messageElement.textContent = ''; // Clear the message if incomplete
    }
}
