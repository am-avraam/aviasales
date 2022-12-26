import { connect } from 'react-redux'
import '../../styles'
import { useEffect, useState } from 'react'

import logo from '../../assets/images/logo.png'
import TransferCount from '../TransferCount/TransferCount'
import Filters from '../Filters/Filters'
import TicketList from '../TicketList/TicketList'
import SearchLoader from '../Searching'
import { loaderDisplay as showLoad, loaderHide as hideLoad } from '../../redux/Actions'
import { State } from '../../types'
import { useGetTicketListQuery, useLazyGetTicketListQuery } from '../../services/ListService'
import useActions from '../../hooks/actions'
import { useAppSelector } from '../../hooks/redux'

import classes from './App.module.scss'

export type Properties = {
  state: State
}

const App: React.FC = () => {
  const { tickets, searchId, enough } = useAppSelector((state) => state.loading)

  const [refetch, { isSuccess: succeed, isError: errored }] = useLazyGetTicketListQuery()

  useEffect(() => {
    if (!searchId || (!searchId && errored)) refetch('')
    if (!enough && searchId) {
      refetch(searchId)
    }
  }, [tickets.length, succeed, errored])

  const header = enough ? <img src={logo} alt="aviaslaves" className={classes.app__logo}></img> : <SearchLoader />

  return (
    <section className={classes.app}>
      {header}
      <div className={classes.wrapper}>
        <TransferCount />
        <div className={classes.content}>
          {/* <Filters />
          <TicketList /> */}
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

export default App
