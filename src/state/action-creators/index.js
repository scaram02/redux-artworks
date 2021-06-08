// put the functions in here

const addToFaves = id => {
    return (dispatch) => {
        dispatch({
            type: "add",
            payload: id
        })
    }
}

const removeFromFaves = id => {
    return (dispatch) => {
        dispatch({
            type: 'remove', 
            payload: id
        })
    }
}