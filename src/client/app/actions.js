export const pickPartOfSausage = position => {
  return {
    type: 'PICKED_PART_OF_SAUSAGE',
    position: position
  }
}

export function fetchApiDataSuccess(responseJson) {
    return {
        type: 'API_FETCH_DATA_SUCCESS',
        responseJson
    };
}

export function fetchApiData(url) {
    return (dispatch) => {
        fetch(url)
            .then((response) => {
                return response;
            })
            .then((response) => response.json())
            .then((responseJson) => dispatch(fetchApiDataSuccess(responseJson)));
    };
}
