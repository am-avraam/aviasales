import { CheckboxState } from './redux/checkbox-reducer'
import { FilterState } from './redux/filter-reducer'
import { ApiState } from './redux/session-reducer'
import { LoaderState } from './redux/app-reducer'

export type State = {
  checkbox: CheckboxState
  filters: FilterState
  api: ApiState
  loading: LoaderState
}
