// import { configureStore } from '@reduxjs/toolkit'
import { createStore } from 'redux'
import * as ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import reducer from './redux/reducer'
import type { Reducer } from './redux/reducer'
// import * as actions from './redux/actions'
import App from './components/app/app'

const store = createStore(reducer)

const rootElement = document.querySelector('#root')
const root = ReactDOM.createRoot(rootElement as HTMLElement)
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)

export type AppDispatch = typeof store.dispatch
