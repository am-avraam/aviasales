/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

import { ticketsAPI } from '../services/ListApi'

interface Action {
  type: string
  payload: React.ChangeEvent<HTMLInputElement>
}

export interface Filter {
  name: string
  checked: boolean
}

export type FilterState = {
  filters: Filter[]
}

const initialState = {
  filters: [
    { name: 'Самый дешевый', checked: true },
    { name: 'Самый быстрый', checked: false },
    { name: 'Оптимальный', checked: false },
  ],
} as FilterState

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    checkFilter: (state: FilterState, action: Action) => {
      state.filters = state.filters.map((element: Filter) => {
        if (element.name === action.payload.target.value) {
          const newElement = { ...element, checked: !element.checked }
          return newElement
        }
        return { ...element, checked: false }
      })
    },
  },
  // extraReducers: (builder) => {
  //   builder.addMatcher(ticketsAPI.endpoints.getTicketList.matchFulfilled, (state, { payload: result }) => {
  //     state.filters = [...state.filters]
  //   })
  // },
})

export default filterSlice.reducer
export const filterActions = filterSlice.actions
