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
    box-sizing:border-box;
	text-overflow: ellipsis; 
	padding:0;
	margin:0;
}



h1,h2 {
	font-family: 'Source Serif Pro', serif;
	font-weight:bold;
}
h3 {

	font-family: 'Montserrat', sans-serif;
	font-weight:600;
}


body {
	font-family: 'Montserrat', sans-serif;
}


.App {
    padding:1em;
	min-height: 100vh;
	${'' /* height: 100vh; */}
	width: 100vw;
}

`;
