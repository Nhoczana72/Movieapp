import { types } from './action'

const initState = {
    allTrailer: [],
    load: false
};
const reducerTrailer: any = (state = initState, actions: any) => {
    const { payload } = actions;

    switch (actions.type) {
        case types.GET_ALL_TRAILER: {
            return { ...state };
        }
        case types.GET_ALL_TRAILER_SUCCESS: {

            return { ...state, allTrailer: state.allTrailer.concat(payload.youtube) };
        }
        case types.GET_ALL_TRAILER_FAIL: {
            return { ...state, };
        }



    }
    return state;
};
export default reducerTrailer;