import { combineReducers } from 'redux'

import checkboxReducer from './checkbox-reducer'
import filterReducer from './filter-reducer'
import sessionReducer from './session-reducer'
import appReducer from './app-reducer'

const rootReducer = combineReducers({
  checkbox: checkboxReducer,
  filters: filterReducer,
  api: sessionReducer,
  loading: appReducer,
})

export default rootReducer
