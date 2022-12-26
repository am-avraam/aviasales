import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import { ticketsAPI } from '../services/ListService'
import { store } from '..'

import checkboxReducer from './CheckboxReducer'
import filterReducer from './FilterReducer'
import sessionReducer from './SessionReducer'
import appToolsReducer from './AppReducer'

export const setupStore = () => {
  return configureStore({
    reducer: {
      checkbox: checkboxReducer,
      filters: filterReducer,
      // api: sessionReducer,
      loading: appToolsReducer,

      [ticketsAPI.reducerPath]: ticketsAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(ticketsAPI.middleware),
    // middleware: (getDefaultMiddleware) {
    //   return getDefaultMiddleware({
    //     serializableCheck: false,
    //   });
    // },
  })
}

export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
export type RootState = ReturnType<typeof store.getState>
