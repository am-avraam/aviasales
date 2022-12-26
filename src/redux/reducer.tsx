/* eslint-disable default-param-last */
import { A } from './Actions'

interface Action {
  type: string
  name: string
}

interface Box {
  name: string
  checked: boolean
  index: number
}

interface Filter {
  name: string
  checked: boolean
}

export type State = {
  checkboxes: Box[]
  filters: Filter[]
}

const initialState: State = {
  checkboxes: [
    { name: 'all', checked: false, index: 100 },
    { name: 'Без пересадок', checked: false, index: 0 },
    { name: '1 пересадка', checked: false, index: 1 },
    { name: '2 пересадки', checked: false, index: 2 },
    { name: '3 пересадки', checked: false, index: 3 },
  ],
  filters: [
    { name: 'Самый дешевый', checked: false },
    { name: 'Самый быстрый', checked: false },
    { name: 'Оптимальный', checked: false },
  ],
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

const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case A.TOGGLE: {
      const newBoxes = state.checkboxes.map((element): Box => {
        if (element.name === action.name) {
          const newElement = { ...element, checked: !element.checked }
          return newElement
        }
        return element
      })

      return { ...state, checkboxes: toggleAddition(newBoxes) }
    }

    case A.ALL_IN: {
      const newBoxes = state.checkboxes.map(toggleAll)

      return { ...state, checkboxes: newBoxes }
    }

    case A.CHECK_FILTER: {
      const newFilters = state.filters.map((element: Filter) => {
        if (element.name === action.name) {
          const newElement = { ...element, checked: !element.checked }
          return newElement
        }
        return { ...element, checked: false }
      })
      console.log(state.filters)

      return { ...state, filters: newFilters }
    }

    default: {
      return state
    }
  }
}

export default reducer

export type Reducer = typeof reducer
