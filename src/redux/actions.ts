// import { Dispatch } from 'redux'

// const API = 'https://aviasales-test-api.kata.academy/tickets?'

export const A = {
  TOGGLE: 'TOGGLE',
  ALL_IN: 'ALL_IN',
  CHECK_FILTER: 'CHECK_FILTER',
  TICKETS_LOAD: 'TICKETS_LOAD',
  SERVER_ERROR: 'SERVER_ERROR',
  SESSION_INIT: 'SESSION_INIT',
  SHOW_LOADER: 'SHOW_LOADER',
  HIDE_LOADER: 'HIDE_LOADER',
  ERROR_ON: 'ERROR_ON',
  NEXT_FIVE: 'NEXT_FIVE',
}

export const toggle = (event: React.ChangeEvent<HTMLInputElement>) => {
  return {
    type: A.TOGGLE,
    name: event.target.value,
  }
}
export const allIn = () => {
  return {
    type: A.ALL_IN,
  }
}

export const checkFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
  return {
    type: A.CHECK_FILTER,
    payload: event.target.value,
  }
}

// eslint-disable-next-line consistent-return
export const ticketsLoad = (packa: object) => {
  return {
    type: A.TICKETS_LOAD,
    payload: packa,
  }
}

export const loaderDisplay = () => {
  return {
    type: A.SHOW_LOADER,
  }
}

export const loaderHide = () => {
  return {
    type: A.HIDE_LOADER,
  }
}

export const errorOn = (text: string | object) => {
  return {
    type: A.ERROR_ON,
    payload: text,
  }
}

export const showMore = () => {
  return {
    type: A.NEXT_FIVE,
  }
}
