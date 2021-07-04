import { types } from './action'

const initState = {
    allVideo: [],
    load: false
};
const reducerVideo: any = (state = initState, actions: any) => {
    const { payload } = actions;

    switch (actions.type) {
        case types.GET_ALL_VIDEO: {
            return { ...state };
        }
        case types.GET_ALL_VIDEO_SUCCESS: {

            return { ...state, allVideo: payload.youtube };
        }
        case types.GET_ALL_VIDEO_FAIL: {
            return { ...state, };
        }



    }
    return state;
};
export default reducerVideo;