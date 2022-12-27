import { CheckboxState } from '../redux/CheckboxReducer'
import { FilterState } from '../redux/FilterReducer'
import { ListState } from '../redux/AppReducer'
import { TicketsAPIState } from '../services/ListApi'

export type State = {
  checkbox: CheckboxState
  filters: FilterState
  list: ListState
  ticketsAPI: TicketsAPIState
}
