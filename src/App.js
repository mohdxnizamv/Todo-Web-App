import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	const [myName, setMyName] = useState('mohdxnizamv');
	const [myName2, setMyName2] = useState('mohdxnizamv');
	const [myAge] = useState(100);

  console.log(myName);
  console.log(myName2);

  console.log({ myName});
  console.log({ myName2 });

	console.log('ini stated yg myname', myName);
	console.log('ini stated yg myname2', myName2);

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>{myName}</p>
				<p>{myAge}</p>
				<button onClick={() => setMyName('Dea Afrizal')}>Ganti Nama</button>
			</header>
		</div>
	);
}

export default App;
