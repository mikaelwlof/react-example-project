import ResultBoardComponent from './resultBoardComponent.js'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    userPoints: state.gameData.points.user,
    computerPoints: state.gameData.points.computer
  };
}

const ResultBoardContainer = connect(
  mapStateToProps
)(ResultBoardComponent)

export default ResultBoardContainer
