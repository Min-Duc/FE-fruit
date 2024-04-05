import { Link, Outlet } from "react-router-dom";
import "./Layout.css";
import "./Sidebar.css"
import "./Topbar.css"


import HomeIcon from '@mui/icons-material/Home';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonIcon from '@mui/icons-material/Person';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import LogoutIcon from '@mui/icons-material/Logout';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';

import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

const Layout = () => {
  return (
    <div>
      <div className="topbar">
        <div className="topbarWrapper">
          <div className="topLeft">
            <div className="topbarLogo">
              <a href="/">Let's Fruit</a>
              <p>Fruit & Flower Boutique</p>
            </div>
          </div>
          {/* <div className="topRight">
              <div className="topbarIconsContainer">
                <NotificationsNoneIcon />
                <span className="topbarIconBadge">2</span>
              </div>
              <img src="https://images.pexels.com/photos/2869318/pexels-photo-2869318.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="avatar" />
            </div> */}
        </div>
      </div>
      <div className="contain">
        <div className="sidebar">
          <div className="sidebarWrapper">
            <div className="sidebarMenu">
              <h3 className="sidebarTitle">Dashboard</h3>
              <ul className="sidebarList">
                <Link to="/" className="link">
                  <li className="sidebarItems">
                    <HomeIcon className="sidebarIcon" />
                    Trang chủ
                  </li>
                </Link>
                {/* <Link to="/revenue" className="link"><li className="sidebarItems">
              <TrendingUpIcon className="sidebarIcon" />
              Thông số doanh thu
            </li></Link> */}
                {/*<li className="sidebarItems">
                <PersonIcon className="sidebarIcon" />
                User
                </li>*/}
                <Link to="/products" className="link">
                  <li className="sidebarItems">
                    <StorefrontIcon className="sidebarIcon" />
                    Danh sách sản phẩm
                  </li>
                </Link>
                <Link to="/addProduct" className="link">
                  <li className="sidebarItems">
                    <AddBusinessIcon className="sidebarIcon" />
                    Thêm sản phẩm
                  </li>
                </Link>
                {/* <li className="sidebarItems">
              <SignalCellularAltIcon className="sidebarIcon" />
              Báo cáo
            </li> */}
                <li className="sidebarItems">
                  <LogoutIcon className="sidebarIcon" />
                  Thoát
                </li>
              </ul>
            </div>
          </div>
        </div >
        <Outlet />
      </div>
    </div>
  )
}

export default Layout