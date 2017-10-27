import React from 'react';
import SausageComponent from './SausageComponent.jsx';
import {Map, isImmutable} from 'immutable';
import update from 'immutability-helper';

class Game extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      winner: 'none',
      points: {
        user: 0,
        computer: 0
      },
      userSausage: {
        width: 100,
        currentPiece: 0
      },
      computerSausage: {
        width: 100,
        currentPiece: 0
      }
    }
  }

  handleUserClick(event) {
    let newUserSausage = this.getUserSausageValues(event);
    this.setState({userSausage: newUserSausage});
    let newComputerSausage = this.makeComputerMove();
    this.setState({computerSausage: newComputerSausage});
    let newPoints = this.getPoints(newUserSausage, newComputerSausage);
    this.setState({points:newPoints});
    this.evaluateWinner(newPoints);
  }

  getUserSausageValues(event) {
    let clickPosition = event.nativeEvent.offsetX;
    let theRest = event.target.getBoundingClientRect().width - clickPosition;
    return {currentPiece: theRest, width: clickPosition};
  }

  makeComputerMove() {
    let pieceToTake = this.state.computerSausage.width * Math.random();
    let pieceLeft = this.state.computerSausage.width - pieceToTake;
    return {currentPiece: pieceToTake, width : pieceLeft};
  }

  getPoints(newUserSausage, newComputerSausage) {
    if(newUserSausage.currentPiece > newComputerSausage.currentPiece) {
      return update(this.state.points, {user: {$apply: (x) => x + 1}});
    } else {
      return update(this.state.points, {computer: {$apply: (x) => x + 1}});
    }
  }

  evaluateWinner(newPoints) {
    if(newPoints.user >= 3) {
      this.state.winner = 'USER'
    } else if(newPoints.computer >= 3) {
      this.state.winner = 'COMPUTER'
    }
  }

  render() {
    return (
      <div>
        <div>
            Your sausage:
            <SausageComponent
            onClick={(event) => this.handleUserClick(event)}
            width = {this.state.userSausage.width}
            currentPiece = {this.state.userSausage.currentPiece} />
        </div>
        <div>
            Computer sausage:
            <SausageComponent
              width = {this.state.computerSausage.width}
              currentPiece = {this.state.computerSausage.currentPiece} />
        </div>
        <div>
          Your points: {this.state.points.user}
        </div>
        <div>
          Computer points: {this.state.points.computer}
        </div>
        <div>
          Winner is: {this.state.winner}
        </div>
      </div>
    );
  }

}

export default Game;
