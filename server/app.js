const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
    res.json({ message: "Hello from Express backend!" });
});

app.use((req, res) => {
    res.send('<h2>Page not found</h2>');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
