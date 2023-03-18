import { legacy_createStore as createStore , combineReducers, applyMiddleware } from 'redux'

import newsReducer from 'store/news/reducer'
import searchReducer from "store/search/reducer"
import showReducer from "store/show/reducer";

import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const rootReducers = combineReducers({newsReducer, searchReducer, showReducer})

const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)))

export default store