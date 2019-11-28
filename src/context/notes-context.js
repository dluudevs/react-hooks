import React from 'react'

//does not have to take arguments
//the argument would be the default value, most cases the value os passed as the provider is configured
// createContext returns a object - needs to be setup in the main component that is providing data (NoteApp) and in the components that are accessing data via useContext (AddNoteForm, NoteList, Note)
const NotesContext = React.createContext() 

export { NotesContext as default }