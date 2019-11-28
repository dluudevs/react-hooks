import {useState, useEffect} from 'react'

// naming convention for custom hook
const useMousePosition = () => {
    // two values as an object in a state variable because the values will always update together as the mouse moves. if updating independently, call useState for the additional values

    const [position, setPosition] = useState({ x: 0, y: 0 })

    // every time the mouse moves, it will add the event listener. this is because when the event fires, it re-renders the component. Which calls this hook to add the event listener
    // need to register the event listener only once, even as the state updates. this can be done with useeffect. run the event listener only when the component mounts

    useEffect(() => {
        
        const handleMouseMove = (e) => {
            setPosition({
                x: e.pageX, // mouse x position
                y: e.pageY // mouse y position
            })
        }

        document.addEventListener('mousemove', handleMouseMove)

        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
        }

    }, [])

    return position
}

export { useMousePosition as default }