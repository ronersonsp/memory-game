import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Config from './Components/Config';
import './App.css';
import Game from './Components/Game/Game';
import { GameStorage } from './GameContext';


const App = () => {
	return (
		<BrowserRouter>
			<GameStorage>
				<Routes>
					<Route path='/' end element={<Config />} />
					<Route path='/game' element={<Game />} />
				</Routes>
			</GameStorage>
		</BrowserRouter>
	);
};

export default App;
