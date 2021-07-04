import {combineEpics} from 'redux-observable'
import {getAllTrailer} from '../redux/trailer/epic'
import {getALLMovies,getAllNewMovies} from './movie/epic'
import {getAllVideo} from './video/epic'

import {loading} from './users/epic_user'
const rootEpic= combineEpics(
    getAllTrailer,
    getALLMovies,
    getAllVideo,
    getAllNewMovies,
    loading
);
export default rootEpic;