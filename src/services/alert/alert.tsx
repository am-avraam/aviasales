import React from 'react'
import { Alert, Space } from 'antd'

const NoResMessage: React.FC = () => (
  <Space direction="vertical" style={{ width: '100%', paddingBottom: '100px' }}>
    <Alert
      message="Поиск не дал результатов."
      description="Рейсов, подходящих под заданные фильтры, не найдено."
      type="info"
      style={{ width: '100%', height: '184px', display: 'flex', alignItems: 'center' }}
    />
  </Space>
)

export default NoResMessage
