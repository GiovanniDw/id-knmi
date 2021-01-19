import React from 'react';

import { colors } from '../GlobalStyles';
import styled from 'styled-components';
import {
	FlexContainer,
	PositionSection,
	SectionTitle,
	Section,
} from '../Components/StyledComponents';
import NoTwoImage from '../Components/NoTwoImage';

export const NoTwoExplination = () => {
	return (
		<AlternativeSection>
			<PositionSection>
				<SectionTitle>
					<h2>
						Over welke luchtvervuiling <br /> hebben we het?
					</h2>
				</SectionTitle>
				<NoTwoImage />
				<div className="textRight">
					<h3>Wat is NO2?</h3>
					<p>
						NO2 of stikstofdioxide is een stof die vrijkomt bij
						verbrandingsprocessen. Stikstofdioxide (NO2) is een gas
						dat in Nederland voor een groot gedeelte door het
						autoverkeer wordt geproduceerd.
					</p>
					<p>
						Wanneer mensen stikstofdioxide inademen, kan dit leiden
						tot longirritatie, verminderde weerstand, en infecties
						van de luchtwegen. Chronische blootstelling aan huidige
						niveaus van stikstofdioxide leidt tot een gemiddelde
						levensduur verkorting van 4 maanden. Er was al langere
						tijd bekend dat fijn stof leidt tot vroegere sterfte.
					</p>
				</div>
			</PositionSection>
		</AlternativeSection>
	);
};

export default NoTwoExplination;

const AlternativeSection = styled(Section)`
	.imageLeft {
		flex-direction: row;
		flex-wrap: wrap;
		position: absolute;
		left: 0;
		width: 50vw;

		img {
			height: 30vh;
			width: 50vw;
		}
	}

	.textRight {
		padding: 2em;
		position: absolute;
		top: 15vh;
		right: 0;
		width: 50vw;
		color: ${colors.darkBlue};
		background-color: ${colors.lightBrown};

		h3 {
			font-weight: black;
		}

		p {
			font-weight: 600;
		}
	}
`;
