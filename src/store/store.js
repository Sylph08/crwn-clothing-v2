import { configureStore } from "@reduxjs/toolkit";

import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

// write own logger
const loggerMiddleware = (store) => (next) => (action) => {
    if (!action.type) {
        return next(action);
    }
    console.log('type: ', action.type);
    console.log('payload: ', action.payload);
    console.log('currentState: ', store.getState());

    next(action);
    //can use this because it is synchonosly

    console.log('nextState: ', store.getState());
}

const middleWares = [loggerMiddleware];
// whenever you dispatch an action, before that action hits the reducers, it hits the middleware first.

//const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = configureStore({
    reducer: rootReducer,
    middleware: middleWares,
    preloadedState: undefined
});