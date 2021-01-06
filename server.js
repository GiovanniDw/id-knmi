require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const PRIVATE_KEY = process.env.PRIVATE_KEY;

console.log(PRIVATE_KEY);

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_server', (req, res) => {
	res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});
