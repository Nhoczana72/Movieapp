import {$axios} from '../../config/api';
import {trailerAction, types} from './action'
import {ofType} from 'redux-observable'
import {mergeMap} from 'rxjs/operators'
export const getAllTrailer=($action:any)=>{
    return $action.pipe(
        ofType(types.GET_ALL_TRAILER),
        mergeMap((act:any)=>{
            console.log('act',act)
            return $axios.api
            .get(
                `/3/movie/${act?.payload}/trailers?api_key=c55cb28a013ddccfc78f28d3e9f29101`,
            )
            .then((result:any)=>
            {
                const {data} =result;
                console.log('DATA',data);
                return trailerAction.getAllTrailerSuccess(data);
            }).catch((error:any)=>{
                return trailerAction.getAllTrailerFail(error);
            });
        }),
    );
};