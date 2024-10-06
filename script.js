document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const eventSelected = document.getElementById('event').value;
    const tickets = document.getElementById('tickets').value;

    // Prepare data to send
    const data = {
        name: name,
        email: email,
        event: eventSelected,
        tickets: tickets
    };

    // Send data to Google Sheets
    fetch('https://script.google.com/macros/s/AKfycbyggQOaF4OW95J585VTGhrcCjRNvbqMyZCrVBdEiA4w7PkQkdxSgtPY1eMdhl8K_x2O/exec', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if (data.result === "success") {
            // Display confirmation
            const confirmationMessage = `
                Thank you, ${name}!<br>
                You have booked ${tickets} ticket(s) for the ${eventSelected} event.<br>
                A confirmation email has been sent to ${email}.
            `;
            const confirmationDiv = document.getElementById('confirmation');
            confirmationDiv.innerHTML = confirmationMessage;
            confirmationDiv.classList.remove('hidden');

            // Clear form
            document.getElementById('booking-form').reset();
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});