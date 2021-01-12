import React, { useRef, useEffect, useState } from 'react';
import ee from '@google/earthengine';
import { getMapId } from '../services/EarthEngine';
import useScript from '../hooks/useScript';
import styled from 'styled-components';

import Loading from './Loading';

const API_KEY = 'AIzaSyBzkdwRUgasK5uMQgDwVqjgQThhqnnfweg';

const firstYear = { start: '2019-04-01', end: '2019-05-30' };
const secondYear = { start: '2020-04-01', end: '2020-05-30' };

const Map = (props) => {
	const mapRef = useRef();
	const mapid = getMapId(props.mapURL);

	const [eeObject, setEeObject] = useState();

	const eeScript = useScript(
		'https://ajax.googleapis.com/ajax/libs/earthengine/0.1.226/earthengine-api.min.js'
	);
	const gmAPI = useScript(
		`https://maps.googleapis.com/maps/api/js?key=${API_KEY}`
	);

	const initialize = (mapid, el) => {
		const embeddedMap = new window.google.maps.Map(el.current, {
			center: { lng: 5.1, lat: 52.1 },
			zoom: 6,
		});

		const tileSource = new ee.layers.EarthEngineTileSource({
			mapid,
		});

		const overlay = new ee.layers.ImageOverlay(tileSource);
		embeddedMap.overlayMapTypes.push(overlay);
	};

	useEffect(() => {
		if (eeScript === 'ready' && gmAPI === 'ready') {
			initialize(mapid, mapRef);
		}
	}, [mapid]);

	if (!mapRef && !mapid) return <Loading />;

	return (
		<MapContainer className="map-container">
			<div className="google-map" ref={mapRef}></div>
		</MapContainer>
	);
};

export default Map;

const MapContainer = styled.div`
	position: relative;
	overflow: hidden;
	width: 100%;
	height: 0;
	padding-bottom: 56.25%;
	.google-map {
		position: absolute;
		width: 100%;
		height: 100%;
	}
`;
