import React from 'react'
import "./Product.css"
import { Link } from "react-router-dom";
import Chart from '../../components/Chart/Chart';
import { productData } from '../../data';
import PublishIcon from '@mui/icons-material/Publish';

const Product = () => {
  return (
    <div className="product">
        <div className="productTitleContainer">
            <h1 className="productTitle">Product</h1>
            <Link to="/addProduct">
                <button className="productAddButton">Create</button>
            </Link>
        </div>
        <div className="productTop">
            <div className="productTopLeft">
                <Chart data={productData} title="Doanh thu hàng tháng" grid dataKey="Doanh_thu" />
            </div>
            <div className="productTopRight">
                <div className="productInfoTop">
                    <img src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/322395827_499815978922865_5039692591822169009_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=0debeb&_nc_ohc=91xjSG__wYcAX9KCY0-&_nc_ht=scontent.fhan17-1.fna&oh=00_AfDPY127vtNNSVltxFzE22x4monQMY-Hn6m0QsGGlqGFwA&oe=6445DE60" alt="" className="productInfoImg" />
                    <span className="productName">Fruit Basket</span>
                </div>
                <div className="productInfoBottom">
                    <div className="productInfoItem">
                        <span className="productInfoKey">id:</span>
                        <span className="productInfoValue">123</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">sales:</span>
                        <span className="productInfoValue">520</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">active:</span>
                        <span className="productInfoValue">yes</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">in stock:</span>
                        <span className="productInfoValue">yes</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="productBottom">
            <form className="productForm">
                <div className="productFormLeft">
                    <label>Product Name</label>
                    <input type="text" placeholder="Fruit Basket" />
                    <label>In stock</label>
                    <select name="inStock" id="inStock">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                    <label>Active</label>
                    <select name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div className="productFormRight">
                    <div className="productUpload">
                        <img src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/322395827_499815978922865_5039692591822169009_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=0debeb&_nc_ohc=91xjSG__wYcAX9KCY0-&_nc_ht=scontent.fhan17-1.fna&oh=00_AfDPY127vtNNSVltxFzE22x4monQMY-Hn6m0QsGGlqGFwA&oe=6445DE60" alt="" className="productUploadImg" />
                        <label for="file">
                            <PublishIcon />
                        </label>
                        <input type="file" id="file" style={{display:"none"}} />
                    </div>
                    <button className="productButton">Update</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Product