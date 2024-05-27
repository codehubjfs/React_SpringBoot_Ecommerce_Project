import React from "react";

function ECarousel() {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
      style={{ marginTop: "40px" }}
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/5ecf4f27ed5376ef.jpg?q=20"
            className="d-block w-100"
            alt="Carousel Image 1"
          />
        </div>
        <div className="carousel-item">
          <img
            src="../Images/Carousel Image 4.jpg"
            className="d-block w-100"
            alt="Carousel Image 2"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1710737368/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/HP/March/18032024/HP_M14_18march2024_yrft6f.jpg?tr=w-2048"
            className="d-block w-100"
            alt="Carousel Image 3"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/b2132b52f8b2c7dd.jpg?q=20"
            className="d-block w-100"
            alt="Carousel Image 4"
          />
        </div>
        {/* <div className="carousel-item">
          <img
            src="https://images-static.nykaa.com/uploads/7065747a-e9a7-40c2-9626-d0704854535b.jpg?tr=w-1200,cm-pad_resize"
            className="d-block w-100"
            alt="Carousel Image 5"
          />
        </div> */}
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default ECarousel;
