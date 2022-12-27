import { TicketTypes } from '../models/ITicket'
import { ListState } from '../redux/AppReducer'

export const optimal = (arr: ListState['tickets']) => {
  const firstThird = arr.slice(0, Math.floor((arr.length * 1) / 3))
  const secondThird = arr.slice(Math.floor(arr.length / 3), Math.floor((arr.length * 2) / 3))
  const lastThird = arr.slice(Math.floor((arr.length * 2) / 3))

  const result = [
    ...firstThird.sort(
      (a, b) => a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration)
    ),
    ...secondThird.sort(
      (a, b) => a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration)
    ),
    ...lastThird.sort(
      (a, b) => a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration)
    ),
  ]
  return result
}

export const filterList = (name: string, tickets: ListState['tickets']) => {
  let sortedList: TicketTypes[] = []
  const cheepestList = [...tickets].sort((a, b) => a.price - b.price)
  const fastestList = [...tickets].sort((a, b) => {
    return a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration)
  })
  const optimalList = optimal(cheepestList)

  if (name === 'Оптимальный') sortedList = optimalList
  if (name === 'Самый быстрый') sortedList = fastestList
  if (name === 'Самый дешевый') sortedList = cheepestList

  return sortedList
}
