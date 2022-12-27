import React from 'react'
import uniqid from 'uniqid'

import { Box } from '../../redux/CheckboxReducer'
import useActions from '../../hooks/actions'
import { useAppSelector } from '../../hooks/redux'

import classes from './TransferCount.module.scss'

const TransferCount: React.FC = () => {
  const { checkboxes } = useAppSelector((state) => state.checkbox)
  const { checkAll, toggle } = useActions()

  const boxesToRender = checkboxes.map((box: Box, i: number) => {
    return (
      <label className={classes['transfer-count__label']} key={uniqid()}>
        <input
          type="checkbox"
          className={classes['transfer-count__checkbox']}
          onChange={i === 0 ? () => checkAll() : (event) => toggle(event as React.ChangeEvent<HTMLInputElement>)}
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

export default TransferCount
