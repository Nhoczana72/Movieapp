import {types} from './action_user'
const Users_defautl={
    user :[],
    loading: false,

}


const reducerUser : any = (state = Users_defautl, actions: any) =>{
    const {payload}=actions
    console.log('action',actions)
    switch(actions.type){
        case types.LOADING:
            {
                return {...state,loading:true}
            }
        default: return state
    }
}
export default reducerUser