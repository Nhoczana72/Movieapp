export const types = {
    LOGIN: 'LOGIN',
    LOADING: 'LOADING',
    LOGOUT: 'LOGOUT',
    GETUSER:'GETUSER',
    GETUSERSUCCESS:'GETUSERSUCCESS',
    GETUSERFAIL:'GETUSERFAIL'
    

};
const action = (type: string, payload?: any) => ({ type, payload });

export const userAction = {
    login: (payload: any) => action(types.LOGIN, payload),
    loading: (payload: any) => action(types.LOADING, payload),
    logout: (payload: any) => action(types.LOGOUT, payload),
    getuser: (payLoad: any) => action(types.GETUSER, payLoad),
    getusersuccess: (payload: any) =>
      action(types.GETUSERSUCCESS, payload),
    getusersFail: (payload: any) => action(types.GETUSERFAIL, payload),

};