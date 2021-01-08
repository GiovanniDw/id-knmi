require('dotenv').config();

const ee = require('@google/earthengine');
const express = require('express');
const app = express();

const privateKey = require('./.private-key.json');
const service_account = 'giovanni@knmi-300816.iam.gserviceaccount.com';

const port = process.env.PORT || 5000;

// var image = new ee.Image('srtm90_v4');
// image.getMap({ min: 0, max: 1000 }, function (map) {
// 	console.log(map);
// });

// create a GET route
// app.get('/express_server', (req, res) => {
// 	res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
// });
// app.listen(port, () => console.log(`Listening on port ${port}`));

const firstYear = { start: '2019-04-01', end: '2019-05-30' };
const secondYear = { start: '2020-04-01', end: '2020-05-30' };

app.get('/mapid-2019', (_, res) => {
	const collection = ee
		.ImageCollection('COPERNICUS/S5P/NRTI/L3_NO2')
		.select('NO2_column_number_density')
		.filterDate(firstYear.start, firstYear.end);

	const band_viz = {
		min: 0,
		max: 0.0002,
		opacity: 0.7,
		palette: ['black', 'blue', 'purple', 'cyan', 'green', 'yellow', 'red'],
	};

	const layer = collection.median();

	layer.getMap(band_viz, ({ mapid }) => res.send(mapid));
});

app.get('/mapid-2020', (_, res) => {
	const collection = ee
		.ImageCollection('COPERNICUS/S5P/NRTI/L3_NO2')
		.select('NO2_column_number_density')
		.filterDate(secondYear.start, secondYear.end);

	const band_viz = {
		min: 0,
		max: 0.0002,
		opacity: 0.7,
		palette: ['black', 'blue', 'purple', 'cyan', 'green', 'yellow', 'red'],
	};

	const layer = collection.median();

	layer.getMap(band_viz, ({ mapid }) => res.send(mapid));
});

const runAnalysis = () => {
	ee.initialize(
		null,
		null,
		function () {
			console.log('Earth Engine client library initialized.');
			app.listen(port);
			console.log(`Listening on port ${port}`);
		},
		function (e) {
			console.log('Initialization error: ' + e);
			console.log(
				`Please make sure you have created a service account and have been approved.
Visit https://developers.google.com/earth-engine/service_account#how-do-i-create-a-service-account to learn more.`
			);
		}
	);
};

ee.data.authenticateViaPrivateKey(privateKey, runAnalysis, function (e) {
	console.error('Authentication error: ' + e);
});
