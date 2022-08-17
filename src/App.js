import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	const [myName, setMyName] = useState('mohdxnizamv');
	const [myAge, setMyAge] = useState(25);

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>{myName}</p>
				<p>{myAge}</p>
				<button onClick={() => setMyName('Dea Afrizal')}>
					klik untuk tukar nama
				</button>

				<button onClick={() => setMyAge((state) => state + 1)}>
					Tambah Umur
				</button>

				<button onClick={() => setMyAge((state) => state - 1)}>
					Kurang Umur
				</button>
			</header>
		</div>
	);
}

export default App;
