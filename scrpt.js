
// Función para mostrar el formulario cuando se toca la pantalla de bienvenida
function showForm() {
    document.getElementById('background').classList.add('background-confirmation');
    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('form-container').style.display = 'flex'; // Mostrar la pantalla del formulario
}

// Función para manejar el envío de la fecha y enviar el correo
function submitDate() {
    const selectedDate = document.getElementById('selected-date').value;
    
    // Verifica si se seleccionó una fecha
    if (selectedDate) {
        document.getElementById('confirmation-message').textContent = 
            `¡Qué emoción! Pasaremos juntos el fin de semana del ${selectedDate}.`;

        // Configurar los parámetros del correo
        let templateParams = {
            to_email: 'ricardorama28@gmail.com',  // Cambia este correo por el de tu novia
            message: `Has seleccionado el fin de semana del ${selectedDate}`
        };

        // Envía el correo usando EmailJS con tu Service ID y Template ID
        emailjs.send('service_72tts2d', 'template_lk1z7ul', templateParams)
        .then(function(response) {
            console.log('Correo enviado con éxito', response.status, response.text);
            document.getElementById('confirmation-message').textContent = 
                "El correo de confirmación ha sido enviado.";
            
            // Ocultar el formulario y mostrar la pantalla final
            document.getElementById('form-container').style.display = 'none';
            document.getElementById('final-screen').style.display = 'flex';
        }, function(error) {
            console.error('Error al enviar el correo:', error);
            document.getElementById('confirmation-message').textContent = 
                "Hubo un error al enviar el correo, por favor intenta nuevamente.";
        });

    } else {
        document.getElementById('confirmation-message').textContent = 
            "Por favor, selecciona una fecha.";
    }
}

// Event listener para cuando se hace clic en la pantalla de bienvenida
document.getElementById('welcome-screen').addEventListener('click', showForm);
