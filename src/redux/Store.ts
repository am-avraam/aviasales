import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import { ticketsAPI } from '../services/ListApi'
import { store } from '..'

import checkboxReducer from './CheckboxReducer'
import filterReducer from './FilterReducer'
import appToolsReducer from './AppReducer'

export const setupStore = () => {
  return configureStore({
    reducer: {
      checkbox: checkboxReducer,
      filters: filterReducer,
      list: appToolsReducer,

      [ticketsAPI.reducerPath]: ticketsAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(ticketsAPI.middleware),
  })
}

export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
export type RootState = ReturnType<typeof store.getState>
