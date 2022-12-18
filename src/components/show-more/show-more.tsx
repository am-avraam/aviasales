import React, { useState } from 'react'
import { Button, Space } from 'antd'

import classes from './show-more.module.scss'

// const ShowMore: React.FC = () => {
//   return <div>

//   </div>
// }

// export default ShowMore

const ShowMore: React.FC = () => (
  <Space direction="vertical" style={{ width: '100%' }}>
    <Button type="primary" block style={{ height: '50px' }} className={classes['show-more__button']}>
      Показать еще 5 билетов!
    </Button>
  </Space>
)

export default ShowMore
