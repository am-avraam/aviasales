import React, { useState } from 'react'

import S7 from '../../image/S7Logo.png'

import classes from './ticket-list.module.scss'

const TicketList: React.FC = () => {
  return (
    <div className={classes.ticketlist}>
      <div className={classes.ticket}>
        <div className={classes.ticket__essentials}>
          <span className={classes.ticket__price}>13 400 Р</span>
          <img className={classes.ticket__logo} src={S7} alt="logo" />
        </div>
        <div className={classes.ticket__data}>
          <div className={classes.ticket__flight}>
            <span className={classes.ticket__path}>MOW - HKT</span>
            <span className={classes.ticket__time}>10:45 - 08:00</span>
          </div>
          <div className={classes.ticket__duration}>
            <span className={classes.ticket__inscription}>В пути</span>
            <span className={classes.ticket__length}>21ч 15м</span>
          </div>
          <div className={classes.ticket__transit}>
            <span className={classes.ticket__count}>2 пересадки</span>
            <span className={classes.ticket__location}>HKG, JNB</span>
          </div>
        </div>
        <div className={classes.ticket__data}>
          <div className={classes.ticket__flight}>
            <span className={classes.ticket__path}>MOW - HKT</span>
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
        </div>
      </div>

      <div className={classes.ticket}>
        <div className={classes.ticket__essentials}>
          <span className={classes.ticket__price}>13 400 Р</span>
          <img className={classes.ticket__logo} src={S7} alt="logo" />
        </div>
        <div className={classes.ticket__data}>
          <div className={classes.ticket__flight}>
            <span className={classes.ticket__path}>MOW - HKT</span>
            <span className={classes.ticket__time}>10:45 - 08:00</span>
          </div>
          <div className={classes.ticket__duration}>
            <span className={classes.ticket__inscription}>В пути</span>
            <span className={classes.ticket__length}>21ч 15м</span>
          </div>
          <div className={classes.ticket__transit}>
            <span className={classes.ticket__count}>2 пересадки</span>
            <span className={classes.ticket__location}>HKG, JNB</span>
          </div>
        </div>
        <div className={classes.ticket__data}>
          <div className={classes.ticket__flight}>
            <span className={classes.ticket__path}>MOW - HKT</span>
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
        </div>
      </div>

      <div className={classes.ticket}>
        <div className={classes.ticket__essentials}>
          <span className={classes.ticket__price}>13 400 Р</span>
          <img className={classes.ticket__logo} src={S7} alt="logo" />
        </div>
        <div className={classes.ticket__data}>
          <div className={classes.ticket__flight}>
            <span className={classes.ticket__path}>MOW - HKT</span>
            <span className={classes.ticket__time}>10:45 - 08:00</span>
          </div>
          <div className={classes.ticket__duration}>
            <span className={classes.ticket__inscription}>В пути</span>
            <span className={classes.ticket__length}>21ч 15м</span>
          </div>
          <div className={classes.ticket__transit}>
            <span className={classes.ticket__count}>2 пересадки</span>
            <span className={classes.ticket__location}>HKG, JNB</span>
          </div>
        </div>
        <div className={classes.ticket__data}>
          <div className={classes.ticket__flight}>
            <span className={classes.ticket__path}>MOW - HKT</span>
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
        </div>
      </div>

      <div className={classes.ticket}>
        <div className={classes.ticket__essentials}>
          <span className={classes.ticket__price}>13 400 Р</span>
          <img className={classes.ticket__logo} src={S7} alt="logo" />
        </div>
        <div className={classes.ticket__data}>
          <div className={classes.ticket__flight}>
            <span className={classes.ticket__path}>MOW - HKT</span>
            <span className={classes.ticket__time}>10:45 - 08:00</span>
          </div>
          <div className={classes.ticket__duration}>
            <span className={classes.ticket__inscription}>В пути</span>
            <span className={classes.ticket__length}>21ч 15м</span>
          </div>
          <div className={classes.ticket__transit}>
            <span className={classes.ticket__count}>2 пересадки</span>
            <span className={classes.ticket__location}>HKG, JNB</span>
          </div>
        </div>
        <div className={classes.ticket__data}>
          <div className={classes.ticket__flight}>
            <span className={classes.ticket__path}>MOW - HKT</span>
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
        </div>
      </div>
    </div>
  )
}

export default TicketList
