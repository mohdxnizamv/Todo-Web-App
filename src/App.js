import { useState} from 'react';
import './App.css';
import { Container, Form, Button, Stack, Card, Row, Col } from "react-bootstrap"

function App() {
  const [todoName, setTodoName] = useState("");

  const [todoList, setTodoList] = useState([]);

  const addTodo = () => {};

  const handleChangeTodoName = (e) => {const data = e.target.value;console.log(data);};

	return (
		<Container>
			<h1 className='text-center mt-5'>Todo Web App</h1>

			{/* Input Todo */}
			<Card className='mt-5'>
				<Card.Body>
					<Stack direction='horizontal' gap={3}>
						<Form.Control type="text" placeholder="Masukan todo.." onChange={handleChangeTodoName}/>
						<Button>Tambah </Button>
					</Stack>
				</Card.Body>
			</Card>

			{/* List Todo */}
			<Card className='mt-5'>
				<Card.Body>
					<Row>
            {/* Nama Todo */}
						<Col>
							<h3>Nama Todo</h3>
						</Col>

						{/* Button Todo*/}
						<Col xl="1">
							<Button>Selesai</Button>
						</Col>
					</Row>
				</Card.Body>
			</Card>
		</Container>
	);
}

export default App;
