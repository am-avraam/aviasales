/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

import { toggleAddition, toggleAll } from '../services/CheckBoxCounter'

interface Action {
  type: string
  payload: React.ChangeEvent<HTMLInputElement>
}

export interface Box {
  name: string
  checked: boolean
}

export type CheckboxState = {
  checkboxes: Box[]
}

const initialState = {
  checkboxes: [
    { name: 'Все', checked: false },
    { name: 'Без пересадок', checked: true },
    { name: '1 пересадка', checked: true },
    { name: '2 пересадки', checked: true },
    { name: '3 пересадки', checked: false },
  ],
} as CheckboxState

export const checkboxSlice = createSlice({
  name: 'checkbox',
  initialState,
  reducers: {
    toggle: (state, action: Action) => {
      const newBoxes = state.checkboxes.map((element: Box): Box => {
        if (element.name === action.payload.target.value) {
          const newElement = { ...element, checked: !element.checked }
          return newElement
        }
        return element
      })
      state.checkboxes = toggleAddition(newBoxes)
    },

    checkAll: (state) => {
      state.checkboxes = state.checkboxes.map(toggleAll)
    },
  },
})

export default checkboxSlice.reducer
export const checkboxActions = checkboxSlice.actions
