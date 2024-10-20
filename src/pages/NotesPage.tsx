import NotesView from "../components/notes/NotesView"
import { NoteProvider } from "../providers/NotesProviders"

const NotesPage = () => {
  return (
    <NoteProvider>
      <NotesView />
    </NoteProvider>
  )
}
export default NotesPage