import React from 'react';
import { KEYBOARD_LETTERS } from '../helpers/consts';

const KeyBoard = ({ checkLetter }) => {
	const handleClick = event => {
		checkLetter(event.target.id);
		event.target.disabled = true;
	};

	return (
		<>
			{KEYBOARD_LETTERS.map((letter, index) => (
				<button
					onClick={event => handleClick(event)}
					id={letter}
					key={index}
					className='button-primary keyboard-button'
				>
					{letter}
				</button>
			))}
		</>
	);
};

export default KeyBoard;
