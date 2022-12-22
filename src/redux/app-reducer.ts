import { genActionStyle } from 'antd/es/alert/style'
import { useDispatch, useSelector } from 'react-redux'

import { ticketsLoad } from './actions'

interface Action {
  type: string
  text: string
}

export type LoaderState = {
  loading: boolean
  error: null | string
  pagination: number
}

const initialState = {
  loading: false,
  error: null,
  pagination: 5,
}

const appReducer = (state: LoaderState = initialState, action: Action): LoaderState => {
  switch (action.type) {
    case 'SHOW_LOADER': {
      return { ...state, loading: true }
    }

    case 'HIDE_LOADER': {
      return { ...state, loading: false }
    }

    case 'ERROR_ON': {
      return { ...state, error: action.text }
    }

    case 'NEXT_FIVE': {
      return { ...state, pagination: state.pagination + 5 }
    }

    default: {
      return state
    }
  }
}

export default appReducer
