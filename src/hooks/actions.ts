import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

import { appActions } from '../redux/AppReducer'
import { checkboxActions } from '../redux/CheckboxReducer'

const useActions = () => {
  const actions = {
    ...appActions,
    ...checkboxActions,
  }

  const dispatch = useDispatch()
  return bindActionCreators(actions, dispatch)
}

export default useActions
