import { Button, Card, Row, Col } from "react-bootstrap";

const List = ({ todoList, deleteTodo }) => {
  return todoList.map((value, index) => {
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
  })

};

export default List;