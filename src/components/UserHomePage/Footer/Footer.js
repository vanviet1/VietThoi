import React from "react";
import './Footer.scss';
import { Link, NavLink } from "react-router-dom";
const Footer = () => {

  return (
    <div className="footer ">
      <div className="container">
        <div className="footer-support row">
          <div className="footer-support1 footer-support2 col-md-4 col-12">
            <div className="footer-img">

            </div>
            <p>
              Chúng tôi mong muốn Coffee House sẽ trở thành 
              nơi mọi người xích lại gần nhau và tìm thấy niềm vui,
              sự sẻ chia thân tình bên những tách cà phê đượm hương, chất lượng.
            </p>
            <div className="call-me">
              <i className="fas fa-phone-alt"></i>
              <a href="tel:0702222222">0702222222</a>
            </div>
          </div>
          <div className="footer-support1 support1 col-md-4 col-12">
            <p>
              <b>Về chúng tôi</b>
            </p>
            <div className="list-support">
              <div className="list-support1">
                <NavLink to="/">Trang chủ</NavLink>
                <NavLink to="/intro">Giới thiệu</NavLink>
                <NavLink to="/products">Sản phẩm</NavLink>
              </div>
              <div className="list-support1">
                <NavLink to="/cart">Đặt hàng</NavLink>
                <NavLink to="/news">Tin tức</NavLink>
                
              </div>
            </div>
          </div>
          <div className="footer-support1 support1 col-md-4 d-none d-md-block">
            <p>
              <b>Hỗ trợ khách hàng</b>
            </p>
            <div className="list-support">
              <div className="list-support1">
                <NavLink to="/">Trang chủ</NavLink>
                <NavLink to="/intro">Giới thiệu</NavLink>
                <NavLink to="/products">Sản phẩm</NavLink>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="footer-copyright ">&copy;Copyright, Da Nang 14-10-2022</div>

    </div>
  );
}

export default Footer;