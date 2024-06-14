//bootstrap
import { Container } from "react-bootstrap";
//rrd
import { useOutletContext } from "react-router-dom";
//datatypes
import { OutletContext } from "../datatypes/datatypes";
//components
import NoteForm from "../components/NoteForm";

const NewNoteScreen = () => {
  //*Retrieve props
  const {} = useOutletContext<OutletContext>();

  return (
    <Container>
      <h1 className="text-center mt-2">Nueva Nota</h1>
      <NoteForm action="new" />
    </Container>
  );
};

export default NewNoteScreen;
