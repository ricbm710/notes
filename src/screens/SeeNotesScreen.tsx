//bootstrap
import { Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
//bootstrap icons
import { Trash } from "react-bootstrap-icons";
//rrd
import { useOutletContext } from "react-router-dom";
//datatypes
import { OutletContext } from "../datatypes/datatypes";

const SeeNotesScreen = () => {
  //*retrieving props
  const { notes } = useOutletContext<OutletContext>();
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-center mt-4 mb-4">Notas Almacenadas</h1>
          {notes.length > 0 ? (
            <ListGroup>
              {notes.map((note) => (
                <ListGroup.Item key={note.id}>
                  <Card>
                    <Card.Body>
                      <Card.Title>{note.title}</Card.Title>
                      <Card.Text>{note.body}</Card.Text>
                      <Button className="btn-danger">
                        <Trash />
                      </Button>
                    </Card.Body>
                  </Card>
                </ListGroup.Item>
              ))}
            </ListGroup>
          ) : (
            <p>No Notes Found!</p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default SeeNotesScreen;
