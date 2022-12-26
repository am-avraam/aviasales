import { createSlice } from '@reduxjs/toolkit'

import { A } from './Actions'

interface Action {
  type: string
  payload: string
}

export interface Box {
  name: string
  checked: boolean
}

export type CheckboxState = {
  checkboxes: Box[]
}

const toggleAll = (element: Box, index: number, array: Box[]) => {
  const newSign = array[0].checked
  const newElement = { ...element, checked: !newSign }

  return newElement
}

const allInOff = (array: Box[]) => {
  const newArray = array.map((element, index) => {
    if (index === 0) {
      const newElement: Box = { ...element, checked: !element.checked }
      return newElement
    }
    return element
  })
  return newArray
}

const toggleAddition = (array: Box[]) => {
  const countFilter = [...array].reduce((accum, item) => {
    // eslint-disable-next-line no-param-reassign
    if (item.checked) accum += 1
    return accum
  }, 0)

  if (countFilter === 4 && !array[0].checked) {
    const newArray = array.map(toggleAll)
    return newArray
  }
  if (countFilter === 4) {
    const newArray = allInOff(array)
    return newArray
  }
  return array
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
    [A.TOGGLE]: (state, action: Action) => {
      const newBoxes = state.checkboxes.map((element: Box): Box => {
        if (element.name === action.payload) {
          const newElement = { ...element, checked: !element.checked }
          return newElement
        }
        return element
      })

      return { ...state, checkboxes: toggleAddition(newBoxes) }
    },

    [A.ALL_IN]: (state) => {
      const newBoxes = state.checkboxes.map(toggleAll)
      return { ...state, checkboxes: newBoxes }
    },
  },
})

export default checkboxSlice.reducer
