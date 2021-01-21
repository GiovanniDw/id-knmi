import * as React from 'react';

export function Bus(props) {
	return (
		<svg
			width="1em"
			height="1em"
			viewBox="0 0 390 146"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={props.className}
			ref={props.selectChildRef}
		>
			<path
				d="M0 15.288a8 8 0 018-8h339a8 8 0 018 8v102a8 8 0 01-8 8H8a8 8 0 01-8-8v-102z"
				fill="#FCCC04"
			/>
			<path
				d="M335 28.288h-36v96h36v-96zM149 28.288h-36v96h36v-96zM185 28.288h-36v96h36v-96z"
				fill="#C4C4C4"
				stroke="#24242C"
				strokeWidth={4}
			/>
			<path
				fill="#C4C4C4"
				stroke="#24242C"
				strokeWidth={2}
				d="M6 17.288h49v51H6zM57 17.288h49v51H57zM192 17.288h49v51h-49zM243 17.288h49v51h-49zM344 17.288h10v51h-10z"
			/>
			<path
				fill="#24242C"
				d="M114 117.288h70v7h-70zM300 117.288h35v7h-35zM114 28.288h70v5h-70zM111 10.288h76v13h-76zM299 28.288h36v5h-36z"
			/>
			<path
				d="M122.048 19.248l.992-5.496c.005-.021.019-.032.04-.032h1.16c.021 0 .035.01.04.032l.952 5.496c.005.027-.005.04-.032.04h-.888c-.021 0-.035-.013-.04-.04l-.088-.584h-1.088l-.088.584c-.005.027-.019.04-.04.04h-.888c-.021 0-.032-.013-.032-.04zm1.208-1.44h.768l-.328-2.248-.048-.296-.032.296-.36 2.248zm3.11 1.48c-.021 0-.032-.013-.032-.04l.016-5.496c0-.021.011-.032.032-.032h.976c.021 0 .04.01.056.032l.728 1.056.728-1.056c.016-.021.035-.032.056-.032h.984c.021 0 .032.01.032.032l.016 5.496c0 .027-.011.04-.032.04h-.904c-.021 0-.032-.013-.032-.04l-.008-4.08-.84 1.216-.832-1.216-.008 4.08c0 .027-.011.04-.032.04h-.904zm6.225.08a1.51 1.51 0 01-.792-.216 1.746 1.746 0 01-.568-.584 1.61 1.61 0 01-.208-.808v-.368c0-.027.013-.04.04-.04h.896c.021 0 .032.013.032.04v.368c0 .176.059.328.176.456a.565.565 0 00.424.184.555.555 0 00.424-.192.644.644 0 00.176-.448c0-.197-.128-.368-.384-.512l-.4-.224a108.75 108.75 0 01-.512-.288 1.724 1.724 0 01-.656-.64 1.844 1.844 0 01-.208-.88c0-.299.072-.565.216-.8.144-.24.333-.43.568-.568.24-.139.499-.208.776-.208.283 0 .541.072.776.216.24.139.429.328.568.568.144.235.216.499.216.792v.656c0 .021-.011.032-.032.032h-.896c-.021 0-.032-.01-.032-.032l-.008-.656a.618.618 0 00-.176-.456.568.568 0 00-.84.016.616.616 0 00-.176.44c0 .176.037.323.112.44.075.117.211.23.408.336l.152.088c.08.037.165.083.256.136.091.048.171.09.24.128.075.037.12.061.136.072.267.15.477.333.632.552.155.213.232.477.232.792 0 .304-.072.579-.216.824-.139.24-.328.432-.568.576a1.513 1.513 0 01-.784.208zm3.485-.08c-.021 0-.032-.013-.032-.04v-4.56h-1.04c-.026 0-.04-.013-.04-.04l.008-.896c0-.021.011-.032.032-.032h3.04c.027 0 .04.01.04.032v.896c0 .027-.01.04-.032.04h-1.048l.008 4.56c0 .027-.01.04-.032.04h-.904zm3.035 0c-.021 0-.032-.013-.032-.04l.008-5.496c0-.021.011-.032.032-.032h2.568c.022 0 .032.013.032.04v.896c0 .021-.01.032-.032.032h-1.64v1.248h1.64c.022 0 .032.01.032.032l.008.904c0 .021-.01.032-.032.032h-1.648v1.4h1.648c.022 0 .032.013.032.04v.912c0 .021-.01.032-.032.032h-2.584zm3.96 0c-.022 0-.032-.013-.032-.04l.008-5.488c0-.027.013-.04.04-.04h.888c.026 0 .04.013.04.04l-.008 4.544h1.648c.026 0 .04.013.04.04v.904c0 .027-.014.04-.04.04h-2.584zm6.687.08c-.294 0-.56-.072-.8-.216a1.648 1.648 0 01-.768-1.416l.008-2.496a1.584 1.584 0 01.76-1.384c.24-.15.506-.224.8-.224.293 0 .557.072.792.216a1.6 1.6 0 01.56.584c.138.24.208.51.208.808v.368c0 .021-.011.032-.032.032h-.896c-.022 0-.032-.01-.032-.032v-.368a.654.654 0 00-.176-.456.54.54 0 00-.424-.192.519.519 0 00-.44.2.697.697 0 00-.152.448v2.496c0 .197.056.357.168.48a.564.564 0 00.424.184c.17 0 .312-.067.424-.2a.702.702 0 00.176-.464v-.368c0-.021.01-.032.032-.032h.904c.021 0 .032.01.032.032v.368c0 .304-.072.579-.216.824a1.665 1.665 0 01-.56.592 1.485 1.485 0 01-.792.216zm2.793-.08c-.027 0-.04-.013-.04-.04l.008-5.496c0-.021.01-.032.032-.032h.896c.021 0 .032.01.032.032l.008 5.496c0 .027-.011.04-.032.04h-.904zm3.039 0c-.021 0-.032-.013-.032-.04v-4.56h-1.04c-.026 0-.04-.013-.04-.04l.008-.896c0-.021.011-.032.032-.032h3.04c.027 0 .04.01.04.032v.896c0 .027-.01.04-.032.04h-1.048l.008 4.56c0 .027-.01.04-.032.04h-.904zm3.747 0c-.016 0-.024-.01-.024-.032l.008-2.272-1.072-3.232c-.005-.021.003-.032.024-.032h.888c.027 0 .043.01.048.032l.592 2.152.6-2.152c.006-.021.019-.032.04-.032h.896c.022 0 .03.01.024.032l-1.08 3.2.008 2.304c0 .021-.01.032-.032.032h-.92zm4.887 0c-.021 0-.032-.013-.032-.04l.016-5.496c0-.021.011-.032.032-.032h1.536c.304 0 .576.075.816.224.24.144.429.336.568.576.139.24.208.501.208.784 0 .23-.053.443-.16.64a1.546 1.546 0 01-.368.48 1.653 1.653 0 01.488 1.176c0 .31-.075.592-.224.848a1.723 1.723 0 01-.608.616c-.251.15-.531.224-.84.224h-1.432zm.944-3.36h.608a.565.565 0 00.448-.192.644.644 0 00.176-.432.6.6 0 00-.184-.44.588.588 0 00-.44-.192h-.608v1.256zm-.008 2.384h.496c.192 0 .357-.07.496-.208a.702.702 0 00.208-.504.676.676 0 00-.208-.496.678.678 0 00-.496-.208h-.488l-.008 1.416zm4.815 1.056c-.283 0-.544-.072-.784-.216a1.61 1.61 0 01-.784-1.4l.016-4c0-.021.01-.032.032-.032h.896c.021 0 .032.01.032.032v4a.68.68 0 00.168.464.564.564 0 00.424.184.55.55 0 00.424-.184.664.664 0 00.176-.464v-4c0-.021.01-.032.032-.032h.896c.021 0 .032.01.032.032l.016 4c0 .299-.072.57-.216.816-.139.245-.328.44-.568.584a1.485 1.485 0 01-.792.216zm4.168 0a1.51 1.51 0 01-.792-.216 1.746 1.746 0 01-.568-.584 1.61 1.61 0 01-.208-.808v-.368c0-.027.013-.04.04-.04h.896c.021 0 .032.013.032.04v.368a.65.65 0 00.176.456.564.564 0 00.424.184.556.556 0 00.424-.192.644.644 0 00.176-.448c0-.197-.128-.368-.384-.512l-.4-.224a74.282 74.282 0 01-.512-.288 1.717 1.717 0 01-.656-.64 1.844 1.844 0 01-.208-.88c0-.299.072-.565.216-.8.144-.24.333-.43.568-.568.24-.139.498-.208.776-.208.282 0 .541.072.776.216.24.139.429.328.568.568.144.235.216.499.216.792v.656c0 .021-.011.032-.032.032h-.896c-.022 0-.032-.01-.032-.032l-.008-.656a.618.618 0 00-.176-.456.57.57 0 00-.84.016.612.612 0 00-.176.44c0 .176.037.323.112.44.074.117.21.23.408.336l.152.088c.08.037.165.083.256.136l.24.128c.074.037.12.061.136.072.266.15.477.333.632.552.154.213.232.477.232.792 0 .304-.072.579-.216.824-.139.24-.328.432-.568.576a1.513 1.513 0 01-.784.208z"
				fill="#FAA309"
			/>
			<rect
				x={376}
				y={26.288}
				width={7}
				height={16}
				rx={2}
				fill="#24242C"
			/>
			<path
				d="M342.987 15.123l29.807.178a8 8 0 017.952 7.952l.076 12.603"
				stroke="#24242C"
				strokeWidth={3}
			/>
			<circle cx={76.5} cy={124.788} r={20.5} fill="#24242C" />
			<circle cx={76.5} cy={125.788} r={7.5} fill="#6A6A6A" />
			<circle cx={263.5} cy={124.788} r={20.5} fill="#24242C" />
			<circle cx={263.5} cy={125.788} r={7.5} fill="#6A6A6A" />
		</svg>
	);
}

export default Bus;