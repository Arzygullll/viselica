import React, { useEffect, useState } from 'react';
import Images from '../components/Images';
import KeyBoard from '../components/KeyBoard';
import Result from '../components/Result';
import { WORDS } from '../helpers/consts';

const StartGame = () => {
	// const [letterId, setLetterId] = useState('');
	const [wordToGuess, setWordToGuess] = useState('');
	const [triesLeft, setTriesLeft] = useState(10);
	const [winCount, setWinCount] = useState(0);
	const [status, setStatus] = useState('');

	useEffect(() => {
		if (status === 'win' || status === 'lose') {
			sessionStorage.removeItem('word');
		}
	}, [status]);

	const checkLetter = letter => {
		const word = sessionStorage.getItem('word');
		const inputLetter = letter.toLowerCase();
		if (!word.includes(inputLetter)) {
			setTriesLeft(triesLeft - 1);
			if (triesLeft === 1) {
				setStatus('lose');
			}
		} else {
			let correctLetter = 0;
			word.split('').forEach((char, index) => {
				if (char === inputLetter) {
					document.getElementById(`letter_${index}`).innerHTML =
						inputLetter.toUpperCase();
					correctLetter++;
				}
			});
			setWinCount(winCount + correctLetter);
			if (winCount + correctLetter === word.length) {
				setStatus('win');
			}
		}
	};

	useEffect(() => {
		let storedWord = sessionStorage.getItem('word');
		if (storedWord) {
			setWordToGuess(storedWord);
		} else {
			const randomIndex = Math.floor(Math.random() * WORDS.length);
			sessionStorage.setItem('word', WORDS[randomIndex]);
			setWordToGuess(WORDS[randomIndex]);
		}
	}, []);

	if (status) {
		return <Result status={status} word={wordToGuess} />;
	}

	let letters = [];
	for (let i = 0; i < wordToGuess.length; i++) {
		letters.push(' _ ');
	}

	return (
		<>
			<Images triesLeft={triesLeft} />
			<ul className='placeholders-wrapper'>
				{letters.map((letter, index) => (
					<li key={index} id={`letter_${index}`} className='letter'>
						{letter}
					</li>
				))}
			</ul>
			<p className='nekiy-text'>
				TRIES LEFT:
				<span className='font-medium text-red-600 ml-1'>{triesLeft}</span>
			</p>
			<div className='keyboard'>
				<KeyBoard checkLetter={checkLetter} />
			</div>
		</>
	);
};

export default StartGame;
