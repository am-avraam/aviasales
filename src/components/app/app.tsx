// import { Component } from 'react'
// import { Offline, Online } from 'react-detect-offline'
import '../../styles'
import logo from '../../image/logo.png'
import TransferCount from '../transfer-count/transfer-count'
import Filters from '../filters/filters'
import TicketList from '../ticket-list/ticket-list'
import ShowMore from '../show-more/show-more'

import classes from './app.module.scss'

const App: React.FC = () => {
  return (
    <section className={classes.app}>
      <img src={logo} alt="aviaslaves" className={classes.app__logo}></img>
      <div className={classes.wrapper}>
        <TransferCount />
        <div className={classes.content}>
          <Filters />
          <TicketList />
          <ShowMore />
        </div>
      </div>
    </section>
  )
}

export default App
