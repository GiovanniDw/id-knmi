import React from 'react';

import styled from 'styled-components';
import { px2vw, colors } from '../GlobalStyles';
export const Container = styled.div`
	display: flex;
	flex-flow: column;
	align-items: center;
`;

export const Section = styled.div`
	padding: 5em;
	min-height: 100vh;
	min-width: 100vw;

	&.section-1 {
		background: ${colors.primary};
		display: flex;
		align-items: center;
		text-align: left;
		color: white;
	}
`;

export const GridContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: stretch;
	align-content: stretch;
	margin: ${px2vw(32)};
	height: 100%;
	max-width: 100%;
`;

export const GridItem = styled.div`
	display: flex;

	padding: ${px2vw(20)};
	margin: ${px2vw(20)};
	/* background-color: ${(props) => props.bgColor}; */
	height: 100%;

	@media (min-width: 768px) {
		min-width: ${px2vw(320, 768)};

		height: 100%;
	}

	@media (min-width: 1024px) {
		min-width: ${px2vw(500)};

		height: 100%;
	}
`;
