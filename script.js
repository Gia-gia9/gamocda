document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const email = document.getElementById('email').value;
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const messageElement = document.getElementById('message');

    if (regex.test(email)) {
        messageElement.textContent = 'Valid email address!';
        messageElement.style.color = 'green';
    } else {
        messageElement.textContent = 'Invalid email address. Please try again.';
        messageElement.style.color = 'red';
    }
});
