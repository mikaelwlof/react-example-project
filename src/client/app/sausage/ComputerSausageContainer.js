import SausageComponent from './SausageComponent.jsx'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    width: state.gameData.computerSausage.width,
    currentPiece: state.gameData.computerSausage.currentPiece
  };
}

const ComputerSausageContainer = connect(
  mapStateToProps
)(SausageComponent)

export default ComputerSausageContainer
