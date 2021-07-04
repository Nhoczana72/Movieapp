import {$axios} from '../../config/api';
import {VideoAction, types} from './action'
import {ofType} from 'redux-observable'
import {mergeMap} from 'rxjs/operators'
export const getAllVideo=($action:any)=>{
    return $action.pipe(
        ofType(types.GET_ALL_VIDEO),
        mergeMap((act:any)=>{
            return $axios.api
            .get(
                `/3/movie/${act?.payload}/trailers?api_key=c55cb28a013ddccfc78f28d3e9f29101`,
            )
            .then((result:any)=>
            {
                const {data} =result;
                console.log('DATA',data);
                return VideoAction.getAllVideoSuccess(data);
            }).catch((error:any)=>{
                return VideoAction.getAllVideoFail(error);
            });
        }),
    );
};