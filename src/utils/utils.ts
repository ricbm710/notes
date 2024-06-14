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
