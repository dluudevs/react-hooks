import React, { useEffect, useState } from 'react'


const App = (props) => {
    // useState hook does not merge objects like setState, it completely replaces the old state with new state. this makes things less error prone (this is why if you useState to track multiple properties like how you would with classes it wont work. while one property in state updates, the other one will be replaced without a value)

    // better to use seperate useState calls to update their respective variables - can be called as many times necessary
    const [count, setCount] = useState(props.count)
    const [text, setText] = useState('')

    // runs when the component mounts, do not run for any updates (second argument is dependencies. no dependencies as the array is empty)
    useEffect(() => {
        console.log('this should only run once')
    }, [])

    // runs when component mounts and when count updates (second argument is dependencies, one is listed in the array)
    useEffect(() => {
        console.log('useEffect ran')
        document.title = count
    }, [count])

    return (
        <div>
            <p>The current {text || 'count'} is {count}</p>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <button onClick={() => setCount(count - 1)}>-1</button>
            <button onClick={() => setCount(props.count)}>Reset</button>
            <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
    )

    // onChange is an event listener, the event object will always be passed to the callback function (event handler)
}

//default props when prop value is not provided
App.defaultProps = {
    //props.count to access the below
    count: 0
}