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

            // Create calendar for each day of the week
            const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
            daysOfWeek.forEach(day => {
                const dayDiv = document.createElement('div');
                dayDiv.className = 'day';
                dayDiv.innerHTML = `
                    <h4>${day}</h4>
                    <label>
                        <input type="radio" name="habit-${day}" value="completed" onchange="checkHabitStatus()"> Completed
                    </label>
                    <label>
                        <input type="radio" name="habit-${day}" value="not-completed" onchange="checkHabitStatus()"> Not Completed
                    </label>
                `;
                calendarContainer.appendChild(dayDiv);
            });
        }

        function checkHabitStatus() {
            const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
            let allCompleted = true;
            let anyNotCompleted = false;

            daysOfWeek.forEach(day => {
                const radios = document.getElementsByName(`habit-${day}`);
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
            });

            // Display appropriate message based on the check
            const messageElement = document.getElementById('message');
            if (allCompleted && !anyNotCompleted) {
                messageElement.textContent = "Sweet Streak!";
            } else if (anyNotCompleted) {
                messageElement.textContent = "Pause, what's been happening.";
            } else {
                messageElement.textContent = ''; // Clear the message if incomplete
            }
        }