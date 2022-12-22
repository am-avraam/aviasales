import React, { useState, useEffect, Dispatch } from 'react'
import uniqid from 'uniqid'
import { useDispatch, useSelector, connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { Action, AnyAction, bindActionCreators } from 'redux'
import add from 'date-fns/add'
import formatDuration from 'date-fns/formatDuration'

import S7 from '../../image/S7Logo.png'
import classes from '../ticket-list/ticket-list.module.scss'

export interface TicketTypes {
  // Цена в рублях
  price: number
  // Код авиакомпании (iata)
  carrier: string
  // Массив перелётов.
  // В тестовом задании это всегда поиск "туда-обратно" значит состоит из двух элементов

  // visible: boolean
  segments: [
    {
      // Код города (iata)
      origin: string
      // Код города (iata)
      destination: string
      // Дата и время вылета туда
      date: string
      // Массив кодов (iata) городов с пересадками
      stops: string[]
      // Общее время перелёта в минутах
      duration: number
    },
    {
      // Код города (iata)
      origin: string
      // Код города (iata)
      destination: string
      // Дата и время вылета обратно
      date: string
      // Массив кодов (iata) городов с пересадками
      stops: string[]
      // Общее время перелёта в минутах
      duration: number
    }
  ]
}

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

  // const durationTo = add(flightTo.date, {
  //   minutes: flightTo.duration,
  // })

  // const durationBack = add(flightBack.date, flightBack.duration)

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

      {/* <div className={classes.ticket__data}>
        <div className={classes.ticket__flight}>
          <span className={classes.ticket__path}>{`${flightTo.origin} - ${flightTo.destination}`}</span>
          <span className={classes.ticket__time}>10:45 - 08:00</span>
        </div>
        <div className={classes.ticket__duration}>
          <span className={classes.ticket__inscription}>В пути</span>
          <span className={classes.ticket__length}>13ч 30м</span>
        </div>
        <div className={classes.ticket__transit}>
          <span className={classes.ticket__count}>2 пересадки</span>
          <span className={classes.ticket__location}>HKG, JNB</span>
        </div>
      </div> */}

      {/* <div className={classes.ticket__data}>
        <div className={classes.ticket__flight}>
          <span className={classes.ticket__path}>{`${flightBack.origin} - ${flightBack.destination}`}</span>
          <span className={classes.ticket__time}>11:20 - 00:50</span>
        </div>
        <div className={classes.ticket__duration}>
          <span className={classes.ticket__inscription}>В пути</span>
          <span className={classes.ticket__length}>13ч 30м</span>
        </div>
        <div className={classes.ticket__transit}>
          <span className={classes.ticket__count}>1 пересадка</span>
          <span className={classes.ticket__location}>HKG</span>
        </div>
      </div> */}
    </div>
  )
}

export default Ticket
