import * as React from 'react';

export function Truck(props) {
	return (
		<svg
			width="1em"
			height="1em"
			viewBox="0 0 237 138"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={props.className}
			ref={props.selectChildRef}
		>
			<path
				d="M221.985 22H176v96h53.023c4.88-.429 7.977-2.682 7.977-8.045V73.486L221.985 22z"
				fill="#F4F4F4"
			/>
			<path
				d="M0 6a6 6 0 016-6h164a6 6 0 016 6v106a6 6 0 01-6 6H6a6 6 0 01-6-6V6z"
				fill="#EC1C24"
			/>
			<path fill="#272F71" d="M162.852 109H176v9h-13.148z" />
			<rect x={185} y={73} width={9} height={3} rx={1} fill="#C4C4C4" />
			<path
				d="M215.908 30H185v39h38.5c3.064-.163 2.585-2.92 2.509-5.058a3.423 3.423 0 00-.137-.865L215.908 30z"
				fill="#C4C4C4"
			/>
			<circle cx={50.5} cy={117.5} r={20.5} fill="#24242C" />
			<circle cx={50.5} cy={118.5} r={7.5} fill="#6A6A6A" />
			<circle cx={175.5} cy={117.5} r={20.5} fill="#24242C" />
			<circle cx={175.5} cy={118.5} r={7.5} fill="#6A6A6A" />
		</svg>
	);
}

export default Truck;
