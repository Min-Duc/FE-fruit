import React from 'react'
import FeaturedInfo from '../../components/FeaturedInfo/FeaturedInfo'
import Chart from '../../components/Chart/Chart'
import { userData } from '../../data'
import Widget from '../../components/Widget/Widget'
import "./Home.css"

const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="Doanh thu hàng tháng" grid dataKey="Doanh_thu" />
      <Widget />
    </div>
  )
}

export default Home