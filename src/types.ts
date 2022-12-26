import { CheckboxState } from './redux/CheckboxReducer'
import { FilterState } from './redux/FilterReducer'
import { ApiState } from './redux/SessionReducer'
import { LoaderState } from './redux/AppReducer'

export type State = {
  checkbox: CheckboxState
  filters: FilterState
  api: ApiState
  loading: LoaderState
  ticketsAPI: any
}
