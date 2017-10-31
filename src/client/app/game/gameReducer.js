import update from 'immutability-helper';

let initState = {
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

const gameDataReducer = (state = initState, action) => {
  switch (action.type) {
    case 'PICKED_PART_OF_SAUSAGE':

    let newUserSausage = getUserSausageValues(action.position, state.userSausage);
    let newComputerSausage = makeComputerMove(state);
    let newPoints = getPoints(state.points, newUserSausage, newComputerSausage);

    return {
      ...state,
      userSausage: newUserSausage,
      computerSausage: newComputerSausage,
      points: newPoints
    }
    default:
    return state
  }
}

function getUserSausageValues(position, currentSausage) {
  let theRest = currentSausage.width - position;
  return {currentPiece: theRest, width: position};
}

function makeComputerMove(state) {
  let pieceToTake = state.computerSausage.width * Math.random();
  let pieceLeft = state.computerSausage.width - pieceToTake;
  return {currentPiece: pieceToTake, width : pieceLeft};
}

function getPoints(points, newUserSausage, newComputerSausage) {
  if(newUserSausage.currentPiece > newComputerSausage.currentPiece) {
    return update(points, {user: {$apply: (x) => x + 1}});
  } else {
    return update(points, {computer: {$apply: (x) => x + 1}});
  }
}

export default gameDataReducer
