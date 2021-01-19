import React, { forwardRef, useState, useEffect } from 'react';

import {
	Section,
	FlexContainer,
	FlexItem,
	SectionTitle,
	FlexTextItem,
} from '../Components/StyledComponents';

import no2desc from '../assets/no2desc.svg';

const OriginNo = (props) => {
	// const { childRef } = props;
	// const [state, setState] = useState();

	// useEffect(() => {
	// 	childRef.current = state;
	// }, [state]);

	return (
		<Section justifyContent="stretch">
			<FlexContainer
				darkTheme
				alignItems="space-between"
				justifyContent="stretch"
			>
				<SectionTitle alignSelf="flex-end">
					<h2>Waar komt deze luchtvervuiling vandaan? </h2>
				</SectionTitle>
				<FlexItem
					flexGrow="1"
					alignItems="center"
					justifyContent="space-evenly"
					flexDirection="row"
				></FlexItem>
			</FlexContainer>
		</Section>
	);
};

export default OriginNo;

//ik zit nog in die call trouwens lol
