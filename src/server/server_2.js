const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 3001;

// Middleware to parse JSON request bodies
app.use(express.json());
app.use(bodyParser.json());

// Using built-in express middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

// Middleware to parse cookies
app.use(cookieParser());

// CORS configuration
app.use(cors({
     origin: 'http://localhost:8000',
    //  origin: 'http://localhost1.com:3000',
    credentials: true
}));

app.post('/login_flutter', (req, res) => {
    const {userId, userName, companyId, companyName} = req.body;
    const token = userId + '-' + userName + '-' + companyId + '-' + companyName;

    if (!token) {
        return res.status(400).json({ error: "Token not provided" });
    }

    // Set token as Response Header
    // res.setHeader('token', token);

    // Set token as a cookie
    res.cookie('token', token, { httpOnly: false });
    // res.cookie('token', token, { httpOnly: true, sameSite: 'None', secure: true });

    // Redirect
    // res.redirect(302, 'http://localhost:8000/apps/clientonboarding');
    res.status(200).send(token);
});

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});

























// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();
// const cors = require('cors');
// const PORT = 3001;

// app.use(bodyParser.json());

// app.use(cors({
//     // origin: 'http://localhost:3000',
//     origin: 'http://localhost1.com:3000',
//     // credentials: true
// }));

// app.post('/redirect', (req, res) => {
//     const token = req.header('x-token');

//     if (!token) {
//         return res.status(400).json({ error: "Token not provided" });
//     }

//     res.status(200).json({});
// });

// app.listen(PORT, () => {
//     console.log(`Server started on http://localhost2.com:${PORT}`);
// });
