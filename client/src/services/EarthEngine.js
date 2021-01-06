import { useState, useEffect } from 'react';

export const EarthEngine = () => {
	const [data, setData] = useState(null);
	const callBackendAPI = async () => {
		const response = await fetch('/express_server');
		const body = await response.json();

		if (response.status !== 200) {
			throw Error(body.message);
		}
		return body;
	};
	useEffect(() => {
		callBackendAPI()
			.then((res) => setData(res.express))
			.catch((err) => console.log(err));
	}, []);

	return data;
};

export default EarthEngine;
