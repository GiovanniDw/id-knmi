import React from 'react';

import styled from 'styled-components';
import { px2vw, colors } from '../GlobalStyles';

export const AppContainer = styled.div`
	display: flex;
	flex-flow: column;
	align-items: stretch;
	max-width: 100vw;
`;

export const Intro = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	min-height: 100vh;
	min-width: 100vw;
	background-color: ${colors.primary};
	color: red;
`;

export const Section = styled.section`
	display: flex;
	min-height: 100vh;
	min-width: 100vw;
	height: 100vh;
	align-items: center;
	text-align: left;
	flex: 1;
	background-color: ${colors.primary};
	color: white;
	padding: 7%;
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
	border: 1px solid blue;
`;

export const GridRow = styled.div`
	display: flex;
	flex: 1;
	min-height: 100%;
	justify-content: space-between;
	align-items: stretch;
`;

export const GridCol = styled.div`
	padding: 1em;
	flex: ${(props) => (props ? props.size : 1)};
	border: 1px solid red;
	display: block;
	align-items: stretch;
`;
