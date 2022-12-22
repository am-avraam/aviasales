import React, { ChangeEventHandler } from 'react'
import { connect } from 'react-redux'

import * as actions from '../../redux/actions'
import { State } from '../../types'

import classes from './filters.module.scss'

type Properties = {
  state: State
  checkFilter: ChangeEventHandler<HTMLInputElement>
}

type Filter = {
  name: string
  checked: boolean
}

const Filters: React.FC<Properties> = ({ state, checkFilter }) => {
  const { filters } = state.filters

  const filtersMap = filters.map((filter: Filter, index: number) => {
    const labelClasses = [classes.filters__label]
    if (filter.checked) labelClasses.push(classes.active)

    return (
      <label className={labelClasses.join(' ')} key={index}>
        <input
          onChange={checkFilter}
          type="radio"
          value={filter.name}
          name="choice"
          className={classes.filters__input}
          checked={filter.checked}
        />
        <span className={classes.filters__description}>{filter.name}</span>
      </label>
    )
  })

  return <div className={classes.filters}>{filtersMap}</div>
}

const mapStateToProperties = (state: State) => {
  return {
    state,
  }
}

export default connect(mapStateToProperties, actions)(Filters)
