//rrd
import {
  FormProps,
  useNavigate,
  useOutletContext,
  useParams,
} from "react-router-dom";
//datatypes
import { AlertState, OutletContext } from "../datatypes/datatypes";
//bootstrap
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import {
  getNoteById,
  initCurrentNote,
  saveUpdatedNotes,
  formatDate,
} from "../utils/utils";
//components
import CustomAlert from "./CustomAlert";

const NoteForm = ({ action }: FormProps) => {
  //*Retrieve Context Props
  const { notes, setNotes, currentNote, setCurrentNote } =
    useOutletContext<OutletContext>();

  //*retrieve params (for edit)
  const { id } = useParams<{ id: string }>();

  //*For Initializing the NoteForm Component
  useEffect(() => {
    if (action === "new") {
      setCurrentNote(initCurrentNote());
    }

    if (action === "edit") {
      //sets current note based on id params
      const editNote = getNoteById(id!);
      setCurrentNote(editNote!);
    }
  }, []);

  //*onChange input handler
  const inputChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setCurrentNote((prevNote) => ({
      ...prevNote,
      [e.target.name]: e.target.value,
      date: new Date(),
      formattedDate: formatDate(new Date()),
    }));

    // Alert State default
    alertState.on && setAlertState({ on: false, message: "", type: "" });
  };

  //*navigate
  const navigate = useNavigate();

  //*onClick button handler
  const buttonClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (action === "new") {
      const updatedNotes = [...notes, currentNote];
      saveUpdatedNotes(updatedNotes);
      setNotes(updatedNotes);

      //*success message
      setAlertState({
        on: true,
        message: "Guardado Correctamente",
        type: "success",
      });

      //*set currentNote state to init
      setCurrentNote(initCurrentNote());
    }

    if (action === "edit") {
      //*notes include currentNote replacing note with same id
      let updatedNotes = notes.map((note) =>
        note.id === currentNote.id ? currentNote : note
      );

      saveUpdatedNotes(updatedNotes);
      setNotes(updatedNotes);

      //*back to See Notes
      navigate("/notes");
    }
  };

  //* Alert State default
  const [alertState, setAlertState] = useState<AlertState>({
    on: false,
    message: "",
    type: "",
  });

  //*blank input
  const [isBlank, setIsBlank] = useState<boolean>(
    currentNote.title === "" && currentNote.body === ""
  );

  useEffect(() => {
    setIsBlank(currentNote.title === "" || currentNote.body === "");
  }, [currentNote]);

  return (
    <Container className="mt-2">
      <Row className="justify-content-center">
        <Col md={6}>
          {alertState.on && (
            <CustomAlert
              message={alertState.message}
              type={alertState.type}
              duration={3000}
            ></CustomAlert>
          )}
          <Form>
            <Form.Group controlId="formTitle">
              <Form.Label className="fw-bold">Titulo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Titulo"
                value={currentNote.title}
                onChange={inputChangeHandler}
                name="title"
              />
            </Form.Group>
            <Form.Group controlId="formBody">
              <Form.Label className="fw-bold">Detalle</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Detalle"
                value={currentNote.body}
                onChange={inputChangeHandler}
                name="body"
              />
            </Form.Group>
            {isBlank && (
              <p style={{ color: "red", fontStyle: "italic" }}>
                * Both inputs required for storage
              </p>
            )}
            <div className="text-center">
              <Button
                type="submit"
                variant="primary"
                className="mt-2 mx-auto"
                onClick={buttonClickHandler}
                disabled={isBlank}
              >
                {action === "new"
                  ? "Guardar Nuevo"
                  : action === "edit"
                  ? "Guardar Cambios"
                  : "indefinido"}
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default NoteForm;
