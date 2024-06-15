import { Note } from "../datatypes/datatypes";

//get all notes
export const getNotes = (): Note[] => {
  const notes = localStorage.getItem("notes");
  return notes ? JSON.parse(notes) : [];
};

//generate id
export const generateRandomId = (): string => {
  return Math.random().toString(36).substring(2, 9) + Date.now().toString(36);
};

//save updated list of notes
export const saveUpdatedNotes = (updatedNotes: Note[]) => {
  localStorage.setItem("notes", JSON.stringify(updatedNotes));
};

//remove note
export const removeNote = (id: string) => {
  const notes = localStorage.getItem("notes");
  if (!notes) {
    return null;
  }

  const jsonNotes: Note[] = JSON.parse(notes);

  const updatedNotes = jsonNotes.filter((note) => note.id !== id);

  const jsonUpdatedNotes = JSON.stringify(updatedNotes);

  localStorage.setItem("notes", jsonUpdatedNotes);
};
