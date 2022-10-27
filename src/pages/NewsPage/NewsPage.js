import React from "react";
import "./NewsPage.scss";
import hinhanh1 from "../../assets/images/homepage/news/untitled-22.jpg";
import hinhanh7 from "../../assets/images/homepage/news/untitled-21.jpg";
import hinhanh8 from "../../assets/images/homepage/news/untitled-12.jpg";
import hinhanh9 from "../../assets/images/newpage/so9.jpg";
import hinhanh10 from "../../assets/images/newpage/so5.jpg";

import hinhanh2 from "../../assets/images/newpage/so1.jpg";
import hinhanh3 from "../../assets/images/newpage/so10.jpg";
import hinhanh4 from "../../assets/images/newpage/so5.jpg";
import hinhanh5 from "../../assets/images/newpage/so9.jpg";
import hinhanh6 from "../../assets/images/newpage/so8.jpg";
import hinhanh11 from "../../assets/images/newpage/so99.jpg";
import BreadCrumb from "./../../components/UserHomePage/Main/BreadCrumb";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
const NewsPage = () => {
  return (
    <div className="newspage">
      <div className="container">
        <BreadCrumb title="Tin Tức" />
        <div className="row">
          <div className="newspage-left col-md-9 col-12">
            <div className="newspage-left-big">
              <div className="card">
                <img src={hinhanh1} alt="hinhanh1" />
                <div className="card-body">
                  <h4 className="card-text card-text-big text-upper">
                  Halloween ưu đãi giảm giá khủng
                  </h4>
                </div>
              </div>
              <div className="card">
                <img src={hinhanh7} alt="hinhanh1" />
                <div className="card-body">
                  <h4 className="card-text card-text-big text-upper">
                   Vòng quay may mắn nhiều quà
                  </h4>
                </div>
              </div>
            </div>
            <div className="newspage-left-small">
              <div className="card">
                <img src={hinhanh1} class="card-img-left" alt="hinhanh1" />
                <div className="card-body">
                  <div className="card-text">
                    <h6 className="small-text-title text-upper">
                      Khuyến mãi ngày phụ nữ Việt Nam 20/10.
                    </h6>
                    <p className="text-content">
                      Đối với nhiều người, một ngày mới chỉ có thể khởi đầu tốt
                      đẹp...
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <img src={hinhanh9} alt="hinhanh1" />
                <div className="card-body">
                  <div className="card-text">
                    <h6 className="small-text-title text-upper">
                      Khuyến mãi ngày phụ nữ Việt Nam 20/10.
                    </h6>
                    <p className="text-content">
                      Đối với nhiều người, một ngày mới chỉ có thể khởi đầu tốt
                      đẹp...
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <img src={hinhanh10} alt="hinhanh1" />
                <div className="card-body">
                  <div className="card-text">
                    <h6 className="small-text-title text-upper">
                      Khuyến mãi ngày phụ nữ Việt Nam 20/10.
                    </h6>
                    <p className="text-content">
                      Đối với nhiều người, một ngày mới chỉ có thể khởi đầu tốt
                      đẹp...
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <img src={hinhanh8} alt="hinhanh1" />
                <div className="card-body">
                  <div className="card-text">
                    <h6 className="small-text-title text-upper">
                      Khuyến mãi ngày phụ nữ Việt Nam 20/10.
                    </h6>
                    <p className="text-content">
                    voucher siêu ưu đãi. Giảm 20% cho tất cả mọi sản phẩm cho hội.... 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="newspage-right col-md-3 d-md-block d-none">
            <div className="category-news">
              <h4>DANH MỤC:</h4>
              <p className="menu-title-line"></p>
              <div className="menu1 ">
                <ul id="main-menu">
                  <li>
                    <NavLink exact to="/" activeClassName="selected">
                      <i class="fas fa-angle-right"></i>&ensp;Trang chủ
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/intro" activeClassName="selected">
                      <i class="fas fa-angle-right"></i>&ensp;Giới thiệu
                    </NavLink>
                  </li>
                  <li className="hash-child">
                    <NavLink to="/products" activeClassName="selected">
                      <i class="fas fa-angle-right"></i>&ensp;Sản phẩm
                    </NavLink>
                    <ul className="sub-menu">
                      <li className="hash-child">
                        <Link to="/products/coffees">Cà Phê</Link>
                      </li>
                      
                      <li>
                        <Link to="/products/fruitteas">Nước ép</Link>
                      </li>
                      <li>
                        <Link to="/products/milkteas">Ăn Vặt</Link>
                      </li>
                      <li>
                        <Link to="/products/teahots">Nước giải khat</Link>
                      </li>
                      <li>
                        <Link to="/products/cakes">Ăn Vặt</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <NavLink to="/news" activeClassName="selected">
                      <i class="fas fa-angle-right"></i>&ensp;Tin tức
                    </NavLink>
                  </li>
                  <li></li>
                </ul>
              </div>
            </div>
            <div className="about-news">
              <h4 className="menu-title"> Về chúng tôi</h4>
              <p className="menu-title-line"></p>
              <div className="card">
                <img src={hinhanh11} className="card-hinhanh-top" alt="..." />
                <div className="card-body">
                  {/* <h5 className="card-title">Card title</h5> */}
                  <p className="card-text">
                  The Coffee House được sinh ra từ niềm đam mê bất tận với niềm đam mê bất tận với những hạt Coffee 
                    trên vùng đất Tây Nguyên đầy nắng và gió. Bằng những tâm huyết.....
                  </p>
                  <Link to="/newspage" className="btn btn-success">
                    Đọc Tiếp
                  </Link>
                </div>
              </div>
            </div>
            <div className="about-hinhanh">
              <h4 className="menu-title">The Coffee House</h4>
              <p className="menu-title-line"></p>
              <img
                className="news-hinhanh-content"
                src={hinhanh2}
                alt="hinhanh2"
              />
              <img
                className="news-hinhanh-content"
                src={hinhanh3}
                alt="hinhanh3"
              />
              <img
                className="news-hinhanh-content"
                src={hinhanh4}
                alt="hinhanh4"
              />

              <img
                className="news-hinhanh-content"
                src={hinhanh5}
                alt="hinhanh5"
              />
              <img
                className="news-hinhanh-content"
                src={hinhanh4}
                alt="hinhanh4"
              />
              <img
                className="news-hinhanh-content"
                src={hinhanh6}
                alt="hinhanh6"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
