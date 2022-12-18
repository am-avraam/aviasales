import React, { ChangeEventHandler, FormEventHandler } from 'react'
import { connect } from 'react-redux'

import * as actions from '../../redux/actions'

import classes from './filters.module.scss'

type Properties = {
  state: any
  checkFilter: ChangeEventHandler<HTMLInputElement>
  // FormEventHandler<HTMLLabelElement>
}

type Filter = {
  name: string
  checked: boolean
}

const Filters: React.FC<Properties> = ({ state, checkFilter }) => {
  const filtersMap = state.filters.map((filter: Filter, index: number) => {
    const labelClasses = [classes.filters__label]
    if (filter.checked) labelClasses.push(classes.active)
    console.log(labelClasses)

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

  return (
    <div className={classes.filters}>
      {filtersMap}
      {/* // <label className={classes.filters__label}>
  <input
      //     onChange={checkFilter}
      //     type="radio"
      //     value="Самый дешевый"
      //     name="choice"
      //     className={classes.filters__input}
      //     checked={state.filters[0]}
      //   />
      //   <span className={classes.filters__description}>Самый дешевый</span>
      // </label>
      // <label className={classes.filters__label}>
      //   <input
      //     onChange={checkFilter}
      //     type="radio"
      //     value="Самый быстрый"
      //     name="choice"
      //     className={classes.filters__input}
      //     checked={state.filters[1]}
      //   />
      //   <span className={classes.filters__description}>Самый быстрый</span>
      // </label>
      // <label className={classes.filters__label}>
      //   <input
      //     onChange={checkFilter}
      //     type="radio"
      //     value="Оптимальный"
      //     name="choice"
      //     className={classes.filters__input}
      //     checked={state.filters[2]}
      //   />
      //   <span className={classes.filters__description}>Оптимальный</span>
      // </label> */}
    </div>
  )
}

const mapStateToProperties = (state: object) => {
  return {
    state,
  }
}

export default connect(mapStateToProperties, actions)(Filters)
// Filters
