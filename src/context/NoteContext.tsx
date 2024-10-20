import { createContext, Dispatch } from "react";
import { NoteType } from "../types/types";
import { NoteAction } from "../reducers/notesReducer";

interface NoteContextProps {
  state: { notes: NoteType[] };
  dispatch: Dispatch<NoteAction>;
}

export const NoteContext = createContext<NoteContextProps | undefined>(undefined);
