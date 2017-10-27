import React from 'react';
import styles from './sausageComponent.css';

class SausageComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  getSausageWidth () {
    return '' + this.props.width + 'px';
  }

  getCurrentPieceWidth () {
    return '' + this.props.currentPiece + 'px';
  }

  handleClick(event) {
    this.props.onClick(event);
  }

  render() {
    return (
      <div>
        <div ref={div => this.divElement = div} className={styles.sausage} style={{width: this.getSausageWidth()}} onClick={(event) => this.handleClick(event)}> </div>

        <div className={styles.sausage} style={{width: this.getCurrentPieceWidth()}}></div>
      </div>
    );
  }

}

export default SausageComponent;
