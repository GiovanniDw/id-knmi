import React from 'react';
import {
	FlexContainer,
	FlexItem,
	SectionTitle,
	LightSection,
} from '../Components/StyledComponents';

const SelectCountry = (props) => {
	const { countries, setActiveCountry } = props;
	return (
		<LightSection justifyContent="stretch">
			<FlexContainer alignItems="space-between" justifyContent="stretch">
				<SectionTitle alignSelf="flex-start">
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
					>
						{countries.map((d) => (
							<FlexItem darkTheme key={d.name} flexGrow="1">
								<img
									src={d.icon}
									style={{ fill: 'blue' }}
									alt=""
								/>
								<button onClick={() => setActiveCountry(d)}>
									{d.name}
								</button>
							</FlexItem>
						))}
					</FlexContainer>
				</FlexItem>
			</FlexContainer>
		</LightSection>
	);
};

export default SelectCountry;
