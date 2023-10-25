const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const cors = require('cors');
const PORT = 3001;

app.use(bodyParser.json());

app.use(cors({
    // origin: 'http://localhost:3000',
    origin: 'http://localhost1.com:3000',
    // credentials: true
}));

app.post('/redirect', (req, res) => {
    const token = req.header('x-token');

    if (!token) {
        return res.status(400).json({ error: "Token not provided" });
    }

    res.status(200).json({});
});

app.listen(PORT, () => {
    console.log(`Server started on http://localhost2.com:${PORT}`);
});
