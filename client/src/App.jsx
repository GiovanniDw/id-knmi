import React, { useState, useEffect } from 'react';
import Map from './Components/Map';

import { GlobalStyle } from './GlobalStyles';

const App = () => {
	// const data = ServerService();

	return (
		<>
			<div className='App'>
				<Map />
			</div>
			<GlobalStyle />
		</>
	);
};

export default App;
