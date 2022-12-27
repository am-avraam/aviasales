import React from 'react'
import { connect } from 'react-redux'

import { useAppSelector } from '../../hooks/redux'
import useActions from '../../hooks/actions'
import { State } from '../../models/stateTypes'

import classes from './Filters.module.scss'

type Properties = {
  state: State
}

type Filter = {
  name: string
  checked: boolean
}

const Filters: React.FC = () => {
  const { filters } = useAppSelector((state) => state.filters)
  const { checkFilter } = useActions()

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

export default Filters
