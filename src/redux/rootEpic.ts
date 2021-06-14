import {combineEpics} from 'redux-observable'
import {getAllTrailer} from '../redux/trailer/epic'
import {getALLMovies} from './movie/epic'
import {loading} from './users/epic_user'
const rootEpic= combineEpics(
    getAllTrailer,
    getALLMovies,
    loading
);
export default rootEpic;