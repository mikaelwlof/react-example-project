import React from 'react'
import Header from './header.js'
import Main from './main.js'
import styles from './app.css';

const App = () => (
  <div className={styles.background}>
    <div className="container">
      <Header />
      <Main />
    </div>
  </div>
)

export default App
