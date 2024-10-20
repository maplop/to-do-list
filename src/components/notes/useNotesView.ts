import { useState, useEffect } from "react";
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

  useEffect(() => {
    if (user?.user && state.notes.length === 0) {
      dispatch({ type: "LIST", payload: user.user });
    }
  }, [user]);

  const handleCategoryChange = (event: SelectChangeEvent) => {
    const selectedCategory = categories.find(
      (category) => category === event.target.value
    );
    if (selectedCategory) {
      setCategory(event.target.value as string);
      setNote({ ...note, category: selectedCategory });
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNote({
      ...note,
      [name]: value,
    });
  };

  const resetForm = () => {
    setNote({
      id: "",
      title: "",
      text: "",
      category: categories[0],
      user: user?.user || "",
    });
    setCategory(categories[0]);
  };

  const handleEditNote = (noteToEdit: NoteType) => {
    setNote(noteToEdit);
    setOpenNoteFormModal(true);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!note.title.trim() || !note.text.trim()) {
      notify("error", "Title and text are required.");
      return;
    }

    if (state.notes.some((n) => n.id === note.id)) {
      console.log("Editando nota");
      dispatch({ type: "EDIT", payload: note });
      notify("success", "Note updated successfully");
    } else {
      console.log("Creando nota");
      const newNote = { ...note, id: uuidv4() };
      dispatch({ type: "ADD", payload: newNote });
      notify("success", "Successfully created note");
    }

    setOpenNoteFormModal(false);
    resetForm();
  };

  const handleDeleteNote = (noteId: string) => {
    dispatch({
      type: "DELETE",
      payload: { id: noteId, user: user?.user || "" },
    });
    notify("success", "Note deleted successfully");
  };

  const handleCloseNoteFormModal = () => {
    setOpenNoteFormModal(false);
    resetForm();
  };

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
