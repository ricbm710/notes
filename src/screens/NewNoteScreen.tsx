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
  const { notes, currentNote, setCurrentNote } =
    useOutletContext<OutletContext>();

  return (
    <Container>
      <h1>New Note Screen</h1>
      <NoteForm
        notes={notes}
        currentNote={currentNote}
        setCurrentNote={setCurrentNote}
      />
    </Container>
  );
};

export default NewNoteScreen;
