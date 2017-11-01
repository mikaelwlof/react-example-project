const apiCallReducer = (state = {apiResponseText: 'Nothing yet'}, action) => {
  switch (action.type) {
    case 'API_FETCH_DATA_SUCCESS':

    return {
      ...state,
      responseJson: action.responseJson.message
    }
    default:
    return state
  }
}

export default apiCallReducer
