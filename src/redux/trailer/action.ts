export const types = {
    GET_ALL_TRAILER: 'GET_ALL_TRAILER',
    GET_ALL_TRAILER_SUCCESS: 'GET_ALL_TRAILER_SUCCESS',
    GET_ALL_TRAILER_FAIL: 'GET_ALL_TRAILER_FAIL',

};
const action = (type: string, payload?: any) => ({ type, payload });

export const trailerAction = {
    getAllTrailer: (payload: any) => action(types.GET_ALL_TRAILER, payload),
    getAllTrailerSuccess: (payload: any) => action(types.GET_ALL_TRAILER_SUCCESS, payload),
    getAllTrailerFail: (payload: any) => action(types.GET_ALL_TRAILER_FAIL, payload),

};