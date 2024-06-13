import React from 'react';
import { NavLink } from 'react-router-dom';

const Preview = () => {
	return (
		<>
			<div className='mt-5 flex flex-col items-center'>
				<NavLink className='button-primary' to={'/game'}>
					Start Game
				</NavLink>
			</div>
		</>
	);
};

export default Preview;
