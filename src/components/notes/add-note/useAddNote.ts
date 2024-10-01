import { SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import { categoryMap } from "../../../data/categories";
import { NoteType } from "../../../types/types";
import { useAuth } from "../../../hooks/useAuth";
import { lsKeys } from "../../../utils/lskeys";
import { useNotification } from "../../../hooks/useNotification";

interface useAddNoteProps {
  handleClose: () => void;
}

export const useAddNote = ({ handleClose }: useAddNoteProps) => {
  const { user } = useAuth();
  const { notify } = useNotification();
  const categories = Object.keys(categoryMap);
  const [category, setCategory] = useState<string>(categories[0]);
  const [note, setNote] = useState<NoteType>({
    id: Date.now(),
    title: "",
    text: "",
    category: categories[0],
    user: user?.name || "",
  });

  const handleChange = (event: SelectChangeEvent) => {
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
      handleClose();
      resetForm();
      notify("success", "Successfully created note");
    }, 700);
  };

  return {
    category,
    note,
    handleChange,
    handleInputChange,
    handleSubmit,
    handleClose,
  };
};
