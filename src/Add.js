import { Form, Button, Stack, Card } from "react-bootstrap";
import { BiBookmark } from "react-icons/bi";

const Add = ({ handleChangeTodoName, todoName, addTodo }) => {
  return (
    <Card className='mt-5'>
      <Card.Body>
        <Stack direction='horizontal' gap={3}>
          <Form.Control type="text" placeholder="Masukan todo.." onChange={handleChangeTodoName}
            value={todoName}
          />
          <Button onClick={addTodo}><BiBookmark /></Button>
        </Stack>
      </Card.Body>
    </Card>
  );
};

export default Add;