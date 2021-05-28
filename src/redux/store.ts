import {createStore,applyMiddleware} from 'redux'

import rootEpic from './rootEpic'
import rootReducers from './rootReducers'
import AsyncStorage from '@react-native-community/async-storage'
import {persistReducer,persistStore} from 'redux-persist'
import {createEpicMiddleware} from 'redux-observable'

const epicMiddleware=createEpicMiddleware();

// const persistConfig:any={
//     key :'root',
//     Storage :AsyncStorage,
//     blacklist:['movie','loading'],
// };
// const persistedReducer=persistReducer(persistConfig,rootReducers);
const store=createStore(rootReducers,applyMiddleware(epicMiddleware));
epicMiddleware.run(rootEpic);


store.subscribe(()=>{
    console.log('state',store.getState());

});
// export const persistor=persistStore(store);
export default store;