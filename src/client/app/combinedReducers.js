import { combineReducers } from 'redux'
import gameDataReducer from './game/gameReducer.js'
import apiCallReducer from './apiCall/apiCallReducer.js'

const sausageApp = combineReducers({
  gameData: gameDataReducer,
  apiResponseText: apiCallReducer
})

export default sausageApp
