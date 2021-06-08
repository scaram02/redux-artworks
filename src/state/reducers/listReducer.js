// the list of the arts, add or delete
const reducer = (state = [], action) => {
    switch(action.type){
        case "add":
            return [action.payload, ...state];
        case "remove":
            return state.filter((art) => art.id !== action.payload);
        default: 
        return state
    }
}