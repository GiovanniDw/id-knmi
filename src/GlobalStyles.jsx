import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const colors = {
	primary: '#12184D',
	secondary: 'red',
};

export const px2vw = (size, width = 1440) => `${(size / width) * 100}vw`;

export const GlobalStyle = createGlobalStyle`
${normalize}


*, *::before, *:after {
    box-sizing: border-box;
	text-overflow: ellipsis; 
	padding: 0;
	margin: 0;
	overflow-x: hidden;
}

h1,h2 {
	font-family: 'Source Serif Pro', serif;
	font-weight:bold;
}

.framerSolution {
	max-width: 60vw;
	text-align: center;
	line-height: 150%;
	font-size: 3.3em;
	overflow-y: hidden;
	position: absolute;
	top: 25vh;
	left: 50vw;
	transform: translate(-50%, -50%);
}

h3 {

	font-family: 'Montserrat', sans-serif;
	font-weight:600;
}

body {
	font-family: 'Montserrat', sans-serif;
}

.App {
	min-height: 100vh;
	${'' /* height: 100vh; */}
	width: 100vw;
}

`;
