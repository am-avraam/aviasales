import { TicketTypes } from '../models/ITicket'
import { optimal, filterList } from '../services/Sorter'

import { A } from './Actions'

export interface Action {
  type: string
  sessionId: string
  data: {
    tickets: TicketTypes[]
    stop: boolean
  }
  error: object
  name: string
}

export type ApiState = {
  sessionID: string
  tickets: TicketTypes[]
  enough: boolean
  loading: boolean
  error: object
}

const initialState = {
  sessionID: '',
  tickets: [],
  enough: false,
  loading: false,
  error: {},
}

const sessionReducer = (state: ApiState = initialState, action: Action): ApiState => {
  switch (action.type) {
    case A.SESSION_INIT: {
      return action.sessionId ? { ...state, sessionID: action.sessionId } : state
    }

    case A.TICKETS_LOAD: {
      const newList = [...state.tickets, ...action.data.tickets].sort((a, b) => a.price - b.price)
      return { ...state, tickets: newList, enough: action.data.stop }
    }

    case A.SERVER_ERROR: {
      return { ...state, error: action.error }
    }

    case A.CHECK_FILTER: {
      const sortedList = filterList(action.name, state.tickets)
      return { ...state, tickets: sortedList }
    }

    default: {
      return state
    }
  }
}

export default sessionReducer
