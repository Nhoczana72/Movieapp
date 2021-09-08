import {types} from './action_user'
const Users_defautl={
    user :'',
    loading: false,
    profileuser:[]

}


const reducerUser : any = (state = Users_defautl, actions: any) =>{
    const {payload}=actions
    switch(actions.type){
        case types.LOADING:
            {
                return {...state,loading:payload}
            }
            case types.GETUSER:
            {
                return {...state,user:payload}
            }
            case types.GETPROFILEUSER:
            {
                return {...state,profileuser:payload}
            }
           
            
            
        default: return state
    }
}
export default reducerUser