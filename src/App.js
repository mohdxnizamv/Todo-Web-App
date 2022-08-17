import { useState } from 'react';
import './App.css';
import { Container, Button, Card, Row, Col } from "react-bootstrap";
import Add from './Add';

function App() {
	const [todoName, setTodoName] = useState("");

	const [todoList, setTodoList] = useState([]);

	const addTodo = () => {
		const dataTodo = { todoName, status: false };
		setTodoList([dataTodo, ...todoList]);
		setTodoName("");
	};

	const deleteTodo = (index) => {
		setTodoList(todoList.filter((value, idx) => index !== idx));
	};

	const handleChangeTodoName = (e) => {
		const data = e.target.value;

		setTodoName(data);
	};

	return (
		<Container>
			<h1 className='text-center mt-5'>Todo Web App</h1>

			{/* Input Todo */}
			<Add handleChangeTodoName={handleChangeTodoName} todoName={todoName} addTodo={addTodo} />

			{/* List Todo */}
			<div className="mt-5">
				{todoList.map((value, index) => {
					return (
						<Card className='mt-3'>
							<Card.Body>
								<Row>
									{/* Nama Todo */}
									<Col>
										<h3>{value.todoName}</h3>
									</Col>

									{/* Button Todo*/}
									<Col xl="1">
										<Button>Selesai</Button>
									</Col>
								</Row>
								<Button variant='danger' className='mt-2' onClick={() => deleteTodo(index)}>Hapus</Button>
							</Card.Body>
						</Card>
					);
				})}
			</div>
		</Container>
	);
}

export default App;
