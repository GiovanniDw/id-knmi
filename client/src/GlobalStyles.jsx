import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const colors = {
	primary: 'blue',
	secondary: 'red',
};

export const GlobalStyle = createGlobalStyle`
${normalize}
* {
    box-sizing:border-box;
}
.App {
    padding:1em;
	text-align: center;
	min-height: 100%;
	height: 100vh;
	width: 100vw;
}

`;
