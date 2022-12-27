/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

import { filterList } from '../services/SortList'
import { TicketTypes } from '../models/ITicket'
import { ticketsAPI } from '../services/ListApi'

import { filterSlice } from './FilterReducer'

console.log(filterSlice)
interface Action {
  type: string
  payload: React.ChangeEvent<HTMLInputElement>
}

export type ListState = {
  loading: boolean
  error: null | string
  pagination: number
  tickets: TicketTypes[]
  searchId: string
  enough: boolean
}

const initialState = {
  loading: false,
  error: null,
  pagination: 5,
  tickets: [],
  enough: false,
  searchId: '',
} as ListState

export const appToolsSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    showNextFive: (state) => {
      state.pagination += 5
    },
  },
  extraReducers: (builder) => {
    builder.addCase(filterSlice.actions.checkFilter, (state, action: Action) => {
      state.tickets = filterList(action.payload.target.value, state.tickets)
    })
    builder.addMatcher(ticketsAPI.endpoints.getTicketList.matchFulfilled, (state, { payload: result }) => {
      state.searchId = state.searchId || result[0]
      state.tickets = [...state.tickets, ...result[1].tickets].sort((a, b) => a.price - b.price)
      // filterSlice.actions.checkFilter()
      state.enough = result[1].stop
    })
  },
})

export const appActions = appToolsSlice.actions

export default appToolsSlice.reducer
