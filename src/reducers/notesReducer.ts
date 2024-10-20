import { NoteType } from "../types/types";
import { lsKeys } from "../utils/lskeys";

interface NoteState {
  notes: NoteType[];
  selectedNote?: NoteType;
}

export const initialNoteState: NoteState = {
  notes: JSON.parse(localStorage.getItem(lsKeys.NOTES) || "[]"),
  selectedNote: undefined,
};

export type NoteAction =
  | { type: "LIST"; payload: string }
  | { type: "ADD"; payload: NoteType }
  | { type: "EDIT"; payload: NoteType }
  | { type: "DELETE"; payload: { id: string; user: string } };

const getUserNotes = (user: string): NoteType[] => {
  const allNotes = JSON.parse(localStorage.getItem(lsKeys.NOTES) || "{}");
  return allNotes[user] || [];
};

const setUserNotes = (user: string, notes: NoteType[]): void => {
  console.log("Estoy instertando");
  const allNotes = JSON.parse(localStorage.getItem(lsKeys.NOTES) || "{}");
  allNotes[user] = notes;
  localStorage.setItem(lsKeys.NOTES, JSON.stringify(allNotes));
};

export const noteReducer = (
  state: NoteState,
  action: NoteAction
): NoteState => {
  let updatedNotes;

  switch (action.type) {
    case "LIST": {
      const user = action.payload;
      const userNotes = getUserNotes(user);
      return {
        ...state,
        notes: userNotes,
      };
    }
    case "ADD": {
      const { user } = action.payload;
      console.log("El user de add --- ", user);
      updatedNotes = [action.payload, ...getUserNotes(user)];
      setUserNotes(user, updatedNotes);
      return { ...state, notes: updatedNotes };
    }

    case "EDIT": {
      const { user } = action.payload;
      updatedNotes = getUserNotes(user).map((note) =>
        note.id === action.payload.id ? action.payload : note
      );
      setUserNotes(user, updatedNotes);
      return { ...state, notes: updatedNotes };
    }

    case "DELETE": {
      const { id, user } = action.payload;
      updatedNotes = getUserNotes(user).filter((note) => note.id !== id);
      setUserNotes(user, updatedNotes);
      return { ...state, notes: updatedNotes };
    }

    default:
      return state;
  }
};
