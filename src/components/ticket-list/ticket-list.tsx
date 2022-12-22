import React, { useEffect } from 'react'
import uniqid from 'uniqid'
import { connect } from 'react-redux'

import NoResMessage from '../../services/alert/alert'
import Ticket, { TicketTypes } from '../ticket/ticket'
import { searchInit as init, ticketsLoad as load } from '../../redux/actions'
import ShowMore from '../show-more/show-more'
import { State } from '../../types'
import Loading from '../../services/loading/loading'
import { Box } from '../../redux/checkbox-reducer'

import classes from './ticket-list.module.scss'

type Properties = {
  state: State
  searchInit: () => void
  ticketsLoad: (id: string) => void
}

const TicketList: React.FC<Properties> = ({ state, searchInit, ticketsLoad }) => {
  const id = state.api.sessionID
  const list = state.api.tickets
  const { pagination } = state.loading

  useEffect(() => {
    searchInit()
  }, [])

  useEffect(() => {
    if (!state.api.enough && id) {
      ticketsLoad(id)
    }
  })

  const transferCountChecked = state.checkbox.checkboxes.filter((box: Box) => box.checked)

  let checkboxSign: number | number[]
  if (transferCountChecked.length === 5) checkboxSign = -1
  else if (transferCountChecked.length && transferCountChecked[0].name === 'Без пересадок') checkboxSign = 0
  else checkboxSign = transferCountChecked.map((box: Box) => (Number.isInteger(+box.name[0]) ? +box.name[0] : 1000))

  let ticketList
  let showMoreVisible
  if (list.length > 1) {
    const listCounted = list.filter((ticket: TicketTypes) => {
      return ticket.segments.some((flight) => {
        if (!checkboxSign && !flight.stops.length) return true
        if (checkboxSign === -1) return true
        if (Array.isArray(checkboxSign) && checkboxSign.some((el) => el === flight.stops.length)) return true
        return false
      })
    })
    // const ticketListChecked = list.filter((ticket: TicketTypes) => ticket.visible)
    ticketList = listCounted.slice(0, pagination).map((ticket: TicketTypes) => {
      return <Ticket key={uniqid()} data={ticket} />
    })

    ticketList = listCounted.length ? ticketList : <NoResMessage />
    showMoreVisible = listCounted.length > 5
  }
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

const mapDispatchToProperties = {
  searchInit: init,
  ticketsLoad: load,
}

export default connect(mapStateToProperties, mapDispatchToProperties)(TicketList)
