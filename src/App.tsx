import "bootstrap/dist/css/bootstrap.min.css";

//hooks
import { useEffect, useState } from "react";
//rrd
import { Outlet } from "react-router-dom";
//components
import NavBar from "./components/NavBar";
//datatypes
import { Note, OutletContext } from "./datatypes/datatypes";
//utils
import { getNotes } from "./utils/utils";

function App() {
  //*Get all notes when initializing
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    const storedNotes = getNotes();
    storedNotes.length > 0 && setNotes(storedNotes);
  }, []);

  //*Set state for Current Note
  const [currentNote, setCurrentNote] = useState<Note>({
    id: "",
    title: "",
    body: "",
  });

  //*Set context for passing props to Outlet
  const contextValue: OutletContext = { notes, currentNote, setCurrentNote };

  return (
    <>
      <NavBar />
      <Outlet context={contextValue} />
    </>
  );
}

export default App;
