import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Preview from '../pages/Preview';
import StartGame from '../pages/StartGame';

const MainRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Preview />} />
			<Route path='/game' element={<StartGame />} />
		</Routes>
	);
};

export default MainRoutes;
