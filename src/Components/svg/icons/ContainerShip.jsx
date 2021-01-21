import * as React from 'react';

export function ContainerShip(props) {
	return (
		<svg
			width="1em"
			height="1em"
			viewBox="0 0 500 146"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={props.className}
			ref={props.selectChildRef}
		>
			<path fill="#F4F4F4" d="M15 49h148v77H15z" />
			<path
				fill="#F4F4F4"
				d="M29 32h123v18H29zM96.5 0h64L152 32H96.5V0z"
			/>
			<path
				d="M0 70h117.41a20 20 0 0116.542 8.76l14.596 21.48A19.998 19.998 0 00165.09 109h194.062a19.998 19.998 0 0015.852-7.806l17.992-23.388A19.998 19.998 0 01408.848 70H499.5l-45 76H20c-11.046 0-20-8.954-20-20V70z"
				fill="#24242C"
			/>
			<circle cx={26} cy={60} r={5} fill="#24242C" />
			<circle cx={44} cy={60} r={5} fill="#24242C" />
			<circle cx={62} cy={60} r={5} fill="#24242C" />
			<circle cx={98} cy={60} r={5} fill="#24242C" />
			<circle cx={80} cy={60} r={5} fill="#24242C" />
			<circle cx={116} cy={60} r={5} fill="#24242C" />
			<circle cx={134} cy={60} r={5} fill="#24242C" />
			<circle cx={152} cy={60} r={5} fill="#24242C" />
			<path
				fill="#24242C"
				d="M35 36h12v9H35zM55 36h12v9H55zM75 36h12v9H75zM102 4h12v9h-12zM122 4h12v9h-12zM142 4h12l-2.5 9H142V4zM95 36h12v9H95zM115 36h12v9h-12zM135 36h12v9h-12z"
			/>
			<path fill="#FCCC04" d="M180 84h57v25h-57z" />
			<path fill="#298CD5" d="M238 59h57v25h-57z" />
			<path fill="#272F71" d="M238 84h57v25h-57zM296 60h57v25h-57z" />
			<path fill="#298CD5" d="M296 84h57v25h-57z" />
		</svg>
	);
}

export default ContainerShip;
