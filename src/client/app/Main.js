import React from 'react'
import { Switch, Route } from 'react-router-dom'
import StartPage from './startPage/startPage.js'
import Game from './game/game.js'
import ApiCallPage from './apiCall/apiCallPage.js'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={StartPage}/>
      <Route path='/game' component={Game}/>
      <Route path='/apiCall' component={ApiCallPage}/>
    </Switch>
  </main>
)

export default Main
