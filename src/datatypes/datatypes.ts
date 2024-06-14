import { Dispatch } from "react";

//*Notes
export interface Note {
  id: string;
  title: string;
  body: string;
}
//*Outlet Context
export interface OutletContext {
  notes: Note[];
  setNotes: Dispatch<React.SetStateAction<Note[]>>;
  currentNote: Note;
  setCurrentNote: Dispatch<React.SetStateAction<Note>>;
}
//*Form Props
export interface FormProps {
  action: string;
}
