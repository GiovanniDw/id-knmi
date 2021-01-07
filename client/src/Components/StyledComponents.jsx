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
