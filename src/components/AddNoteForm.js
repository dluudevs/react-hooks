import React, { useState, useContext } from 'react';
import NotesContext from '../context/notes-context'

const AddNoteForm = () => {

    // the title variable serves the purpose of connecting the input value to state. makes react state the single source of truth, instead of relying on html to track state 
    // also useful for tracking information (input and textarea) before form is submitted
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    // values provided to the context component is what the useContext function returns (values provided in NoteApp component where the context component is wraps the components)
    const { dispatch } = useContext(NotesContext)

    const addNote = e => {
        e.preventDefault()

        dispatch({
            type: 'ADD_NOTE',
            title,
            description
        });

        setTitle('')
        setDescription('')
    };

    // <> is React fragment, remove clutter from the one root element rule (one div to contain all the children elements). Removes the extra div from the DOM 
    return (
        <>
            <p>Add note</p>
            <form onSubmit={addNote}>
                <input value={title} onChange={e => setTitle(e.target.value)} />
                <textarea value={description} onChange={e => setDescription(e.target.value)} cols="30" rows="10"></textarea>
                <button>add note</button>
            </form>
        </>
    )
}

export {AddNoteForm as default};