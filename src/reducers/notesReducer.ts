import { NoteType } from "../types/types";
import { lsKeys } from "../utils/lskeys";

interface NoteState {
  notes: NoteType[];
}

export const initialNoteState = (currentUser: string): NoteState => {
  const allNotes: NoteType[] = JSON.parse(
    localStorage.getItem(lsKeys.NOTES) || "[]"
  );

  // Filtrar por el usuario actual
  const userNotes = allNotes.filter(
    (note: NoteType) => note.user === currentUser
  );

  // Eliminar duplicados basados en el 'id'
  const uniqueNotes = Array.from(
    new Map(userNotes.map((note) => [note.id, note])).values()
  );

  return {
    notes: uniqueNotes,
  };
};

export type NoteAction =
  | { type: "ADD"; payload: NoteType }
  | { type: "EDIT"; payload: NoteType }
  | { type: "DELETE"; payload: { id: string; user: string } };

const saveNotesToStorage = (notes: NoteType[]) => {
  localStorage.setItem(lsKeys.NOTES, JSON.stringify(notes));
};

export const noteReducer = (
  state: NoteState,
  action: NoteAction
): NoteState => {
  switch (action.type) {
    case "ADD": {
      const newNotesAdd = [action.payload, ...state.notes];
      saveNotesToStorage([
        ...JSON.parse(localStorage.getItem(lsKeys.NOTES) || "[]"),
        action.payload,
      ]);
      return { ...state, notes: newNotesAdd };
    }

    case "EDIT": {
      const allNotes = JSON.parse(localStorage.getItem(lsKeys.NOTES) || "[]");
      const newNotesEdit = state.notes.map((note) =>
        note.id === action.payload.id ? action.payload : note
      );
      saveNotesToStorage(
        allNotes.map((note: NoteType) =>
          note.id === action.payload.id ? action.payload : note
        )
      );
      return { ...state, notes: newNotesEdit };
    }

    case "DELETE": {
      const allNotes = JSON.parse(localStorage.getItem(lsKeys.NOTES) || "[]");
      const newNotesDelete = state.notes.filter(
        (note) =>
          note.id !== action.payload.id || note.user !== action.payload.user
      );
      saveNotesToStorage(
        allNotes.filter(
          (note: NoteType) =>
            note.id !== action.payload.id || note.user !== action.payload.user
        )
      );
      return { ...state, notes: newNotesDelete };
    }

    default:
      return state;
  }
};
