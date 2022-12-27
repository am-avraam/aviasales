import '../../styles'
import { useEffect } from 'react'

import logo from '../../assets/images/logo.png'
import TransferCount from '../TransferCount/TransferCount'
import Filters from '../Filters/Filters'
import TicketList from '../TicketList/TicketList'
import SearchLoader from '../Searching'
import { State } from '../../models/stateTypes'
import { useLazyGetTicketListQuery } from '../../services/ListApi'
import { useAppSelector } from '../../hooks/redux'

import classes from './App.module.scss'

export type Properties = {
  state: State
}

const App: React.FC = () => {
  const { tickets, searchId, enough } = useAppSelector((state) => state.list)

  const [refetch, { isSuccess: succeed, isError: errored }] = useLazyGetTicketListQuery()

  useEffect(() => {
    if (!searchId || (!searchId && errored)) refetch('')
    if (!enough && searchId) refetch(searchId)
  }, [tickets.length, succeed, errored])

  const header = enough ? <img src={logo} alt="aviaslaves" className={classes.app__logo}></img> : <SearchLoader />

  return (
    <section className={classes.app}>
      {header}
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

export default App
