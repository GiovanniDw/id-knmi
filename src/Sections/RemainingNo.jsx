import React, { forwardRef, useState, useEffect } from 'react';

import styled from 'styled-components';

import {
	Section,
	FlexContainer,
	FlexItem,
	SectionTitle,
	FlexTextItem,
	SmallSection,
} from '../Components/StyledComponents';

import { Road, PlaneBlue, PlaneRed } from '../Components/svg';

const RemainingNo = (props) => {
	// const { childRef } = props;
	// const [state, setState] = useState();

	// useEffect(() => {
	// 	childRef.current = state;
	// }, [state]);

	return (
		<SmallSection>
			<FlexContainer
				darkTheme
				alignItems="space-between"
				justifyContent="stretch"
			>
				<SectionTitle alignSelf="flex-end">
					<h2>
						Deze vervuiling valt weg, maar de grootste vervuilers
						blijven over
					</h2>
				</SectionTitle>
				<FlexContainer
					flexGrow="1"
					alignItems="flex-start"
					flexDirection="column"
					darkTheme
				>
					<AnimatedContiner>
						<div className="airport">
							<Road className="road" />
							<PlaneRed className="plane red" />
							<PlaneBlue className="plane blue" />
						</div>
						<div className="airport">
							<Road className="road" />
							<PlaneRed className="plane red" />
							<PlaneBlue className="plane blue" />
						</div>
						<div className="airport">
							<Road fill="blue" className="road" />
							<PlaneRed className="plane red" />
							<PlaneBlue className="plane blue" />
						</div>
					</AnimatedContiner>
				</FlexContainer>
			</FlexContainer>
		</SmallSection>
	);
};

const AnimatedContiner = styled.div`
	align-self: center;
	/* height: 100%; */
	/* overflow: hidden; */
	/* border: 2px solid red; */
	width: 100%;
	height: 100%;
	/* position: relative; */
	display: flex;
	justify-content: space-around;
	flex-direction: column;
	align-content: space-space-around;

	.airport {
		position: relative;
		left: 0;
		bottom: 0;
		width: 100%;
		overflow: hidden;
		.plane {
			position: absolute;

			height: 100px;
			bottom: 1em;
			left: 50%;
			width: 25%;
			&.red {
				left: 1em;
			}
		}

		.road {
			width: 100%;
			min-height: 150px;
			bottom: 0;
		}
	}
`;

export default RemainingNo;
