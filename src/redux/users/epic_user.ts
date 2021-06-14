import {$axios} from '../../config/api';
import {userAction, types} from './action_user'
import {ofType} from 'redux-observable'
import {mergeMap} from 'rxjs/operators'
export const loading=($action:any)=>{
   return $action.pipe(
        ofType(types.LOADING)
   )
        
    // return userAction.loading(action)
};