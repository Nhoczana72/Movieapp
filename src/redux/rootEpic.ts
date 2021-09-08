import {combineEpics} from 'redux-observable'
import {getAllTrailer} from '../redux/trailer/epic'
import {getALLMovies,getAllNewMovies} from './movie/epic'
import {getAllVideo} from './video/epic'

const rootEpic= combineEpics(
    getAllTrailer,
    getALLMovies,
    getAllVideo,
    getAllNewMovies,
    
);
export default rootEpic;