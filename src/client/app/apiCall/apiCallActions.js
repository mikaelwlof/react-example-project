export const fetchApiData = (url) => {
  return (dispatch) => {
      fetch(url)
          .then((response) => {
              return response;
          })
          .then((response) => response.json())
          .then((responseJson) => dispatch(fetchApiDataSuccess(responseJson)));
  };
}

export const fetchApiDataSuccess = (responseJson) => {
  return {
      type: 'API_FETCH_DATA_SUCCESS',
      responseJson
  };
}
