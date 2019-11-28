import React, { useState, useEffect, useContext } from 'react'
import NotesContext from '../context/notes-context'
import useMousePosition from '../hooks/useMousePosition'

//destructure the two prop objects being passed to the component to their own variables
const Note = ({ note }) => {

    const { dispatch } = useContext(NotesContext)
    const position = useMousePosition() // no arguments provided me because no parameters in the custom hook

    // custom hook can make the below functionality reusable. Additionally this component just needs an update x and y position, doesn't need all the logic behind it 
    // Setup state to track x and y position (useState)
    // Setup event to listen for mouse movement
    // Remove event listener when component unmounts (useeffect) (otherwise a bunch of event listeners running in the background)



    // // if no dependencies possed, when the parent state updates it will call useEffect. can be prevented by passing useEffect 0 dependencies (empty array)
    // useEffect(() => {
    //     console.log('Setting up effect!')

    //     // return a function to clean the effect. runs when the component unmounts (componentDidUnmount equivalent)
    //     // this is called when a note is removed
    //     return () => {
    //         console.log('Cleaning effect')
    //     }

    // }, [])

    return (
        <div>
            <h3>{note.title}</h3>
            <p>{note.description}</p>
            <p>{position.x}, {position.y}</p>
            <button onClick={() => dispatch({ type: 'REMOVE_NOTE', title: note.title })}>x</button>
        </div>
    )
}

export { Note as default } //just another way of writing the export. same as putting export beside function. remember that if you are using default, the function does not need a name