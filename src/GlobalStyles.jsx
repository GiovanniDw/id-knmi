import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import reset from 'styled-reset';
export const colors = {
	primary: '#12184D',
	secondary: 'red',
	red: '#F80D0D',
	darkBlue: '#12184D',
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
      font-size: 14px;
	  font-family: 'Montserrat', sans-serif;
      @media (min-width: 768px) {
        font-size: 18px;
      }

      @media (min-width: 1024px) {
        font-size: 20px;
      }
    }


h1,h2 {
	font-family: 'Source Serif Pro', serif;
	font-weight:bold;
	text-align:center;
	font-size:1.8em;
}

h2 {
	margin:1em;
}
h3 {

font-family: 'Montserrat', sans-serif;
font-weight:600;
}

p {
	line-height:1.4em;
}
img {
	width:100%;
}

.InitialHeading {
	text-align: center;
	line-height: 150%;
	font-size: 2em;
	overflow-y: hidden;
}



body {
	font-family: 'Montserrat', sans-serif;
}

.App {
	min-height: 100vh;
	${'' /* height: 100vh; */}
	width: 100vw;
}
p {padding-top:1em;}

`;
