import { useState, useCallback, useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import { CategoryType, NoteType } from "../../types/types";
import { useNotification } from "../../hooks/useNotification";
import { SelectChangeEvent } from "@mui/material";
import { useNoteContext } from "../../hooks/useNotes";
import { v4 as uuidv4 } from "uuid";
import { getCategories } from "../../api/category";
import { lsKeys } from "../../utils/lskeys";
import { defaultCategories } from "../../data/categories";

const useNotesView = () => {
  const { user } = useAuth();
  const { notify } = useNotification();
  const { state, dispatch } = useNoteContext();
  const categories = getCategories();
  const notes = state.notes;
  const [openNoteFormModal, setOpenNoteFormModal] = useState<boolean>(false);

  const [category, setCategory] = useState<string>(categories[0]?.name);
  const [note, setNote] = useState<NoteType>({
    id: "",
    title: "",
    text: "",
    category: categories[0],
    user: user?.user || "",
  });

  // Load categories from localStorage, or set default if empty
  useEffect(() => {
    const categories = JSON.parse(
      localStorage.getItem(lsKeys.CATEGORIES) || "[]"
    ) as CategoryType[];

    if (categories.length === 0) {
      // If no categories are stored, set default categories
      localStorage.setItem(
        lsKeys.CATEGORIES,
        JSON.stringify(defaultCategories)
      );
    }
  }, []);

  const handleCategoryChange = useCallback(
    (event: SelectChangeEvent) => {
      const selectedCategory = categories.find(
        (category) => category.name === event.target.value
      );
      if (selectedCategory) {
        setCategory(event.target.value as string);
        setNote((prevNote) => ({ ...prevNote, category: selectedCategory }));
      }
    },
    [categories]
  );

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setNote((prevNote) => ({
        ...prevNote,
        [name]: value,
      }));
    },
    []
  );

  const resetForm = useCallback(() => {
    setNote({
      id: "",
      title: "",
      text: "",
      category: categories[0],
      user: user?.user || "",
    });
    setCategory(categories[0]?.name);
  }, [categories, user]);

  const handleEditNote = useCallback((noteToEdit: NoteType) => {
    setNote(noteToEdit);
    setOpenNoteFormModal(true);
  }, []);

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
  );

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
