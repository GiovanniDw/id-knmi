import { useState, useEffect } from 'react';

export const getMapId = () => {
	const [data, setData] = useState();
	const callBackendAPI = async () => {
		const response = await fetch('/mapid');
		const body = await response.text();

		if (response.status !== 200) {
			throw Error(body.message);
		}

		return body;
	};
	useEffect(() => {
		callBackendAPI()
			.then((res) => res)
			.then((mapID) => setData(mapID))
			.catch((err) => console.log(err));
	}, []);

	return data;
};

export const getMapCollection = () => {
	const [data, setData] = useState();
	const callBackendAPI = async () => {
		const response = await fetch('/map-settings');

		const body = await response.text();

		if (response.status !== 200) {
			throw Error(body.message);
		}
		console.log(response);
		return body;
	};
	useEffect(() => {
		callBackendAPI()
			.then((res) => res)
			.then((mapCollection) => setData(mapCollection))
			.catch((err) => console.log(err));
	}, []);

	return data;
};
