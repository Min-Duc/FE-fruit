import React from 'react'
import "./Widget.css"

const Widget = () => {
    const Button = ({ type }) => {
        return <button className={"widgetButton " + type}>{type}</button>
    }
    return (
        <div className="widgetContainer">
            <h3 className="widgetTitle">Giao dịch gần nhất</h3>
            <table className="widgetTable">
                <tbody>
                    <tr className="widgetTr">
                        <th className="widgetTh">Customer</th>
                        <th className="widgetTh">Date</th>
                        <th className="widgetTh">Amount</th>
                        <th className="widgetTh">Status</th>
                    </tr>
                    <tr className="widgetTr">
                        <td className="widgetUser">
                            <img src="https://images.pexels.com/photos/2869318/pexels-photo-2869318.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="widgetImg" />
                            <span className="widgetName">Trịnh Thiên Yến</span>
                        </td>
                        <td className="widgetDate">24 tháng 4</td>
                        <td className="widgetAmount">520,000đ</td>
                        <td className="widgetStatus">
                            <Button type="Approved" />
                        </td>
                    </tr>
                    <tr className="widgetTr">
                        <td className="widgetUser">
                            <img src="https://images.pexels.com/photos/2869318/pexels-photo-2869318.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="widgetImg" />
                            <span className="widgetName">Vũ Văn Chiến</span>
                        </td>
                        <td className="widgetDate">24 tháng 4</td>
                        <td className="widgetAmount">220,000đ</td>
                        <td className="widgetStatus">
                            <Button type="Pending" />
                        </td>
                    </tr>
                    <tr className="widgetTr">
                        <td className="widgetUser">
                            <img src="https://images.pexels.com/photos/2869318/pexels-photo-2869318.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="widgetImg" />
                            <span className="widgetName">Triệu Quang Lâm</span>
                        </td>
                        <td className="widgetDate">25 tháng 4</td>
                        <td className="widgetAmount">612,000đ</td>
                        <td className="widgetStatus">
                            <Button type="Declined" />
                        </td>
                    </tr>
                    <tr className="widgetTr">
                        <td className="widgetUser">
                            <img src="https://images.pexels.com/photos/2869318/pexels-photo-2869318.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="widgetImg" />
                            <span className="widgetName">Tạ Cung Nhân</span>
                        </td>
                        <td className="widgetDate">27 tháng 4</td>
                        <td className="widgetAmount">766,000đ</td>
                        <td className="widgetStatus">
                            <Button type="Approved" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}


export default Widget