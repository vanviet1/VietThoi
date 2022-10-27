import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./menu.scss";

const Menus = () => {
  return (
    <div className="menu-top">
      <div className="container">
        <div className="row d-flex justify-content-between align-items-center">
          <div className="navbar-logo col-md-3">

          </div>
          <div className="menu col-md-8">
            <ul id="mobile_menu" className="menu navbar">
              <li>
                <NavLink exact to="/" activeClassName="selected">
                  Trang chủ
                </NavLink>
              </li>
              <li>
                <NavLink to="/intro" activeClassName="selected">
                  Giới thiệu
                </NavLink>
              </li>
              <li>
                <NavLink to="/products" activeClassName="selected">
                  Sản phẩm <i className="fas fa-caret-down"></i>
                </NavLink>
                <ul class="sub__menu">
                  <li>
                    <Link to="/products/coffees">Cà Phê</Link>
                  </li>
                  {/* <li><Link to="/products/smoothies">Smoothies</Link></li> */}
                  <li>
                    <Link to="/products/fruitteas">Nước ép</Link>
                  </li>
                  <li>
                    <Link to="/products/teahots">Nước giải khát</Link>
                  </li>
                  <li>
                    <Link to="/products/cakes">Ăn Vặt</Link>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to="/news" activeClassName="selected">
                  Tin tức
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menus;
