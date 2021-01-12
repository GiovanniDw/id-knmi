import React from 'react';

import styled from 'styled-components';
import { colors } from '../GlobalStyles';
export const Loading = () => (
	<LoadingContainer>
		<StyledSpinner viewBox="0 0 50 50">
			<circle
				className="path"
				cx="25"
				cy="25"
				r="20"
				fill="none"
				strokeWidth="4"
			/>
			<circle
				className="path"
				cx="25"
				cy="25"
				r="20"
				fill="none"
				strokeWidth="4"
			/>
			<circle
				className="path"
				cx="25"
				cy="25"
				r="20"
				fill="none"
				strokeWidth="4"
			/>
		</StyledSpinner>
	</LoadingContainer>
);

export const StyledSpinner = styled.svg`
	animation: rotate 2s linear infinite;
	margin: -25px 0 0 -25px;
	width: 50px;
	height: 50px;

	& .path {
		stroke: ${colors.secondary};
		stroke-linecap: round;
		animation: dash 1.5s ease-in-out infinite;
	}

	@keyframes rotate {
		100% {
			transform: rotate(360deg);
		}
	}

	@keyframes dash {
		0% {
			stroke-dasharray: 1, 150;
			stroke-dashoffset: 0;
		}
		50% {
			stroke-dasharray: 90, 150;
			stroke-dashoffset: -35;
		}
		100% {
			stroke-dasharray: 90, 150;
			stroke-dashoffset: -124;
		}
	}
`;

const LoadingContainer = styled.div`
	height: 100%;
	width: 100%;
	background: ${colors.primary};
	z-index: 4;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export default Loading;
