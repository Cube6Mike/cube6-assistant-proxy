
const express = require("express");
const fetch = require("node-fetch");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post("/proxy", async (req, res) => {
    const makeWebhookURL = "https://hook.eu2.make.com/jiu0j8klgkvcrvx9j1w8rde40gceo2yc";
    try {
        const response = await fetch(makeWebhookURL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(req.body)
        });

        const result = await response.json();
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: "Proxy failed", details: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Proxy running on port ${PORT}`);
});
