import {combineReducers} from 'redux'
import reducerTrailer from './trailer/reducers'
import reducerMovie from './movie/reducer'
import reducerUser from './users/reducer_user'
import reducerVideo from './video/reducers'

export default combineReducers({
    trailer: reducerTrailer,
    movie:reducerMovie,
    user:reducerUser,
    video:reducerVideo,
});