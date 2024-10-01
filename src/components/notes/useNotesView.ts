import { useState, useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import { NoteType } from "../../types/types";
import { lsKeys } from "../../utils/lskeys";
import { useNotification } from "../../hooks/useNotification";
import { categoryMap } from "../../data/categories";
import { SelectChangeEvent } from "@mui/material";

const useNotesView = () => {
  const { user } = useAuth();
  const { notify } = useNotification();

  const [openModalNewNote, setOpenModalNewNote] = useState<boolean>(false);
  const [notes, setNotes] = useState<NoteType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [shouldReloadNotes, setShouldReloadNotes] = useState<boolean>(false);

  const categories = Object.keys(categoryMap);
  const [category, setCategory] = useState<string>(categories[0]);
  const [note, setNote] = useState<NoteType>({
    id: Date.now(),
    title: "",
    text: "",
    category: categories[0],
    user: user?.name || "",
  });

  const getNotes = () => {
    setIsLoading(true);
    const storedNotes = localStorage.getItem(lsKeys.NOTES);
    if (storedNotes) {
      const notesArray: NoteType[] = JSON.parse(storedNotes);
      const userNotes = notesArray
        .filter((note) => note.user === user?.name)
        .reverse();
      setNotes(userNotes);
    }
    setIsLoading(false);
  };

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

  const saveNoteToLocalStorage = (newNote: NoteType) => {
    const storedNotes = localStorage.getItem(lsKeys.NOTES);
    const notesArray = storedNotes ? JSON.parse(storedNotes) : [];
    const updatedNotes = [...notesArray, newNote];
    localStorage.setItem(lsKeys.NOTES, JSON.stringify(updatedNotes));
  };

  const resetForm = () => {
    setNote({
      id: Date.now(),
      title: "",
      text: "",
      category: categories[0],
      user: user?.name || "",
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const newNote = { ...note, id: Date.now() };
    saveNoteToLocalStorage(newNote);

    setTimeout(() => {
      setOpenModalNewNote(false);
      resetForm();
      notify("success", "Successfully created note");
      setShouldReloadNotes(true);
    }, 700);
  };

  const handleDeleteNote = (noteId: number) => {
    const storedNotes = localStorage.getItem(lsKeys.NOTES);
    if (storedNotes) {
      const notesArray: NoteType[] = JSON.parse(storedNotes);
      const updatedNotes = notesArray.filter((note) => note.id !== noteId);
      localStorage.setItem(lsKeys.NOTES, JSON.stringify(updatedNotes));

      setShouldReloadNotes(true);
      notify("success", "Note deleted successfully");
    }
  };

  useEffect(() => {
    if (user) {
      getNotes();
      setShouldReloadNotes(false);
    }
  }, [user, shouldReloadNotes]);

  return {
    openModalNewNote,
    setOpenModalNewNote,
    notes,
    isLoading,
    category,
    note,
    handleCategoryChange,
    handleInputChange,
    handleSubmit,
    handleDeleteNote,
  };
};
export default useNotesView;
