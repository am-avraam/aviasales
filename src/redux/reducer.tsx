/* eslint-disable unicorn/no-array-callback-reference */
/* eslint-disable default-param-last */
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

// interface Boxes {
//   box: Box[]
// }

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
  // newElement = { ...newElement, checked: !newElement.checked }
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
  // eslint-disable-next-line unicorn/no-array-reduce
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
    case 'TOGGLE': {
      const newBoxes = state.checkboxes.map((element): Box => {
        if (element.name === action.name) {
          const newElement = { ...element, checked: !element.checked }
          return newElement
        }
        return element
      })

      return { ...state, checkboxes: toggleAddition(newBoxes) }
    }

    case 'ALL_IN': {
      const newBoxes = state.checkboxes.map(toggleAll)

      return { ...state, checkboxes: newBoxes }
    }

    case 'CHECK_FILTER': {
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
