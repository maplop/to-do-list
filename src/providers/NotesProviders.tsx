import { useReducer } from "react";
import { noteReducer, initialNoteState } from "../reducers/notesReducer";
import { NoteContext } from "../context/NoteContext";
import { useAuth } from "../hooks/useAuth";

const NoteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth()

  if (!user) {
    throw new Error("The user must be authenticated");
  }

  const [state, dispatch] = useReducer(noteReducer, initialNoteState(user.user));

  return (
    <NoteContext.Provider value={{ state, dispatch }}>
      {children}
    </NoteContext.Provider>
  );
};
export default NoteProvider