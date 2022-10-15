import { configureStore } from "@reduxjs/toolkit";

import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "./root-saga";

const persistConfig = {
    key: 'root', // root mean we want to persist the whole thing
    storage: storage,
    //blacklist: ['user']
    // pass to [] the reducer in the combineReducers obj we don't want to persist, everything else in combineReducers is persist
    whitelist: ['cart'] // everything else is blacklist
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

// whenever you dispatch an action, before that action hits the reducers, it hits the middleware first.
const middleWares = [process.env.NODE_ENV !== 'production' && logger, sagaMiddleware].filter(Boolean); // process.env.NODE_ENV tell us the environment we are in
// filter(Boolean) filter out all the value having Boolean type and return an array

//const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = configureStore({
    reducer: persistedReducer,
    middleware: middleWares,
    devTools: process.env.NODE_ENV !== 'production', // another choise: development
    preloadedState: undefined
});

// must put after init store
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);