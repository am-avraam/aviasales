import React from 'react'
import { Button, Space } from 'antd'

import useActions from '../../hooks/actions'
import { useAppSelector } from '../../hooks/redux'

import classes from './ShowMore.module.scss'

const ShowMore: React.FC = () => {
  const { showNextFive } = useActions()
  const { tickets } = useAppSelector((state) => state.list)

  const needVisible = tickets.length > 5
  if (needVisible) {
    return (
      <Space direction="vertical" style={{ width: '100%' }}>
        <Button
          type="primary"
          block
          style={{ height: '50px' }}
          className={classes['show-more__button']}
          onClick={() => showNextFive()}
        >
          Показать еще 5 билетов!
        </Button>
      </Space>
    )
  }
  return null
}

export default ShowMore
