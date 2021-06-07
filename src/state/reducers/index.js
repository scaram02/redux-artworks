import {combineReducers} from 'redux'
import listReducer from './listReducer'

const reducers = combineReducers({
    // object of all reducers combined here
    artworks: listReducer
})

export default reducers