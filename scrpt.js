function showForm() {
    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('form-container').style.display = 'block';
}

function submitDate() {
    const selectedDate = document.getElementById('selected-date').value;
    if (selectedDate) {
        document.getElementById('confirmation-message').textContent = 
            `¡Qué emoción! Pasaremos juntos el fin de semana del ${selectedDate}.`;
    } else {
        document.getElementById('confirmation-message').textContent = 
            "Por favor, selecciona una fecha.";
    }
}
