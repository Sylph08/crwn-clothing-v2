import { configureStore } from "@reduxjs/toolkit";

import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
//import { loggerMiddleware } from "./middleware/logger";
import thunk from "redux-thunk";

const persistConfig = {
    key: 'root', // root mean we want to persist the whole thing
    storage: storage,
    //blacklist: ['user']
    // pass to [] the reducer in the combineReducers obj we don't want to persist, everything else in combineReducers is persist
    whitelist: ['cart'] // everything else is blacklist
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// whenever you dispatch an action, before that action hits the reducers, it hits the middleware first.
//const middleWares = [loggerMiddleware];
const middleWares = [process.env.NODE_ENV !== 'production' && logger, thunk].filter(Boolean); // process.env.NODE_ENV tell us the environment we are in
// filter(Boolean) filter out all the value having Boolean type and return an array

//const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = configureStore({
    reducer: persistedReducer,
    middleware: middleWares,
    devTools: process.env.NODE_ENV !== 'production', // another choise: development
    preloadedState: undefined
});

export const persistor = persistStore(store);