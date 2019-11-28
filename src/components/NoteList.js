import React, { useContext } from 'react'
import Note from './Note'
import NotesContext from '../context/notes-context'

const NoteList = () => {

    // useContext hook must be provided with the context it is attempting to access
    // useContext hook will return the values that were passed to the notes-context component
    // context has object with notes and dispatch, destructure what we need from the object
    const { notes } = useContext(NotesContext)

    return notes.map(note => (
        <Note key={note.title} note={note} />
    ))
    
}

export { NoteList as default }