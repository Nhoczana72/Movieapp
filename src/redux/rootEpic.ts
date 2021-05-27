import {combineEpics} from 'redux-observable'
import {getAllTrailer} from '../redux/trailer/epic'
import {getALLMovies} from './movie/epic'
const rootEpic= combineEpics(
    getAllTrailer,
    getALLMovies,
);
export default rootEpic;