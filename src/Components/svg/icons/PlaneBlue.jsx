import React from 'react';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export function PlaneBlue(props) {
	return (
		<svg
			width="1em"
			height="1em"
			viewBox="0 0 594 196"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={props.className}
			ref={props.selectChildRef}
		>
			<path d="M0 0h12.899l74.5 82.5 35 9.5H25.722L0 0z" fill="#298CD5" />
			<circle cx={206.512} cy={180.434} r={15.113} fill="#24242C" />
			<circle cx={206.512} cy={181.172} r={5.529} fill="#6A6A6A" />
			<path fill="#24242C" d="M202.858 155h7.933v12.341h-7.933z" />
			<circle cx={247.06} cy={180.434} r={15.113} fill="#24242C" />
			<circle cx={247.06} cy={181.172} r={5.529} fill="#6A6A6A" />
			<path fill="#24242C" d="M243.406 155h7.933v12.341h-7.933z" />
			<circle cx={323.474} cy={180.434} r={15.113} fill="#24242C" />
			<circle cx={323.474} cy={181.172} r={5.529} fill="#6A6A6A" />
			<path fill="#24242C" d="M319.82 155h7.933v12.341h-7.933z" />
			<circle cx={364.022} cy={180.434} r={15.113} fill="#24242C" />
			<circle cx={364.022} cy={181.172} r={5.529} fill="#6A6A6A" />
			<path fill="#24242C" d="M360.368 155h7.933v12.341h-7.933z" />
			<circle cx={512.887} cy={180.434} r={15.113} fill="#24242C" />
			<circle cx={512.887} cy={181.172} r={5.529} fill="#6A6A6A" />
			<path fill="#24242C" d="M509.233 155h7.933v12.341h-7.933z" />
			<path
				d="M20.399 92h521v34.5l-12 34.5H180.07a8.002 8.002 0 01-3.202-.669L20.399 92z"
				fill="#4BB9EC"
			/>
			<rect
				x={0.399}
				y={83}
				width={80}
				height={18}
				rx={9}
				fill="#F4F4F4"
			/>
			<path
				d="M593.399 118.738c0 19.053-30.788 42.262-70 42.262s-71-15.446-71-34.5c0-19.054 31.788-34.5 71-34.5s70 7.684 70 26.738z"
				fill="#4BB9EC"
			/>
			<path
				d="M549.399 95c0 11.046-31.116 20-69.5 20s-69.5-8.954-69.5-20 56.116-19 94.5-19 44.5 7.954 44.5 19z"
				fill="#4BB9EC"
			/>
			<path
				d="M144.399 110a6 6 0 016-6h2a6 6 0 016 6v5a6 6 0 01-6 6h-2a6 6 0 01-6-6v-5zM164.399 110a6 6 0 016-6h2a6 6 0 016 6v5a6 6 0 01-6 6h-2a6 6 0 01-6-6v-5z"
				fill="#C4C4C4"
			/>
			<path
				d="M190.399 104.5h2a5.5 5.5 0 015.5 5.5v5a5.5 5.5 0 01-5.5 5.5h-2a5.5 5.5 0 01-5.5-5.5v-5a5.5 5.5 0 015.5-5.5zM210.399 104.5h2a5.5 5.5 0 015.5 5.5v5a5.5 5.5 0 01-5.5 5.5h-2a5.5 5.5 0 01-5.5-5.5v-5a5.5 5.5 0 015.5-5.5z"
				fill="#C4C4C4"
				stroke="#24242C"
			/>
			<path
				d="M224.399 110a6 6 0 016-6h2a6 6 0 016 6v5a6 6 0 01-6 6h-2a6 6 0 01-6-6v-5zM244.399 110a6 6 0 016-6h2a6 6 0 016 6v5a6 6 0 01-6 6h-2a6 6 0 01-6-6v-5zM264.399 110a6 6 0 016-6h2a6 6 0 016 6v5a6 6 0 01-6 6h-2a6 6 0 01-6-6v-5zM284.399 110a6 6 0 016-6h2a6 6 0 016 6v5a6 6 0 01-6 6h-2a6 6 0 01-6-6v-5zM304.399 110a6 6 0 016-6h2a6 6 0 016 6v5a6 6 0 01-6 6h-2a6 6 0 01-6-6v-5zM324.399 110a6 6 0 016-6h2a6 6 0 016 6v5a6 6 0 01-6 6h-2a6 6 0 01-6-6v-5zM344.399 110a6 6 0 016-6h2a6 6 0 016 6v5a6 6 0 01-6 6h-2a6 6 0 01-6-6v-5zM364.399 110a6 6 0 016-6h2a6 6 0 016 6v5a6 6 0 01-6 6h-2a6 6 0 01-6-6v-5zM384.399 110a6 6 0 016-6h2a6 6 0 016 6v5a6 6 0 01-6 6h-2a6 6 0 01-6-6v-5zM404.399 110a6 6 0 016-6h2a6 6 0 016 6v5a6 6 0 01-6 6h-2a6 6 0 01-6-6v-5zM424.399 110a6 6 0 016-6h2a6 6 0 016 6v5a6 6 0 01-6 6h-2a6 6 0 01-6-6v-5zM444.399 110a6 6 0 016-6h2a6 6 0 016 6v5a6 6 0 01-6 6h-2a6 6 0 01-6-6v-5zM464.399 110a6 6 0 016-6h2a6 6 0 016 6v5a6 6 0 01-6 6h-2a6 6 0 01-6-6v-5zM519.399 85a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2h-6a2 2 0 01-2-2v-6zM530.399 85a2 2 0 012-2h11.723l1.277 1 .86.86c.093.093.177.195.25.305l.89 1.335.5 1 .436.873c.043.084.079.172.109.262l.405 1.216c.033.1.059.2.076.304l.474 2.845h-17a2 2 0 01-2-2v-6zM484.399 110a6 6 0 016-6h2a6 6 0 016 6v5a6 6 0 01-6 6h-2a6 6 0 01-6-6v-5zM504.399 110a6 6 0 016-6h2a6 6 0 016 6v5a6 6 0 01-6 6h-2a6 6 0 01-6-6v-5zM530.399 110a6 6 0 016-6h2a6 6 0 016 6v5a6 6 0 01-6 6h-2a6 6 0 01-6-6v-5z"
				fill="#C4C4C4"
			/>
			<path
				d="M531.399 99.5h12a5.5 5.5 0 015.5 5.5v20a5.5 5.5 0 01-5.5 5.5h-12a5.5 5.5 0 01-5.5-5.5v-20a5.5 5.5 0 015.5-5.5z"
				stroke="#C4C4C4"
			/>
			<path
				d="M135.899 98.5h61.5l144 30V157l-137-25.981-68.5-32.519z"
				fill="#F4F4F4"
			/>
			<path
				d="M295.399 142.5c0-8.008 6.492-14.5 14.5-14.5h31.5a3 3 0 013 3v23a3 3 0 01-3 3h-31.5c-8.008 0-14.5-6.492-14.5-14.5z"
				fill="#298CD5"
			/>
			<rect
				x={335.399}
				y={128}
				width={9}
				height={29}
				rx={3}
				fill="#2C4C9C"
			/>
			<path
				d="M211.399 135c0-8.284 6.716-15 15-15h31a3 3 0 013 3v24a3 3 0 01-3 3h-31c-8.284 0-15-6.716-15-15z"
				fill="#298CD5"
			/>
			<rect
				x={251.399}
				y={120}
				width={9}
				height={30}
				rx={3}
				fill="#2C4C9C"
			/>
		</svg>
	);
}

export default PlaneBlue;