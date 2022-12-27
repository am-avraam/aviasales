/* eslint-disable no-underscore-dangle */

import * as ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import App from './components/App/App'
import { setupStore } from './redux/Store'

export const store = setupStore()

const rootElement = document.querySelector('#root')
const root = ReactDOM.createRoot(rootElement as HTMLElement)
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)

export type AppDispatch = typeof store.dispatch
