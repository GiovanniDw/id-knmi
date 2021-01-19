import React from 'react';
import {
	GridContainer,
	GridRow,
	GridCol,
	Section,
	FlexContainer,
	FlexItem,
	SectionTitle,
	LightSection,
} from '../Components/StyledComponents';

const SelectCountry = (props) => {
	const { countries, setActiveCountry } = props;

	return (
		<LightSection>
			<FlexContainer>
				<SectionTitle>
					<h2>
						Er is veel luchtvervuiling in Europa.
						<br /> Welk land wil je ontdekken?
					</h2>
				</SectionTitle>
				<FlexItem>
					<FlexContainer flexDirection="row" alignItems="stretch">
						{countries.map((d) => (
							<FlexItem key={d.name}>
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
