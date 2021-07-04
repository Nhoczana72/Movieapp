export const types = {
    GET_ALL_VIDEO: 'GET_ALL_VIDEO',
    GET_ALL_VIDEO_SUCCESS: 'GET_ALL_VIDEO_SUCCESS',
    GET_ALL_VIDEO_FAIL: 'GET_ALL_VIDEO_FAIL',


};
const action = (type: string, payload?: any) => ({ type, payload });

export const VideoAction = {
    getAllVideo: (payload: any) => action(types.GET_ALL_VIDEO, payload),
    getAllVideoSuccess: (payload: any) => action(types.GET_ALL_VIDEO_SUCCESS, payload),
    getAllVideoFail: (payload: any) => action(types.GET_ALL_VIDEO_FAIL, payload),

};