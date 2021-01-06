require('dotenv').config();

const ee = require('@google/earthengine');
const express = require('express');
const app = express();

const port = process.env.PORT || 5000;
const privateKey = require(`./${process.env.PRIVATE_KEY}`);

console.log(privateKey.private_key);

var runAnalysis = function () {
	ee.initialize(
		null,
		null,
		function () {
			// ... run analysis ...
		},
		function (e) {
			console.error('Initialization error: ' + e);
		}
	);
};

ee.data.authenticateViaPrivateKey(
	privateKey.private_key,
	runAnalysis,
	function (e) {
		console.error('Authentication error: ' + e);
	}
);

var image = new ee.Image('srtm90_v4');
image.getMap({ min: 0, max: 1000 }, function (map) {
	console.log(map);
});
// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_server', (req, res) => {
	res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});
const google = 'google';

app.get('/earth_engine', (req, res) => {
	res.send({ google: image });
});
