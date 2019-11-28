import React, { useState, useEffect, useReducer } from 'react';
import notesReducer from '../reducers/notes';
import NoteList from './NoteList';
import AddNoteForm from './AddNoteForm';
import NotesContext from '../context/notes-context'

const NoteApp = () => {

    //takes two arguments: reducer function and initial state. similar to the note variable above
    // like other hooks, this will return a variable with the state and a setter function
    //similar to other hooks, the useReducer hook will return state and dispatch function
    // will not replace redux, it serves as a cleaner way to organize state
    const [notes, dispatch] = useReducer(notesReducer, [])

    useEffect(() => {
        const notes = JSON.parse(localStorage.getItem('notes'))
        // the object is the action being passed to the notesReducer
        notes && dispatch({ type: 'POPULATE_NOTES', notes })
    }, [])

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])

    // *Problem with props, the NoteList component is not reusable. <This></This> is because it needs access to the parent's props, without props it will not be able to render. Redux and the Context API addresses this issue


    // notes context provider similar to redux, provided to all components and their children within the NotesContext.Provider component

    return (
        <NotesContext.Provider value={{ notes, dispatch }}>
            <h1>Notes</h1>
            <NoteList/>
            <AddNoteForm />
        </NotesContext.Provider>
    )
}

export { NoteApp as default }