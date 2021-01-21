import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import useIsInViewport from 'use-is-in-viewport';
import {
	FlexContainer,
	FlexItem,
	SectionTitle,
	LightSection,
	SmallSection,
	Button,
} from '../Components/StyledComponents';

const SelectCountry = (props) => {
	const { countries, setActiveCountry } = props;

	const thirdHeadingRef = useRef();
	const countryRef = useRef();
	const startTriggerRef = useRef();

	useEffect(() => {
		gsap.from(thirdHeadingRef.current, {
			y: 150,
			duration: 0.5,
		});

		gsap.to(thirdHeadingRef.current, {
			y: 0,
			scrollTrigger: {
				trigger: thirdHeadingRef.current,
				// top refers to the element bottom refers to bottom of the viewport height
				start: 'top bottom',
				end: '+=20%',
				// markers: true,
				scrub: 0,
				toggleActions: 'restart pause reverse pause',
			},
		});
	}, [thirdHeadingRef, countryRef, startTriggerRef]);

	useEffect(() => {
		gsap.from(countryRef.current, {
			y: 0,
			opacity: 0,
			duration: 1,
		});

		gsap.to(countryRef.current, {
			y: 0,
			opacity: 1,
			scrollTrigger: {
				trigger: countryRef.current,
				// top refers to the element bottom refers to bottom of the viewport height
				start: 'top bottom',
				end: '+=20%',
				// markers: true,
				scrub: 0,
				toggleActions: 'restart pause reverse pause',
			},
		});
	}, [countryRef]);

	return (
		<SmallSection justifyContent="stretch" ref={startTriggerRef}>
			<FlexContainer alignItems="space-between" justifyContent="stretch">
				<SectionTitle ref={thirdHeadingRef} alignSelf="flex-start">
					<h2>
						Er is veel luchtvervuiling in Europa.
						<br /> Welk land wil je ontdekken?
					</h2>
				</SectionTitle>
				<FlexItem darkTheme flexGrow="1" alignItems="stretch">
					<FlexContainer
						alignItems="center"
						alignContent="center"
						flexDirection="row"
						justifyContent="space-between"
						darkTheme
						ref={countryRef}
					>
						{countries.map((d) => (
							<FlexItem darkTheme key={d.name} flexGrow="0">
								<img
									src={d.icon}
									style={{ fill: 'blue' }}
									alt=""
								/>
								<Button onClick={() => setActiveCountry(d)}>
									{d.name}
								</Button>
							</FlexItem>
						))}
					</FlexContainer>
				</FlexItem>
			</FlexContainer>
		</SmallSection>
	);
};

export default SelectCountry;
