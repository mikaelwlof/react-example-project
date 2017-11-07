import React from 'react';
import {render} from 'react-dom';
import Game from './game/game.js';
import { Provider } from 'react-redux'
import configureStore from './configureStore.js'
import { BrowserRouter } from 'react-router-dom'
import App from './app.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap';

const store = configureStore();
render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('app')
)
