import React from 'react';

export function Road(props) {
	return (
		<svg
			width="1em"
			height="1em"
			viewBox="0 0 910 10"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path fill="#24242C" d="M0 0h912v83H0z" />
			<path
				stroke="#fff"
				strokeWidth={7}
				strokeDasharray="100 20"
				d="M1.494 38.79l908.999-1.58"
			/>
		</svg>
	);
}

export default Road;
