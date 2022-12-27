import React from 'react'
import { connect } from 'react-redux'

import ShowMore from '../ShowMore/ShowMore'
import { State } from '../../models/stateTypes'
import Loading from '../Loading/Loading'
import format from '../../services/FormList'

import classes from './TicketList.module.scss'

type Properties = {
  state: State
}

const TicketList: React.FC<Properties> = ({ state }) => {
  const list = state.list.tickets
  const filters = state.checkbox.checkboxes
  const { pagination } = state.list

  const [ticketList, showMoreVisible] = format(filters, list, pagination)

  return (
    <>
      <div className={classes.ticketlist}>{ticketList || <Loading />}</div>
      {showMoreVisible && <ShowMore />}
    </>
  )
}

const mapStateToProperties = (state: State) => {
  return {
    state,
  }
}

export default connect(mapStateToProperties)(TicketList)
