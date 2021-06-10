// the list of the arts, add or delete

const reducer = (state = {artworks: []}, action) => { 
    switch(action.type){
        case "add":
            return {artworks: [...state.artworks, action.payload]};
        case "remove":
            return {artworks: state.artworks.filter((art) => art !== action.payload)};
        default: 
        return state
    }
}


export default reducer;
