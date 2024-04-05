import React from 'react'
import "./Revenue.css"
import Chart from '../../components/Chart/Chart'
import { userData } from '../../data'

const Revenue = () => {
  return (
    <div className="revenue">
        <Chart data={userData} title="Doanh thu hàng tháng" grid dataKey="Doanh_thu" />
    </div>
  )
}

export default Revenue