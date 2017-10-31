import React from 'react';

class ResultBoardComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  getWinner () {
    if(this.props.userPoints >= 3) {
      return 'USER';
    }
    if(this.props.computerPoints >= 3) {
      return 'COMPUTER';
    }
    return 'none';
  }

  render() {
    return (
      <div>
        <div>
          Your points: {this.props.userPoints}
        </div>
        <div>
          Computer points: {this.props.computerPoints}
        </div>
        <div>
          Winner is: {this.getWinner()}
        </div>
      </div>
    );
  }

}

export default ResultBoardComponent;
