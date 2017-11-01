import ApiCallComponent from './ApiCallComponent.jsx'
import { connect } from 'react-redux'
import { fetchApiData } from '../actions.js'

const mapDispatchToProps = dispatch => {
  return {
    fetchData: (url) => dispatch(fetchApiData(url))
  }
}

const mapStateToProps = state => {
  return {
    apiResponseText: state.apiResponseText.responseJson
  };
}

const ApiCallPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(ApiCallComponent)

export default ApiCallPage
