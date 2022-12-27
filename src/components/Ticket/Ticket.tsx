import React from 'react'
import uniqid from 'uniqid'
import add from 'date-fns/add'

import S7 from '../../assets/images/S7Logo.png'
import classes from '../TicketList/TicketList.module.scss'
import { TicketTypes } from '../../models/ITicket'

export type Data = {
  data: TicketTypes
}

const definiteTime = (date: Date | string) => {
  const time = new Date(date).toString().split(' ')[4]
  const preparedTime = time.split(':')
  return `${preparedTime[0]}:${preparedTime[1]}`
}

const Ticket = ({ data }: Data) => {
  const { price, carrier, segments } = data

  let formatedPrice = price.toString()
  formatedPrice =
    formatedPrice.length === 5
      ? `${formatedPrice.slice(0, 2)} ${formatedPrice.slice(2)}`
      : `${formatedPrice.slice(0, 3)} ${formatedPrice.slice(3)}`

  const flights = segments.map((flight: TicketTypes['segments'][0]) => {
    let stops
    if (flight.stops.length === 1) stops = '1 пересадка'
    else if (flight.stops.length > 1) stops = `${flight.stops.length} пересадки`
    else stops = 'без пересадок'

    const { duration, date } = flight
    const durationFormated = `${Math.floor(duration / 60)}ч ${duration % 60}м`

    const flightFinish = add(new Date(date), {
      minutes: duration,
    })

    const period = `${definiteTime(date)} - ${definiteTime(flightFinish)}`

    return (
      <div className={classes.ticket__data} key={uniqid()}>
        <div className={classes.ticket__flight}>
          <span className={classes.ticket__path}>{`${flight.origin} - ${flight.destination}`}</span>
          <span className={classes.ticket__time}>{period}</span>
        </div>
        <div className={classes.ticket__duration}>
          <span className={classes.ticket__inscription}>В пути</span>
          <span className={classes.ticket__length}>{durationFormated}</span>
        </div>
        <div className={classes.ticket__transit}>
          <span className={classes.ticket__count}>{stops}</span>
          <span className={classes.ticket__location}>{flight.stops.join(', ')}</span>
        </div>
      </div>
    )
  })

  return (
    <div className={classes.ticket}>
      <div className={classes.ticket__essentials}>
        <span className={classes.ticket__price}>{formatedPrice} &#8381;</span>
        <img className={classes.ticket__logo} src={S7} alt={carrier} />
      </div>
      {flights}
    </div>
  )
}

export default Ticket
