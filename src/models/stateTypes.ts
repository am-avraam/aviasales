import { CheckboxState } from '../redux/CheckboxReducer'
import { ListState } from '../redux/AppReducer'
import { TicketsAPIState } from '../services/ListApi'

export type State = {
  checkbox: CheckboxState
  list: ListState
  ticketsAPI: TicketsAPIState
}
