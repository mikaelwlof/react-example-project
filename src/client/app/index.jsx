import React from 'react';
import {render} from 'react-dom';
import Game from './game/Game.jsx';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import sausageApp from './combinedReducers.js'

let store = createStore(sausageApp);
render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('app')
)
