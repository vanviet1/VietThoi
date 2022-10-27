import { Tabs, Calendar } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import TopPage from '../../../layouts/AdminLayout/Toppage/TopPage';
import { loadCommentStart } from '../../../Redux/actions/commentAction';
import { loadOrderStart } from '../../../Redux/actions/orderAction';
import { loadProductStart } from '../../../Redux/actions/productAction';
import { loadUsersUIStart } from '../../../Redux/actions/userUIAction';
import CommentTable from './CommentTable/CommentTable';
import './dashboard.scss';
import LineChartJS from './LineChart/LineChart';
import PieChartJS from './PieChart/PieChart';
import TableOrder from './TableOrders/TableOrder';
import { dataYear, dataMonth } from './Data';
import Bestseller from './Bestseller/Bestseller';

const { TabPane } = Tabs;
const DashBoard = () => {
    const { usersUI } = useSelector(state => state.usersUI);
    const { products } = useSelector(state => state.products);
    const { orders } = useSelector(state => state.orders);
    const { comments } = useSelector(state => state.comments);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadUsersUIStart());
        dispatch(loadProductStart());
        dispatch(loadOrderStart());
        dispatch(loadCommentStart());
    }, []);

    const orderNew = (orders.filter(item => item.status === "Chờ xác nhận")).length


    return (
        <div className="container-fluid">
            <TopPage title="Dashboard" />
            <div className="row">
                <div className="col-md-6 col-12">

                </div>
            </div>

            <div className="row my-5">
                <div className="col-md-4 col-12 p-4 product-store">
                    <h5 className="mb-4">Top sản phẩm bán chạy</h5>
                    {products && products.slice(0, 6).map((product, index) => {
                        return (
                            <Bestseller orders={orders} product={product} key={index} />
                        )
                    })}
                </div>
                <div className="col-md-8 col-12 pr-0">
                    <div  className="user-comment p-3">

                        <h4>Bình luận khách hàng</h4>
                        <CommentTable comments={comments} />
                    </div>
                </div>

            </div>
            <div className="row my-5">
                <div className="col-md-12 col-12 info-user p-4">
                    <h4>Bảng thông tin Order</h4>
                    <TableOrder />
                </div>
            </div>
        </div>
    );
};

export default DashBoard;