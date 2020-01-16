import{ createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers/reducer';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'

const middlewares = [thunk];

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(
//     reducer,
//     composeEnhancers(applyMiddleware(...middlewares))
    
// );
const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middlewares))
    
);

export default store;