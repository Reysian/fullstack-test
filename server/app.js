const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;
let count = 0;

app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
    res.status(200).json({
        message: "Hello from Express backend!",
        number: count
    });
});

app.post("/api", (req, res) => {
    count = req.body.number;
    console.log(count);
    res.status(200).send(`Received ${count}`);
})

app.use((req, res) => {
    res.send('<h2>Page not found</h2>');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
