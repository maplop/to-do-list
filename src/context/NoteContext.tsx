import React, { createContext } from "react";
import { NoteType } from "../types/types";
import { NoteAction } from "../reducers/notesReducer";

interface NoteContextType {
  state: {
    notes: NoteType[];
    selectedNote?: NoteType;
  };
  dispatch: React.Dispatch<NoteAction>;
}

export const NoteContext = createContext<NoteContextType | undefined>(undefined);