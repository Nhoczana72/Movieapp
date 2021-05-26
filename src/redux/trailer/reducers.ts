import {types} from './action'

const initState={
    allTrailer:[],
};
export const reducerTrailer: any=(state=initState,actions:any)=>{
    const {payload}=actions;
    switch (actions.type){
        case types.GET_ALL_TRAILER:{
            return {...state,alltrailer:[]};
        }
        case types.GET_ALL_TRAILER_SUCCESS:{
            return {...state,alltrailer:payload};
        }
        case types.GET_ALL_TRAILER_FAIL:{
            return {...state,alltrailer:payload};
        }
        
    }
    return state;
};
export default reducerTrailer;