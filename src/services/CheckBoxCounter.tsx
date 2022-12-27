import { Box } from '../redux/CheckboxReducer'

export const toggleAll = (element: Box, index: number, array: Box[]) => {
  const newSign = array[0].checked
  const newElement = { ...element, checked: !newSign }

  return newElement
}

export const allInOff = (array: Box[]) => {
  const newArray = array.map((element, index) => {
    if (index === 0) {
      const newElement: Box = { ...element, checked: !element.checked }
      return newElement
    }
    return element
  })
  return newArray
}

export const toggleAddition = (array: Box[]) => {
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
