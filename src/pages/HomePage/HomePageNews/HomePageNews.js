import React from 'react';
import imgnews1 from '../../../assets/images/homepage/news/untitled-22.jpg'
import imgnews2 from '../../../assets/images/homepage/news/untitled-21.jpg'
import imgnews3 from '../../../assets/images/homepage/news/untitled-12.jpg'
import './HomePageNews.scss'
const HomePageNews = () => {
  return (
    <div className="home-page-news">
      <div className="container">
        <div className="news-title">
          <h1>TIN TỨC NỔI BẬT</h1>
        </div>
        <div className="row">
          <div className="col-md-4 col-12">
            <div className="card" >
              <img src={imgnews1} className="card-img-top" alt="imgnews1" />
              <div className="card-body">
                <h4 className="card-title">Halloween ưu đãi giảm giá khủng</h4>
                <p className="card-text">Mừng halloween ưu dãi giảm giá đến 50% tất cả sản phẩm từ 18h30p đến 10h00p các ngày 30/10/2022-01/11/2022 hãy đến quán ngay.</p>
                <a href="#" className="stretched-link"></a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="card" >
              <img src={imgnews2} className="card-img-top" alt="imgnews2" />
              <div className="card-body">
                <h4 className="card-title">Vòng quay may mắn nhiều quà </h4>
                <p className="card-text">Siêu ưu đãi khi hoá đơn vượt qua 200k quý khách sẽ được chơi vòng quay may mắn và có cơ hội trúng nhiều ưu đãi hấp dẫn tại quán. </p>
                <a href="#" className="stretched-link"></a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="card" >
              <img src={imgnews3} className="card-img-top" alt="imgnews3" />
              <div className="card-body">
                <h4 className="card-title">Khuyến mãi ngày phụ nữ Việt Nam 20/10.</h4>
                <p className="card-text">voucher siêu ưu đãi. Giảm 20% cho tất cả mọi sản phẩm cho hội chị em phụ nữ khi mua đồ tại quán. Duy nhất hôm nay 20/10. </p>
                <a href="#" className="stretched-link"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageNews;