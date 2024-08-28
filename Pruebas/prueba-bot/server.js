const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5501;
const apiKey = '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';

app.use(cors());
app.use(express.json());

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

        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Error al procesar la solicitud." });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
