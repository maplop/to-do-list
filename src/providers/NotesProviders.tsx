import { useReducer } from "react";
import { noteReducer, initialNoteState } from "../reducers/notesReducer";
import { NoteContext } from "../context/NoteContext";

export const NoteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(noteReducer, initialNoteState);

  return (
    <NoteContext.Provider value={{ state, dispatch }}>
      {children}
    </NoteContext.Provider>
  );
};