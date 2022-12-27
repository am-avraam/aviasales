import uniqid from 'uniqid'

import Ticket from '../components/Ticket/Ticket'
import { Box } from '../redux/CheckboxReducer'
import NoResMessage from '../components/Alert/Alert'
import { State } from '../models/stateTypes'
import { TicketTypes } from '../models/ITicket'
import { ListState } from '../redux/AppReducer'

const formatter = (
  filters: State['checkbox']['checkboxes'],
  list: ListState['tickets'],
  pagination: ListState['pagination']
) => {
  const transferCountChecked = filters.filter((box: Box) => box.checked)

  let checkboxSign: number | number[]
  if (transferCountChecked.length === 5) checkboxSign = -1
  else if (transferCountChecked.length && transferCountChecked[0].name === 'Без пересадок') checkboxSign = 0
  else checkboxSign = transferCountChecked.map((box: Box) => (Number.isInteger(+box.name[0]) ? +box.name[0] : 1000))

  let ticketList
  let showMoreVisible
  if (list.length > 1) {
    const listCounted = list.filter((ticket: TicketTypes) => {
      return ticket.segments.some((flight) => {
        if (!checkboxSign && !flight.stops.length) return true
        if (checkboxSign === -1) return true
        if (Array.isArray(checkboxSign) && checkboxSign.some((el) => el === flight.stops.length)) return true
        return false
      })
    })
    ticketList = listCounted.slice(0, pagination).map((ticket: TicketTypes) => {
      return <Ticket key={uniqid()} data={ticket} />
    })
    ticketList = listCounted.length ? ticketList : <NoResMessage />
    showMoreVisible = listCounted.length > 5
  }

  return [ticketList, showMoreVisible]
}

export default formatter
