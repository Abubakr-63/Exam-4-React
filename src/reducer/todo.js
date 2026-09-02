export function reducer(state, action){
    switch (action.type){
        case "fetch" : 
        return {...state, data: action.payload}
        default:
            return state
    }
}