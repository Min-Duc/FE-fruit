import React from 'react'
import "./FeaturedInfo.css"
import MovingIcon from '@mui/icons-material/Moving';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

const FeaturedInfo = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <span className="featuredTitle">Doanh thu</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">2,145,345đ</span>
                <span className="featuredMoneyRate">
                    +5% <MovingIcon className="featuredIcon"/>
                </span>
            </div>
            <span className="featureSub">So với tháng trước</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Tiêu phí</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">545,345đ</span>
                <span className="featuredMoneyRate">
                    -3% <TrendingDownIcon className="featuredIcon negative"/>
                </span>
            </div>
            <span className="featureSub">So với tháng trước</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Lợi nhuận</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">1,600,000đ</span>
                <span className="featuredMoneyRate">
                    +2% <MovingIcon className="featuredIcon"/>
                </span>
            </div>
            <span className="featureSub">So với tháng trước</span>
        </div>
    </div>
  )
}


export default FeaturedInfo