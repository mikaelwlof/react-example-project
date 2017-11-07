import SausageComponent from './sausageComponent.js'
import { pickPartOfSausage } from '../gameActions.js'
import { connect } from 'react-redux'

const mapDispatchToProps = dispatch => {
  return {
    onClick: position => {
      dispatch(pickPartOfSausage(position))
    }
  }
}

const mapStateToProps = state => {
  return {
    width: state.gameData.userSausage.width,
    currentPiece: state.gameData.userSausage.currentPiece
  };
}

const SausageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SausageComponent)

export default SausageContainer
