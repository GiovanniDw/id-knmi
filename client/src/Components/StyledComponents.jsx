import React from 'react';

import styled from 'styled-components';
import { px2vw, colors } from '../GlobalStyles';
export const AppContainer = styled.div`
	display: flex;
	flex-flow: column;
	align-items: center;
`;

export const Section = styled.section`
	padding: 5em;
	display: flex;
	min-height: 100%;
	min-width: 100vw;
	align-items: center;
	text-align: left;

	flex: 1;
	&.section-1 {
		background: ${colors.primary};

		align-items: center;

		color: white;
	}
`;

export const GridContainer = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 100%;
	max-height: 100%;
	flex: 1;
	justify-content: space-around;
	align-content: stretch;
	/* margin: ${px2vw(32)}; */
	/* height: 100%; */
	/* max-width: 100%; */
`;

export const GridRow = styled.div`
	display: flex;
	flex: 1;
	min-height: 100%;
	justify-content: space-between;
	align-items: stretch;
`;

export const GridCol = styled.div`
	display: flex;
	padding: 1em;
	flex: ${(props) => (props ? props.size : 1)};
	border: 1px solid red;
	display: block;
	align-items: stretch;
`;
