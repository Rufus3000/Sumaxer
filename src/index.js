import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'
import { Game } from './model/model'

const store = createStore(reducer, { Game: new Game() });
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
