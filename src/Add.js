import { Form, Button, Stack, Card } from "react-bootstrap";
import { FaPlusCircle } from "react-icons/fa";

const Add = ({ handleChangeTodoName, todoName, addTodo }) => {
  return (
    <Card className='mt-5'>
      <Card.Body>
        <Stack direction='horizontal' gap={3}>
          <Form.Control type="text" placeholder="Masukan todo.." onChange={handleChangeTodoName}
            value={todoName}
          />
          <Button onClick={addTodo}><FaPlusCircle /></Button>
        </Stack>
      </Card.Body>
    </Card>
  );
};

export default Add;