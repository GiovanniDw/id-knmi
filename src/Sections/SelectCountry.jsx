import React from 'react';
import {
	GridContainer,
	GridRow,
	GridCol,
	Section,
	FlexContainer,
	FlexItem,
} from '../Components/StyledComponents';

const SelectCountry = (props) => {
	const { countries, setActiveCountry } = props;

	return (
		<Section>
			<FlexContainer>
				<FlexItem>
					<h2>
						Er is veel luchtvervuiling in Europa.
						<br /> Welk land wil je ontdekken?
					</h2>
				</FlexItem>
				<FlexItem>
					<FlexContainer flexDirection="row" alignItems="baseline">
						{countries.map((d) => (
							<FlexItem key={d.name}>
								<img src={d.icon} alt="" />
								<button onClick={() => setActiveCountry(d)}>
									{d.name}
								</button>
							</FlexItem>
						))}
					</FlexContainer>
				</FlexItem>
			</FlexContainer>
		</Section>
	);
};

export default SelectCountry;
