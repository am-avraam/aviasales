import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

import { appActions } from '../redux/AppReducer'

const useActions = () => {
  const actions = {
    ...appActions,
  }

  const dispatch = useDispatch()
  return bindActionCreators(actions, dispatch)
}

export default useActions
