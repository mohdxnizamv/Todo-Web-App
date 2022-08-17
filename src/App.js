import { useState } from 'react';
import './App.css';
import { Container } from "react-bootstrap";
import Add from './Add';
import List from "./List";

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

	const finishTodo = (index) => {
		const cloneTodoList = [...todoList]
		cloneTodoList[index].status = !cloneTodoList[index].status;
		setTodoList(cloneTodoList);
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
				<List todoList={todoList} deleteTodo={deleteTodo} />

			</div>
		</Container>
	);
}

export default App;
