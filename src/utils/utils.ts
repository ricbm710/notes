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

//get note by id
export const getNoteById = (id: string): Note | null => {
  // Retrieve notes from LocalStorage
  const storedNotes = localStorage.getItem("notes");

  if (storedNotes) {
    // Parse stored JSON into an array of Note objects
    const parsedNotes: Note[] = JSON.parse(storedNotes);

    // Find the note with the given id
    const note = parsedNotes.find((note) => note.id === id);

    return note || null; // Return the found note or null if not found
  }

  return null; // Return null if no notes are stored
};
