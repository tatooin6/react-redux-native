import * as reducers from './reducers'
import { combineReducers, createStore } from 'redux'

// pasar reducers a createStore
export default createStore(combineReducers({
  ...reducers,
}))

