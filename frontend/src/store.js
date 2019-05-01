import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';
import rootReducer from './reducers';
import { middleware as tooltip } from 'redux-tooltip';

const initialState = {};
const middleware = [thunk, ReduxPromise];

const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware, tooltip),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// const appReducer = (state = initialState, action) => {
//     switch (action.type) {
//         default:
//         return state
//     }
// }

// export const initStore = (initState = { appReducer: initialState }) => {
//     return createStore(combineReducers({ appReducer, tooltip }), initState)
// }

export default store;