export const types = {
    LOGIN: 'LOGIN',
    LOADING: 'LOADING',
    LOGOUT: 'LOGOUT',

};
const action = (type: string, payload?: any) => ({ type, payload });

export const userAction = {
    login: (payload: any) => action(types.LOGIN, payload),
    loading: (payload: any) => action(types.LOADING, payload),
    logout: (payload: any) => action(types.LOGOUT, payload),

};