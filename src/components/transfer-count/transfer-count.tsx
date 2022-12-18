import React, { ChangeEventHandler, useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../../redux/actions'
import type { AppDispatch } from '../../index'
import type { State } from '../../redux/reducer'

import classes from './transfer-count.module.scss'

type Properties = {
  state: any
  allIn: ChangeEventHandler<HTMLInputElement>
  toggle: ChangeEventHandler<HTMLInputElement>
}

const TransferCount: React.FC<Properties> = ({ state, allIn, toggle }) => {
  // console.log(state)

  return (
    <div className={classes['transfer-count']}>
      <h2 className={classes['transfer-count__title']}>Количество пересадок</h2>
      <label className={classes['transfer-count__label']}>
        <input
          type="checkbox"
          className={classes['transfer-count__checkbox']}
          onChange={allIn}
          value="Все"
          checked={state.checkboxes[0].checked}
        />
        <span>Все</span>
      </label>

      <div className={classes['transfer-count__group']}>
        <label className={classes['transfer-count__label']}>
          <input
            type="checkbox"
            className={classes['transfer-count__checkbox']}
            onChange={toggle}
            value="Без пересадок"
            checked={state.checkboxes[1].checked}
          />
          <span>Без пересадок</span>
        </label>
        <label className={classes['transfer-count__label']}>
          <input
            type="checkbox"
            className={classes['transfer-count__checkbox']}
            onChange={toggle}
            value="1 пересадка"
            checked={state.checkboxes[2].checked}
          />
          <span>1 пересадка</span>
        </label>
        <label className={classes['transfer-count__label']}>
          <input
            type="checkbox"
            className={classes['transfer-count__checkbox']}
            onChange={toggle}
            value="2 пересадки"
            checked={state.checkboxes[3].checked}
          />
          <span>2 пересадки</span>
        </label>
        <label className={classes['transfer-count__label']}>
          <input
            type="checkbox"
            className={classes['transfer-count__checkbox']}
            onChange={toggle}
            value="3 пересадки"
            checked={state.checkboxes[4].checked}
          />
          <span>3 пересадки</span>
        </label>
      </div>
    </div>
  )
}

const mapStateToProperties = (state: object) => {
  return {
    state,
  }
}

// const mapDispatchToProperties = (dispatch: AppDispatch) => {
//   const { toggle, allIn } = bindActionCreators(actions, dispatch)

//   return {
//     toggle,
//     allIn,
//   }
// }

export default connect(mapStateToProperties, actions)(TransferCount)
