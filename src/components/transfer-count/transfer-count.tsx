import React, { ChangeEventHandler, useState } from 'react'
import { connect } from 'react-redux'
import uniqid from 'uniqid'

import * as actions from '../../redux/actions'
import { Box } from '../../redux/checkbox-reducer'
import { State } from '../../types'

import classes from './transfer-count.module.scss'

type Properties = {
  state: State
  allIn: ChangeEventHandler<HTMLInputElement>
  toggle: ChangeEventHandler<HTMLInputElement>
}

const TransferCount: React.FC<Properties> = ({ state, allIn, toggle }) => {
  const { checkboxes } = state.checkbox

  const boxesToRender = checkboxes.map((box: Box, i: number) => {
    return (
      <label className={classes['transfer-count__label']} key={uniqid()}>
        <input
          type="checkbox"
          className={classes['transfer-count__checkbox']}
          onChange={i === 0 ? allIn : toggle}
          value={box.name}
          checked={box.checked}
        />
        <span>{box.name}</span>
      </label>
    )
  })

  return (
    <div className={classes['transfer-count']}>
      <h2 className={classes['transfer-count__title']}>Количество пересадок</h2>

      {boxesToRender[0]}

      <div className={classes['transfer-count__group']}>{boxesToRender.slice(1)}</div>
    </div>
  )
}

const mapStateToProperties = (state: State) => {
  return {
    state,
  }
}

export default connect(mapStateToProperties, actions)(TransferCount)
