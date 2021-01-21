import * as React from 'react';

export function Car(props) {
	return (
		<svg
			width="1em"
			height="1em"
			viewBox="0 0 175 88"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={props.className}
			ref={props.selectChildRef}
		>
			<path
				d="M39.777 3.743A20 20 0 0151.426 0h51.77a20 20 0 0115.297 7.116l13.645 16.2a7.998 7.998 0 004.708 2.721l19.374 3.471a20 20 0 0116.42 18.219l.36 4.896.75 10.188.276 3.748A6 6 0 01168.042 73H8a8 8 0 01-8-8V42.519a20 20 0 018.35-16.257l31.427-22.52z"
				fill="#2C4C9C"
			/>
			<path
				d="M104.258 5H74.5a3 3 0 00-3 3v24.5a3 3 0 003 3h48c3.28-.174 8 0 4.5-8.5L110.3 7.757A8.001 8.001 0 00104.258 5zM51.106 5H62a3 3 0 013 3v24.5a3 3 0 01-3 3H24.735c-3.28-.174-9.235-.5-5.735-9L46.394 6.535A8 8 0 0151.106 5z"
				fill="#C4C4C4"
			/>
			<circle cx={142.5} cy={74.5} r={13.5} fill="#24242C" />
			<circle cx={142.5} cy={75.159} r={4.939} fill="#6A6A6A" />
			<circle cx={32.5} cy={74.5} r={13.5} fill="#24242C" />
			<circle cx={32.5} cy={75.159} r={4.939} fill="#6A6A6A" />
			<path
				d="M71.5 40a1 1 0 011-1h7a1 1 0 011 1v1a1 1 0 01-1 1h-7a1 1 0 01-1-1v-1z"
				fill="#C4C4C4"
			/>
			<rect x={56} y={39} width={9} height={3} rx={1} fill="#C4C4C4" />
		</svg>
	);
}

export default Car;
