/* eslint-disable indent */
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import reset from 'styled-reset';
export const colors = {
	primary: '#1E3D5D',
	secondary: '#D8E6F8',
	accent: '#E95355',
	primaryText: 'white',
	red: '#F80D0D',
	darkBlue: '#1E3D5D',
	lightBrown: '#CEC3BC',
	white: '#fff',
};

export const px2vw = (size, width = 1440) => `${(size / width) * 100}vw`;

export const GlobalStyle = createGlobalStyle`
${normalize}
${reset}

*, *::before, *:after {
    box-sizing: border-box;
	padding: 0;
	margin: 0;
}

:root {

	html, body {
		${'' /* background-color:${(props) => (props.bg ? props.bg : props.bg)}; */}
		background-color: ${colors.lightBrown};
		font-family: 'Montserrat', sans-serif;
		transition-duration:500ms;
	}

      font-size: 14px;
	  
	  font-family: 'Montserrat', sans-serif;
      @media (min-width: 768px) {
        font-size: 16px;
      }

      @media (min-width: 1024px) {
        font-size: 20px;
      }
    }


h1,h2 {
	font-family: 'Source Serif Pro', serif;
	font-weight:700;
	
	font-size:1.8em;
	line-height:1.6;
}

h2 {
	margin:1em;
}

h3 {
	font-family: 'Montserrat', sans-serif;
	font-weight:600;
	padding-top:.5em;
	padding-bottom:.5em;
}

p {
	padding-top:.5em;
	padding-bottom:.5em;
	line-height:1.4em;
	font-weight:400;
}

img {
	width:100%;
}

.App {
	min-height: 100vh;
	${'' /* height: 100vh; */}
	width: 100vw;
}

.StikstofImage {
	height: 20%;
	width: auto;
}

.imageRight {
	width: 50%;
	display: flex;
	flex-direction: column;
}

.textLeft {
	padding: 1em;
	position: absolute;
	top: 10%;
	left: 30vw;
	width: 50vw;
	color: ${colors.darkBlue};
	background-color: ${colors.lightBrown};
}

`;
