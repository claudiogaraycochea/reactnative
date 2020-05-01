import { createStore, combineReducers, applyMiddleware } from 'redux'
import subscriberReducer from '../reducers/subscriberReducers'
import thunk from 'redux-thunk'

const logger = store => next => action => {
  let result = next(action)
  console.log('store: result: ', result)
  return result
}

const rootReducer = combineReducers({
  subscriberReducer: subscriberReducer
})

const store = () => createStore(rootReducer, undefined, applyMiddleware(logger,thunk))

export default store