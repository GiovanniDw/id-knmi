import React, { forwardRef, useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import styled from 'styled-components';

import {
	Section,
	FlexContainer,
	FlexItem,
	SectionTitle,
	FlexTextItem,
	SmallSection,
} from '../Components/StyledComponents';

import {
	Road,
	PlaneBlue,
	PlaneRed,
	CruiseShip,
	ContainerShip,
} from '../Components/svg';

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
	align-content: space-around;

	.airport {
		position: relative;
		left: 0;
		bottom: 0;
		width: 100%;
		overflow: hidden;
		.plane {
			position: absolute;
			width: 25%;
			height: 100px;
			bottom: 1em;
			left: 50%;

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

const OriginNo = (props) => {
	const fifthHeadingRef = useRef();
	const movingElementOneRef = useRef();
	const movingElementTwoRef = useRef();

	useEffect(() => {
		gsap.from(fifthHeadingRef.current, {
			y: -150,
			duration: 0.5,
		});

		gsap.to(fifthHeadingRef.current, {
			y: 0,
			duration: 0.5,
			scrollTrigger: {
				trigger: fifthHeadingRef.current,
				// top refers to the element bottom refers to bottom of the viewport height
				start: 'bottom 80%',
				end: '+=50%',
				// markers: true,
				scrub: 0.3,
				toggleActions: 'restart pause reverse pause',
			},
		});
	}, [fifthHeadingRef]);

	useEffect(() => {
		gsap.from(movingElementOneRef.current, {
			x: -100,
		});

		gsap.to(movingElementOneRef.current, {
			x: 200,
			scrollTrigger: {
				trigger: movingElementOneRef.current,
				start: 'top bottom',
				end: 'bottom top',
				// markers: true,
				scrub: 0.3,
				toggleActions: 'restart pause reverse pause',
			},
		});
	}, [movingElementOneRef]);

	useEffect(() => {
		gsap.from(movingElementTwoRef.current, {
			x: 0,
		});

		gsap.to(movingElementTwoRef.current, {
			x: 200,
			scrollTrigger: {
				trigger: movingElementTwoRef.current,
				start: 'top bottom',
				end: 'bottom top',
				// markers: true,
				scrub: 0.3,
				toggleActions: 'restart pause reverse pause',
			},
		});
	}, [movingElementTwoRef]);

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
					<h2 ref={fifthHeadingRef}>
						Waar komt deze luchtvervuiling vandaan?{' '}
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
							<PlaneRed
								selectChildRef={movingElementOneRef}
								className="plane red"
							/>
							<PlaneBlue
								selectChildRef={movingElementTwoRef}
								className="plane blue"
							/>
						</div>
						<div className="airport">
							<Road className="road" />
							<PlaneRed className="plane red" />
							<PlaneBlue className="plane blue" />
						</div>
						<div className="airport">
							<Road type="water" className="road" />
							<CruiseShip className="plane red" />
							<ContainerShip className="plane blue" />
						</div>
					</AnimatedContiner>
				</FlexContainer>
			</FlexContainer>
		</SmallSection>
	);
};

export default OriginNo;
