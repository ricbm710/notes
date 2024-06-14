import { Note } from "../datatypes/datatypes";

//get all notes
export const getNotes = (): Note[] => {
  const notes = localStorage.getItem("notes");
  return notes ? JSON.parse(notes) : [];
};
