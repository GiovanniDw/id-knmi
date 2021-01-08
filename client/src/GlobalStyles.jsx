import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const colors = {
	primary: 'blue',
	secondary: 'red',
};

export const px2vw = (size, width = 1440) => `${(size / width) * 100}vw`;

export const GlobalStyle = createGlobalStyle`
${normalize}
* {
    box-sizing:border-box;
	text-overflow: ellipsis; 
}
.App {
    padding:1em;
	text-align: center;
	min-height: 100%;
	height: 100vh;
	width: 100vw;
}

`;
