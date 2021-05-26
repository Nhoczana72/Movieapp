import {combineEpics} from 'redux-observable'
import {getAllTrailer} from '../redux/trailer/epic'

const rootEpic= combineEpics(
    getAllTrailer
);
export default rootEpic;