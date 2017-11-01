import React from 'react';
import {render} from 'react-dom';
import Game from './game/Game.jsx';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import configureStore from './configureStore.js'
import { BrowserRouter } from 'react-router-dom'
import App from './App.js'

const store = configureStore();
render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('app')
)
