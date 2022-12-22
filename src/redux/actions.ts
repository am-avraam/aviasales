import { ThunkDispatch } from 'redux-thunk'
import { Action, AnyAction, Dispatch } from 'redux'

import { store } from '../index'

const API = 'https://aviasales-test-api.kata.academy/tickets?'

export const toggle = (event: React.ChangeEvent<HTMLInputElement>) => {
  return {
    type: 'TOGGLE',
    name: event.target.value,
  }
}
export const allIn = () => {
  return {
    type: 'ALL_IN',
  }
}

export const checkFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
  return {
    type: 'CHECK_FILTER',
    name: event.target.value,
  }
}

// eslint-disable-next-line consistent-return
export const ticketsLoad = (id: string) => {
  // if (!store.getState().api.enough) {
  return async (dispatch: Dispatch) => {
    try {
      let response = await fetch(`${API}searchId=${id}`)

      if (!response.ok) {
        response = await fetch(`${API}searchId=${id}`)
      }

      const jsonData = await response.json()

      dispatch({
        type: 'TICKETS_LOAD',
        data: jsonData,
      })

      ticketsLoad(id)
    } catch (err) {
      ticketsLoad(id)

      dispatch({
        type: 'SERVER_ERROR',
        error: { err },
      })
    }
    // finally {
    // }
  }
  // }
  // return null
}

export const searchInit = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await fetch('https://aviasales-test-api.kata.academy/search')

      const jsonData = await response.json()

      dispatch({
        type: 'SESSION_INIT',
        sessionId: jsonData.searchId,
      })
    } catch (err: unknown) {
      if (err instanceof Error) throw new Error(err.message)
    }
  }
}

export const loaderDisplay = () => {
  return {
    type: 'SHOW_LOADER',
  }
}

export const loaderHide = () => {
  return {
    type: 'HIDE_LOADER',
  }
}

export const errorOn = (text: string | object) => {
  return {
    type: 'ERROR_ON',
    text,
  }
}

export const showMore = () => {
  return {
    type: 'NEXT_FIVE',
  }
}
