import React from 'react';

const ResultBoardComponent = (props) => {
  const getWinner = () => {
    if(props.userPoints >= 3) {
      return 'USER';
    }
    if(props.computerPoints >= 3) {
      return 'COMPUTER';
    }
    return 'none';
  };

  return (
    <div>
      <div>
        Your points: {props.userPoints}
      </div>
      <div>
        Computer points: {props.computerPoints}
      </div>
      <div>
        Winner is: {getWinner}
      </div>
    </div>
  );
}

export default ResultBoardComponent;
