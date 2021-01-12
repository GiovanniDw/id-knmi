import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const colors = {
	primary: '#12184D',
	secondary: 'red',
};

export const px2vw = (size, width = 1440) => `${(size / width) * 100}vw`;

export const GlobalStyle = createGlobalStyle`
${normalize}

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&family=Source+Serif+Pro:wght@700&display=swap');


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



*, *::before, *:after {
    box-sizing:border-box;
	text-overflow: ellipsis; 
	padding:0;
	margin:0;
}
.App {
    padding:1em;
	text-align: center;
	min-height: 100%;
	height: 100vh;
	width: 100vw;
}

`;
