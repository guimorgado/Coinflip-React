import { useState } from 'react';
import CoinflipGIF from './assets/coinflip.gif';

const App = () => {
	const [text, setText] = useState('');
	const [coinSelected, setCoinSelected] = useState();
	const [textCoin, setTextCoin] = useState('');

	const changeTails = event => {
		setCoinSelected(event.target.value);
	};

	const changeHeads = event => {
		setCoinSelected(event.target.value);
	};

	const resultadoRandom = () => {
		const numeroRandom = Math.random();

		if (numeroRandom > 0.5) {
			const resultado = 'HEADS';
			if (resultado === coinSelected) {
				setText('Has Ganado');
				setTextCoin(resultado);
			} else {
				setText('Has Perdido');
				setTextCoin(resultado);
			}
		} else {
			const resultado = 'TAILS';
			if (resultado === coinSelected) {
				setText('Has Ganado');
				setTextCoin(resultado);
			} else {
				setText('Has Perdido');
				setTextCoin(resultado);
			}
		}
	};

	return (
		<div className='h-screen bg-[#F7ECDE] flex-col flex justify-center items-center'>
			<div className='flex items-center justify-center flex-col gap-10'>
				<img src={CoinflipGIF} alt='' />
				<h1 className='text-4xl font-bold  text-gray-600'>¡Haz tú apuesta!</h1>
				{textCoin === 'HEADS' && (
					<p className='text-xl font-bold -mb-5'>{`Ha sido ${textCoin}`}</p>
				)}

				{textCoin === 'TAILS' && (
					<p className='text-xl font-bold -mb-5'>{`Ha sido ${textCoin}`}</p>
				)}

				{text === 'Has Ganado' ? (
					<p className='text-xl font-bold text-[#54BAB9]'>{text}</p>
				) : (
					<p className='text-xl font-bold text-[#820000]'>{text}</p>
				)}
			</div>
			<div className='mt-10 flex gap-5 items-center justify-center'>
				<label className='radio-label-tails'>
					<input
						type='radio'
						name='hand'
						id='tails'
						onChange={changeTails}
						value='TAILS'
					></input>
					<p>Tails</p>
				</label>
				<label className='radio-label-heads'>
					<input
						type='radio'
						name='hand'
						id='heads'
						onChange={changeHeads}
						value='HEADS'
					></input>
					<p>Heads</p>
				</label>
			</div>
			<div className='mt-10'>
				<button
					onClick={resultadoRandom}
					className='w-64 flex items-center text-gray-600 justify-center bg-[#E9DAC1] py-2 font-medium text-xl rounded-md shadow-xl'
				>
					Tirar moneda
				</button>
			</div>
		</div>
	);
};

export default App;
