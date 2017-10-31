import React from 'react';
import SausageContainer from '../sausage/SausageContainer.js';
import ComputerSausageContainer from '../sausage/ComputerSausageContainer.js';
import ResultBoardContainer from '../resultBoard/ResultBoardContainer.js';
import {Map, isImmutable} from 'immutable';
import update from 'immutability-helper';
import styles from './gameComponent.css';

class Game extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className={styles.container}>
          <div>
              Your sausage:
              <SausageContainer />
          </div>
          <div>
              Computer sausage:
              <ComputerSausageContainer />
          </div>
        </div>
        <div className={styles.resultBoard}>
          <ResultBoardContainer />
        </div>
      </div>
    );
  }

}

export default Game;
