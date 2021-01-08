import { useState, useEffect } from 'react';

export const useEarthEngine = (initialUrl, initialData) => {
	const [data, setData] = useState(initialData);
	const [url, setUrl] = useState(initialUrl);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const makeAPICall = async () => {
			const ls = localStorage.getItem(url);
			if (ls) {
				setData(JSON.parse(ls));
			} else {
				setIsLoading(true);
				try {
					const res = await fetch(url);
					const json = await res.json();
					// console.log('useDataApi - useEffect - json', json);
					setData([json]);
					localStorage.setItem(url, JSON.stringify([json]));
				} catch (err) {
					console.log('err', err);
				}
			}
			setIsLoading(false);
		};
		makeAPICall();
	}, [url]);

	return [{ data, isLoading }, setUrl];
};

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
