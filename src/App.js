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

				<button onClick={() => setMyName('Dea Afrizal')} className="mt-5">
					klik untuk tukar nama
				</button>

				<div className="d-flex mt-3">
					<button
						onClick={() => setMyAge((state) => state + 1)}
						className="me-5"
					>
						+
					</button>

					<p>{myAge}</p>

					<button
						onClick={() => setMyAge((state) => state - 1)}
						className="ms-5"
					>
						-
					</button>
				</div>
			</header>
		</div>
	);
}

export default App;
