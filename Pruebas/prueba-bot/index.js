document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');
    const responseDiv = document.getElementById('response');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const userInput = chatInput.value.trim();
        if (userInput === "") {
            alert("Por favor, escribe algo antes de enviar.");
            return;
        }

        responseDiv.textContent = "Procesando...";
        chatInput.value = ""; // Limpiar el campo de entrada

        try {
            const response = await fetch('http://localhost:5501/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message: userInput })
            });

            if (!response.ok) {
                throw new Error("Error en la solicitud al servidor");
            }

            const data = await response.json();
            const gptResponse = data.choices[0].message.content;
            responseDiv.textContent = gptResponse;
        } catch (error) {
            responseDiv.textContent = "Ocurrió un error al procesar tu solicitud. Intenta nuevamente.";
            console.error("Error:", error);
        }
    });
});