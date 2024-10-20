import { useState, useCallback } from "react";
import { useAuth } from "../../hooks/useAuth";
import { NoteType } from "../../types/types";
import { useNotification } from "../../hooks/useNotification";
import { categoryMap } from "../../data/categories";
import { SelectChangeEvent } from "@mui/material";
import { useNoteContext } from "../../hooks/useNotes";
import { v4 as uuidv4 } from "uuid";

const useNotesView = () => {
  const { user } = useAuth();
  const { notify } = useNotification();
  const { state, dispatch } = useNoteContext();

  const notes = state.notes;

  const [openNoteFormModal, setOpenNoteFormModal] = useState<boolean>(false);

  const categories = Object.keys(categoryMap);
  const [category, setCategory] = useState<string>(categories[0]);
  const [note, setNote] = useState<NoteType>({
    id: "",
    title: "",
    text: "",
    category: categories[0],
    user: user?.user || "",
  });

  // Memoize function to handle category changes
  const handleCategoryChange = useCallback(
    (event: SelectChangeEvent) => {
      const selectedCategory = categories.find(
        (category) => category === event.target.value
      );
      if (selectedCategory) {
        setCategory(event.target.value as string);
        setNote((prevNote) => ({ ...prevNote, category: selectedCategory }));
      }
    },
    [categories]
  ); // Solo se recrea si las categorías cambian

  // Memoize function to handle input changes
  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setNote((prevNote) => ({
        ...prevNote,
        [name]: value,
      }));
    },
    []
  ); // Esta función no depende de nada más

  // Function to reset the form
  const resetForm = useCallback(() => {
    setNote({
      id: "",
      title: "",
      text: "",
      category: categories[0],
      user: user?.user || "",
    });
    setCategory(categories[0]);
  }, [categories, user]); // Cambia si cambian las categorías o el usuario

  // Function to handle editing a note
  const handleEditNote = useCallback((noteToEdit: NoteType) => {
    setNote(noteToEdit);
    setOpenNoteFormModal(true);
  }, []);

  // Memoized function for submitting notes
  const handleSubmit = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();

      if (state.notes.some((n) => n.id === note.id)) {
        dispatch({ type: "EDIT", payload: note });
        notify("success", "Note updated successfully");
      } else {
        const newNote = { ...note, id: uuidv4() };
        dispatch({ type: "ADD", payload: newNote });
        notify("success", "Successfully created note");
      }

      setOpenNoteFormModal(false);
      resetForm();
    },
    [dispatch, notify, note, state.notes, resetForm]
  ); // Cambia si cambian el dispatch, notify, note o las notas

  // Function to handle deleting a note
  const handleDeleteNote = useCallback(
    (noteId: string) => {
      dispatch({
        type: "DELETE",
        payload: { id: noteId, user: user?.user || "" },
      });
      notify("success", "Note deleted successfully");
    },
    [dispatch, notify, user]
  );

  // Function to close the note form modal
  const handleCloseNoteFormModal = useCallback(() => {
    setOpenNoteFormModal(false);
    resetForm();
  }, [resetForm]);

  return {
    openNoteFormModal,
    setOpenNoteFormModal,
    handleCloseNoteFormModal,
    notes,
    category,
    note,
    handleEditNote,
    handleCategoryChange,
    handleInputChange,
    handleSubmit,
    handleDeleteNote,
  };
};

export default useNotesView;
