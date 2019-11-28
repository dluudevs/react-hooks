// exactly like reducer function in redux (manages the changes to state in one function). required before useReducer can be used
// leave all the explicit code in the reducer, centralize all the logic here and simplify the dispatch functions - good practice
const notesReducer = (state, action) => {
    switch (action.type) {
        case 'POPULATE_NOTES':
            return action.notes

        case 'ADD_NOTE':
            return [
                ...state,
                {
                    title: action.title,
                    description: action.description
                }
            ]

        case 'REMOVE_NOTE':
            return state.filter(note => note.title !== action.title)

        default: //make no changes when action type is not recognized/supported by returning the state
            return state
    }
}

export { notesReducer as default }