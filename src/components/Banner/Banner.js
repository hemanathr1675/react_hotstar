import React from "react";

const Banner = () => {
  return (
    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="1500">
          <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6554/1566554-i-7b8ecb1234b7" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <img src="https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/226/1550226-t-90ea6b8ad173" />
            <p>2023</p>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="1500">
          <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/3132/1383132-i-011cefc50da9" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <img src="https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/3134/1383134-t-aeff48613307" />
           
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="1500">
          <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/7475/1557475-i-e371b3e8fdb4" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <img src="https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/7474/1557474-t-c7f82f7f99df" />
            
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Banner;
