import { createSlice } from '@reduxjs/toolkit'

import { A } from './Actions'

interface Action {
  type: string
  payload: string
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
    [A.CHECK_FILTER]: (state, action: Action) => {
      const newFilters: Filter[] = state.filters.map((element: Filter) => {
        if (element.name === action.payload) {
          const newElement = { ...element, checked: !element.checked }
          return newElement
        }
        return { ...element, checked: false }
      })

      return { ...state, filters: newFilters }
    },
  },
})

export default filterSlice.reducer
