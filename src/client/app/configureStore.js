import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import sausageApp from './combinedReducers.js'

export default function configureStore(initialState) {
    return createStore(
        sausageApp,
        initialState,
        applyMiddleware(thunk)
    );
}
