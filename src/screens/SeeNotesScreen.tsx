//bootstrap
import { Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
//bootstrap icons
import { Pen, Trash } from "react-bootstrap-icons";
//rrd
import { useNavigate, useOutletContext } from "react-router-dom";
//datatypes
import { Note, OutletContext } from "../datatypes/datatypes";
//utils
import { removeNote } from "../utils/utils";

const SeeNotesScreen = () => {
  //*retrieving props
  const { notes } = useOutletContext<OutletContext>();

  //* Click Handler
  const removeClickHandler = (id: string) => {
    removeNote(id);
    window.location.reload();
  };

  //* Redirects to Edit Note with note id as param
  const navigate = useNavigate();

  const editClickHandler = (note: Note) => {
    navigate(`/edit/${note.id}`);
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-center mt-4 mb-4">Stored Notes</h1>
          {notes.length > 0 ? (
            <ListGroup>
              {notes.map((note) => (
                <ListGroup.Item key={note.id}>
                  <Card>
                    <Card.Body>
                      <Card.Title>{note.title}</Card.Title>
                      <Card.Text>{note.body}</Card.Text>
                      <Card.Text>Last updated: {note.formattedDate}</Card.Text>
                      <Button
                        className="btn-danger me-2"
                        type="submit"
                        onClick={() => removeClickHandler(note.id)}
                      >
                        <Trash />
                      </Button>
                      <Button
                        className="btn-secondary me-2"
                        type="submit"
                        onClick={() => editClickHandler(note)}
                      >
                        <Pen />
                      </Button>
                    </Card.Body>
                  </Card>
                </ListGroup.Item>
              ))}
            </ListGroup>
          ) : (
            <p>You don't have stored notes :/</p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default SeeNotesScreen;
