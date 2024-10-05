document.addEventListener("DOMContentLoaded", function() {
    // Asegúrate de que el botón de bienvenida esté disponible cuando se carga el DOM
    const welcomeScreen = document.getElementById('welcome-screen');
    if (welcomeScreen) {
        welcomeScreen.addEventListener('click', function() {
            document.getElementById('welcome-screen').style.display = 'none';
            document.getElementById('form-container').style.display = 'flex';
            document.getElementById('background').classList.add('background-confirmation');
        });
    }

    // Función submitDate para manejar el envío del formulario
    function submitDate() {
        const selectedDate = document.getElementById('selected-date').value;

        if (selectedDate) {
            document.getElementById('confirmation-message').textContent = 
                `¡Qué emoción! Pasaremos juntos el fin de semana del ${selectedDate}.`;

            // Configurar los parámetros del correo
            let templateParams = {
                to_email: 'ricardorama28@gmail.com',  // Cambia este correo por el de tu novia
                message: `Has seleccionado el fin de semana del ${selectedDate}`
            };

            // Envía el correo usando EmailJS
            emailjs.send('service_72tts2d', 'template_lk1z7ul', templateParams)
            .then(function(response) {
                console.log('Correo enviado con éxito', response.status, response.text);
                document.getElementById('confirmation-message').textContent = 
                    "El correo de confirmación ha sido enviado.";
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

    // Asegúrate de que el botón de envío esté disponible cuando se carga el DOM
    const sendButton = document.querySelector('button');
    if (sendButton) {
        sendButton.addEventListener('click', submitDate);
    }
});
