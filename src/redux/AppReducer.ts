/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

import { filterList } from '../services/SortList'
import { TicketTypes } from '../models/ITicket'
import { ticketsAPI } from '../services/ListApi'

interface Action {
  type: string
  payload: React.ChangeEvent<HTMLInputElement>
}

export interface Filter {
  name: string
  checked: boolean
}

export type ListState = {
  loading: boolean
  error: null | string
  pagination: number
  tickets: TicketTypes[]
  searchId: string
  enough: boolean
  filters: Filter[]
}

const initialState = {
  loading: false,
  error: null,
  pagination: 5,
  tickets: [],
  enough: false,
  searchId: '',
  filters: [
    { name: 'Самый дешевый', checked: true },
    { name: 'Самый быстрый', checked: false },
    { name: 'Оптимальный', checked: false },
  ],
} as ListState

export const appToolsSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    showNextFive: (state) => {
      state.pagination += 5
    },
    checkFilter: (state: ListState, action: Action) => {
      state.filters = state.filters.map((element: Filter) => {
        if (element.name === action.payload.target.value) {
          const newElement = { ...element, checked: !element.checked }
          return newElement
        }
        return { ...element, checked: false }
      })
      state.tickets = filterList(action.payload.target.value, state.tickets)
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(ticketsAPI.endpoints.getTicketList.matchFulfilled, (state, { payload: result }) => {
      state.searchId = state.searchId || result[0]
      state.tickets = [...state.tickets, ...result[1].tickets]
      if (state.filters[0].checked) state.tickets.sort((a, b) => a.price - b.price)
      // для лучшей точности, но большей трудоемкости ↓
      // state.tickets = filterList(state.filters.find((el) => el.checked).name, state.tickets)
      state.enough = result[1].stop
    })
  },
})

export const appActions = appToolsSlice.actions

export default appToolsSlice.reducer
