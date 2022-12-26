import { createSlice } from '@reduxjs/toolkit'

import useActions from '../hooks/actions'
import { TicketTypes } from '../models/ITicket'
import { ticketsAPI } from '../services/ListService'

import { A } from './Actions'

interface Action {
  type: string
  payload: any
}

export type LoaderState = {
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
} as LoaderState

export const appToolsSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    [A.SHOW_LOADER]: (state) => {
      return { ...state, loading: true }
    },

    [A.HIDE_LOADER]: (state) => {
      return { ...state, loading: false }
    },

    [A.ERROR_ON]: (state, action: Action) => {
      return { ...state, error: action.payload }
    },

    [A.NEXT_FIVE]: (state) => {
      return { ...state, pagination: state.pagination + 5 }
    },

    // ticketLoad: (state, action: Action) => {
    //   const newId = action.payload[0].searchId === state.searchId ? state.searchId : action.payload[0].searchId
    //   const newList = [...state.tickets, ...action.payload[1].tickets].sort((a, b) => a.price - b.price)
    //   return { ...state, tickets: newList, searchId: newId, enough: action.payload[1].stop }
    // },
  },
  extraReducers: async (builder) => {
    builder.addMatcher(ticketsAPI.endpoints.getTicketList.matchFulfilled, (state, { payload: result }) => {
      const newId = state.searchId ? state.searchId : result[0]
      const newList = [...state.tickets, ...result[1].tickets].sort((a, b) => a.price - b.price)
      return { ...state, tickets: newList, searchId: newId, enough: result[1].stop }
    })
  },
})

export const appActions = appToolsSlice.actions

export default appToolsSlice.reducer
