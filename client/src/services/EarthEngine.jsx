import React, { useState, useEffect } from 'react';

export const getMapId = (url) => {
	const [data, setData] = useState();
	const callBackendAPI = async () => {
		const response = await fetch(url);
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
