import { TicketTypes } from '../components/ticket/ticket'

interface Action {
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

const optimal = (arr: ApiState['tickets']) => {
  const firstThird = arr.slice(0, Math.floor((arr.length * 1) / 3))
  const secondThird = arr.slice(Math.floor(arr.length / 3), Math.floor((arr.length * 2) / 3))
  const lastThird = arr.slice(Math.floor((arr.length * 2) / 3))

  const result = [
    ...firstThird.sort(
      (a, b) => a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration)
    ),
    ...secondThird.sort(
      (a, b) => a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration)
    ),
    ...lastThird.sort(
      (a, b) => a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration)
    ),
  ]

  return result
}

const sessionReducer = (state: ApiState = initialState, action: Action): ApiState => {
  switch (action.type) {
    case 'SESSION_INIT': {
      if (action.sessionId) {
        // ticketsLoad(action.sessionId)
        return { ...state, sessionID: action.sessionId }
      }
      return state
    }

    case 'TICKETS_LOAD': {
      const newList = [...state.tickets, ...action.data.tickets].sort((a, b) => a.price - b.price)
      return { ...state, tickets: newList, enough: action.data.stop }
    }

    case 'SERVER_ERROR': {
      return { ...state, error: action.error }
    }

    case 'CHECK_FILTER': {
      let sortedList: TicketTypes[] = []
      const cheepestList = [...state.tickets].sort((a, b) => a.price - b.price)
      const fastestList = [...state.tickets].sort((a, b) => {
        return a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration)
      })
      const optimalList = optimal(cheepestList)

      if (action.name === 'Оптимальный') sortedList = optimalList
      if (action.name === 'Самый быстрый') sortedList = fastestList
      if (action.name === 'Самый дешевый') sortedList = cheepestList
      // else

      return { ...state, tickets: sortedList }
    }

    // case 'TOGGLE': {
    //   if (action.name === 'Все') return state

    //   const sign = +action.name[0]

    //   const filteredList = [...state.tickets].map((ticket) => {
    //     if (action.name === 'Без пересадок') {
    //       if (ticket.segments.some((flight: any) => flight.stops.length === 0)) return ticket
    //       return { ...ticket, visible: !ticket.visible }
    //     }

    //     if (ticket.segments.some((flight: any) => flight.stops.length === sign)) return ticket
    //     return { ...ticket, visible: !ticket.visible }
    //   })

    //   return state
    // }

    default: {
      return state
    }
  }
}

export default sessionReducer
