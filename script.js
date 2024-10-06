document.getElementById('bookingForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const ticketData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        event: document.getElementById('event').value,
        tickets: document.getElementById('tickets').value
    };

    try {
        const response = await fetch('YOUR_WEB_APP_URL', {  // Replace with your web app URL
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ticketData)
        });

        const result = await response.json();
        if (result.result === "Success") {
            document.getElementById('confirmation').innerHTML = 'Booking Confirmed!';
            document.getElementById('confirmation').style.display = 'block';
        }
    } catch (error) {
        console.error('Error:', error);
    }
});
