import {combineReducers} from 'redux'
import reducerTrailer from './trailer/reducers'
import reducerMovie from './movie/reducer'
export default combineReducers({
    trailer: reducerTrailer,
    movie:reducerMovie
});