import React from "react";
import "./HomePageMenus.scss";
import { Tabs } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Product from "../../../components/UserHomePage/Product/Product";
import { buyProduct } from "../../../Redux/actions/cartActions";
import { toast } from "react-toastify";

const { TabPane } = Tabs;
const HomePageMenus = () => {
  const { products } = useSelector((state) => state.products);
  const coffees = products.filter((item) => item.category === "Cà phê");
  const milkteas = products.filter((item) => item.category === "Nước ép");
  const fuitteas = products.filter((item) => item.category === "Nước giải khát");
  // const smoothies = products.filter((item) => item.category === "Smoothies");
  const cakes = products.filter((item) => item.category === "Ăn Vặt");
  const dispatch = useDispatch();
  //add productItem
  const onAdd = (product) => {
    dispatch(buyProduct(product));
    toast.success("Thêm giỏ hàng thành công");
  };

  return (
    <>
      <div className="home-page-menus">
        <div className="container">
          <div className="row">
            <div className="menu-title">
              <h1 className="mb-5">SẢN PHẨM MỚI</h1>
            </div>
            <Tabs defaultActiveKey="1" centered className="col-md-12">
              <TabPane tab="Cà phê" key="1" className="mt-4">
                {coffees &&
                  coffees.slice(0, 8).map((item, index) => {
                    return <Product onAdd={onAdd} key={index} product={item} />;
                  })}
              </TabPane>
              <TabPane tab="Nước ép" key="2" className="mt-4">
                {milkteas &&
                  milkteas.slice(0, 8).map((item, index) => {
                    return <Product onAdd={onAdd} key={index} product={item} />;
                  })}
              </TabPane>
              <TabPane tab="Nước giải khát" key="3" className="mt-4">
                {fuitteas &&
                  fuitteas.slice(0, 8).map((item, index) => {
                    return <Product onAdd={onAdd} key={index} product={item} />;
                  })}
              </TabPane>
              <TabPane tab="Ăn Vặt" key="4" className="mt-4">
                {cakes &&
                  cakes.slice(0, 8).map((item, index) => {
                    return <Product onAdd={onAdd} key={index} product={item} />;
                  })}
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageMenus;
