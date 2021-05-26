import {combineReducers} from 'redux'
import {reducerTrailer} from './trailer/reducers'

export default combineReducers({
    trailer: reducerTrailer
});