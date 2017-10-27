import React from 'react';
import {render} from 'react-dom';
import Game from './components/Game.jsx';

class App extends React.Component {

  render() {
    return (
      <Game />
    );
  }
}

render(
  <App/>, document.getElementById('app'));
