import {combineReducers} from 'redux'
import {createStore, applyMiddleware} from 'redux'
import repoReducer from "./repoReduser";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

const reducers = combineReducers({
    repos:repoReducer,
})



const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

export default store