

import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtener la ruta del directorio actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 5501;  // Asegúrate de que este sea el puerto correcto
const apiKey = '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';

app.use(cors());
app.use(express.json());  // Para manejar JSON en el cuerpo de la solicitud

// Ruta para manejar la solicitud POST
app.post('/chat', async (req, res) => {
    const { message } = req.body;

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: "gpt-4",
                messages: [{ role: "user", content: message }]
            })
        });

        if (!response.ok) {
            throw new Error("Error en la solicitud a la API");
        }

        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Error al procesar la solicitud." });
    }
});

// Ruta para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'Pruebas/prueba-bot')));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});



curl -X POST https://api.openai.com/v1/chat/completions \
-H "Content-Type: application/json" \
-H "Authorization: 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" \
-d '{"model": "gpt-4", "messages": [{"role": "user", "content": "Hello"}]}'
