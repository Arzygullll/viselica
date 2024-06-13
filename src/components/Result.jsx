import React from 'react';

const Result = ({ status, word }) => {
	return (
		<div className='flex flex-col justify-center'>
			{status === 'win' && (
				<>
					<img className='hangman-img' src='img/hg-win.png' alt='altushka' />
					<h2 className='text-2xl text-center font-bold mt-4 text-lime-600'>
						You won!
					</h2>
				</>
			)}
			{status === 'lose' && (
				<>
					<h2 className='text-2xl text-center font-bold mt-4 text-red-600'>
						You lose :(
					</h2>
				</>
			)}
			<p className='text-center'>
				The word was: <span className='result-word'>{word}</span>
			</p>
			<button
				className='button-primary px-5 mt-5 text-center'
				onClick={() => window.location.reload()}
			>
				Play again
			</button>
		</div>
	);
};

export default Result;
