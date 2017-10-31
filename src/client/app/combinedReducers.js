import { combineReducers } from 'redux'
import gameDataReducer from './game/gameReducer.js'

const sausageApp = combineReducers({
  gameData: gameDataReducer
})

export default sausageApp
