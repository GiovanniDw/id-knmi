import React from 'react';

import styled from 'styled-components';
import { px2vw, colors } from '../GlobalStyles';

export const AppContainer = styled.div`
	flex-flow: column;
	align-items: stretch;
	max-width: 100vw;
	scroll-snap-type: y mandatory;
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
	min-width: 100%;

	align-items: center;
	/* background-color: ${(props) => (props.bg ? colors.primary : 'white')}; */
	background: ${(props) =>
		props.darkTheme ? colors.darkBlue : colors.white};
	color: white;
	padding: 7%;
	border: 1px solid green;
	scroll-snap-align: start;
`;

export const LightSection = styled(Section)`
	background-color: ${colors.lightBlue};
	color: ${colors.darkBlue};
`;

export const GridContainer = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 100%;

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

export const FlexContainer = styled.div`
	display: flex;
	flex-direction: ${(props) => props.flexDirection || 'column'};
	color: ${(props) => (props.darkTheme ? colors.white : colors.darkBlue)};
	background: ${(props) => (props.darkTheme ? colors.darkBlue : '')};
	align-items: stretch;
	justify-content: space-around;
	flex: 1;
`;

export const FlexItem = styled.div`
	display: flex;
	flex-direction: column;
	padding: 1em;
	color: ${(props) => (props.darkTheme ? colors.white : colors.darkBlue)};
	background: ${(props) => (props.darkTheme ? colors.lightBlue : '')};
	flex: 1;
`;

export const SectionTitle = styled(FlexItem)`
	color: ${colors.white};
	background-color: ${colors.darkBlue};
	width: 70%;
	text-align: left;
`;

export const PositionSection = styled.div`
	position: relative;
`;
