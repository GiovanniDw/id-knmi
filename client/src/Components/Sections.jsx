import React from 'react';

import { Section } from './StyledComponents';

export const Sections = ({ children }) => {
	children.map((Child) => (
		<Section key={Child}>
			<Child />
		</Section>
	));
};

export default Section;
