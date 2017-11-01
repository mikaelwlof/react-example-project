import React from 'react'
import { Switch, Route } from 'react-router-dom'
import StartPage from './StartPage.jsx'
import Game from './game/Game.jsx'
import ApiCallPage from './apiCall/ApiCallPage.jsx'

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
