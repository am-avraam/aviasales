interface Action {
  type: string
  name: string
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
}

const filterReducer = (state: FilterState = initialState, action: Action) => {
  switch (action.type) {
    case 'CHECK_FILTER': {
      const newFilters = state.filters.map((element: Filter) => {
        if (element.name === action.name) {
          const newElement = { ...element, checked: !element.checked }
          return newElement
        }
        return { ...element, checked: false }
      })
      // console.log(state.filters)

      return { ...state, filters: newFilters }
    }

    default: {
      return state
    }
  }
}

export default filterReducer
