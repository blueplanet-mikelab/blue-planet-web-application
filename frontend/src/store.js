import { createStore, applyMiddleware, compose } from 'redux';
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

export default store;