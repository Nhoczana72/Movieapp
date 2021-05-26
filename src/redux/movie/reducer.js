
const initState={
    allMovie : [
        
    ],
    allActor: [],
    allnewMoviie: []
}

export const reducerMovie =(state=initState,action)=>{
    const {payload}=action;
    switch (action.type){
        case 'get_all_movie':
            return{...state,allMovie:payload};
        case 'get_all_actor':
            return{...state,allActor:payload};
        case 'get_all_newmovie':
            return{...state,allnewMoviie:payload};
        
        default:
            break;
    }
    return state;
}
export default reducerMovie