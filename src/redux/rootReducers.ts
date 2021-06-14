import {combineReducers} from 'redux'
import reducerTrailer from './trailer/reducers'
import reducerMovie from './movie/reducer'
import reducerUser from './users/reducer_user'
export default combineReducers({
    trailer: reducerTrailer,
    movie:reducerMovie,
    user:reducerUser
});