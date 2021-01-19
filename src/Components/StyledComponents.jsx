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
	max-width: 100%;

	align-items: stretch;

	justify-content: ${(props) => props.justifyContent || 'stretch'};
	/* background-color: ${(props) => (props.bg ? colors.primary : 'white')}; */
	background: ${(props) => (props.darkTheme ? colors.darkBlue : '')};
	color: white;
	padding-left: 7%;
	padding-right: 7%;
	border-top: 1px solid ${colors.lightBrown};
	scroll-snap-align: start;
`;

export const LightSection = styled(Section)`
	/* padding-top: 3em; */
	background-color: ${colors.lightBlue};
	color: ${colors.darkBlue};
`;

export const FlexContainer = styled.div`
	display: flex;

	color: ${(props) => (props.darkTheme ? colors.white : colors.darkBlue)};
	background: ${(props) =>
		props.darkTheme ? colors.darkBlue : colors.white};
	align-items: ${(props) => props.alignItems || 'stretch'};
	align-content: ${(props) => props.alignContent || 'normal'};
	justify-content: ${(props) => props.justifyContent || 'flex-start'};
	flex-grow: ${(props) => props.flexGrow || '1'};
	flex-direction: column;
	@media (min-width: 768px) {
		flex-direction: ${(props) => props.flexDirection || 'column'};
	}
`;

export const FlexItem = styled.div`
	display: flex;
	align-items: ${(props) => props.alignItems || 'stretch'};
	/* flex-direction: column; */
	justify-content: ${(props) => props.justifyContent || 'flex-start'};
	flex-direction: ${(props) => props.flexDirection || 'column'};
	padding-left: 1em;
	padding-right: 1em;
	color: ${(props) => (props.darkTheme ? colors.white : colors.darkBlue)};
	background: ${(props) => (props.darkTheme ? colors.darkBlue : '')};
	flex-grow: ${(props) => props.flexGrow || '0'};
	align-self: ${(props) => props.alignSelf || 'auto'};
	word-wrap: normal;
`;

export const SectionTitle = styled(FlexItem)`
	color: ${colors.white};
	background-color: ${colors.darkBlue};
	max-width: 70%;

	align-self: ${(props) => props.alignSelf || 'left'};
`;

export const PositionSection = styled.div`
	position: relative;
`;
