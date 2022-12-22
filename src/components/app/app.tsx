import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux'
import '../../styles'
import { Dispatch } from 'react'

import logo from '../../image/logo.png'
import TransferCount from '../transfer-count/transfer-count'
import Filters from '../filters/filters'
import TicketList from '../ticket-list/ticket-list'
import Loading from '../../services/loading/loading'
import SearchLoader from '../../services/searching'
import { loaderDisplay as showLoad, loaderHide as hideLoad } from '../../redux/actions'
import { State } from '../../types'

import classes from './app.module.scss'

export type Properties = {
  state: State
  loaderDisplay: () => void
  loaderHide: () => void
}

const App: React.FC<Properties> = ({ state, loaderDisplay, loaderHide }) => {
  const { enough } = state.api

  return (
    <section className={classes.app}>
      {enough && <img src={logo} alt="aviaslaves" className={classes.app__logo}></img>}
      {!enough && <SearchLoader />}
      <div className={classes.wrapper}>
        <TransferCount />
        <div className={classes.content}>
          <Filters />
          <TicketList />
        </div>
      </div>
    </section>
  )
}

const mapStateToProperties = (state: State) => {
  return {
    state,
  }
}

const mapDispatchToProperties = {
  loaderDisplay: hideLoad,
  loaderHide: showLoad,
}

export default connect(mapStateToProperties, mapDispatchToProperties)(App)
