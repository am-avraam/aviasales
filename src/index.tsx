/* eslint-disable no-underscore-dangle */

import { createStore, compose, applyMiddleware } from 'redux'
import * as ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

// import rootReducer from './redux/RootReducer'
import App from './components/App/App'
import { setupStore } from './redux/Store'

// declare global {
//   interface Window {
//     __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
//   }
// }

// const composeEnhancers =
//   typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     : compose

// export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export const store = setupStore()

const rootElement = document.querySelector('#root')
const root = ReactDOM.createRoot(rootElement as HTMLElement)
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)

export type AppDispatch = typeof store.dispatch
