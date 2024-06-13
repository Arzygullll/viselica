import React from 'react';

const Images = ({ triesLeft }) => {
	return (
		<>
			<img
				className='hangman-img'
				src={`img/hg-${10 - triesLeft}.png`}
				alt='image'
			/>
		</>
	);
};

export default Images;
