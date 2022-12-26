import React from 'react'
import { Button, Space } from 'antd'
import { useDispatch, connect } from 'react-redux'

import { showMore } from '../../redux/Actions'
import { State } from '../../types'

import classes from './ShowMore.module.scss'

type ShowMoreProps = {
  state: State
}

const ShowMore: React.FC<ShowMoreProps> = ({ state }) => {
  const dispatch = useDispatch()

  const needVisible = state.api.tickets.length > 5
  if (needVisible) {
    return (
      <Space direction="vertical" style={{ width: '100%' }}>
        <Button
          type="primary"
          block
          style={{ height: '50px' }}
          className={classes['show-more__button']}
          onClick={() => dispatch(showMore())}
        >
          Показать еще 5 билетов!
        </Button>
      </Space>
    )
  }
  return null
}

const mapStateToProperties = (state: State) => {
  return {
    state,
  }
}

export default connect(mapStateToProperties)(ShowMore)
