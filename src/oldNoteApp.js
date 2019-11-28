import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

 const NoteApp = () => {

    const [notes, setNotes] = useState([])
    // the title variable serves the purpose of connecting the input value to state. makes react state the single source of truth, instead of relying on html to track state 
    // also useful for tracking information (input and textarea) before form is submitted
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const addNote = e => {
        e.preventDefault();
        // spreading notes, takes the older data and adds the new object
        // this is where saving the input is key, allows us to use the local state and create an object with it
        setNotes([
           ...notes, 
           {  title, description } 
        ])
        // clears form
        setTitle('')
        setDescription('')
    }

    const removeNote = (title) => {
        // keep notes that arent being removed
        setNotes(notes.filter(note => note.title !== title))
    }

    useEffect(() => {
        const notesData = JSON.parse(localStorage.getItem('notes'))
        notesData && setNotes(notesData)
    }, [])

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    },[notes])

    //callback function is required in order to pass the referenced function an argument
     return (
         <div>
             {
                 notes.map(note => (
                     <Note key={note.title} note={note} removeNote={removeNote}/>
                ))
            }
            <h1>Notes</h1>
            <p>Add note</p>
            <form onSubmit={addNote}>
                <input value={title} onChange={e => setTitle(e.target.value)}/>
                <textarea value={description} onChange={e => setDescription(e.target.value)} cols="30" rows="10"></textarea>
                <button>add note</button>
            </form>
         </div>
     )
 }

//destructure the two prop objects being passed to the component to their own variables
const Note = ({ note, removeNote }) => {
    // if no dependencies possed, when the parent state updates it will call useEffect. can be prevented by passing useEffect 0 dependencies (empty array)
    useEffect(() => {
        console.log('Setting up effect!')

        // return a function to clean the effect. runs when the component unmounts (componentDidUnmount equivalent)
        // this is called when a note is removed
        return () => {
            console.log('Cleaning effect')
        }

    }, [])

    return (
        <div>
            <h3>{note.title}</h3>
            <p>{note.description}</p>
            <button onClick={() => removeNote(note.title)}>x</button>
        </div>
    )
}


ReactDOM.render(<NoteApp/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


