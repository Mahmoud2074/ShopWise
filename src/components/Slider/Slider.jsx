import React from 'react'
import './Slider.css'
import banner1 from '../../components/assets/images/image-brand/banner1.jpg'
import banner2 from '../../components/assets/images/image-brand/banner2.jpg'
import banner3 from '../../components/assets/images/image-brand/banner3.jpg'



export default function Slider() {
  return (
<>
      <div id="carouselExampleDark" className="carousel carousel-dark slide mystyle" data-bs-ride="carousel">
        <div className="carousel-indicators slider-btn">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner ">
          <div className="carousel-item active image-container" >
            <img src={banner1} className="d-block image-slider " alt="..."/>
              <div className="slider-details carousel-caption d-md-block">
              
              <div class="banner_content overflow-hidden">
                              <h5 class="mb-3 staggered-animation font-weight-light" data-animation="slideInLeft" data-animation-delay="0.5s">Get up to 50% off Today Only!</h5>
                              <h2 class="staggered-animation" data-animation="slideInLeft" data-animation-delay="1s">Woman Fashion</h2>
                              <a class="btn btn-fill-out rounded-0 staggered-animation text-uppercase" href="shop-left-sidebar.html" data-animation="slideInLeft" data-animation-delay="1.5s">Shop Now</a>
                          </div>
              </div>
          </div>
          <div className="carousel-item image-container" >
            <img src={banner2} className="d-block image-slider " alt="..."/>
              <div className="slider-details carousel-caption  d-md-block">
              <div class="banner_content overflow-hidden">
                                	<h5 class="mb-3 staggered-animation font-weight-light" data-animation="slideInLeft" data-animation-delay="0.5s">50% off in all products</h5>
                                    <h2 class="staggered-animation" data-animation="slideInLeft" data-animation-delay="1s">Man Fashion</h2>
                                    <a class="btn btn-fill-out rounded-0 staggered-animation text-uppercase" href="shop-left-sidebar.html" data-animation="slideInLeft" data-animation-delay="1.5s">Shop Now</a>
                                </div>
              </div>
          </div>
          <div className="carousel-item image-container">
            <img src={banner3} className="d-block image-slider " alt="..."/>
              <div className="slider-details carousel-caption d-md-block ">
              <div class="banner_content overflow-hidden">
                                	<h5 class="mb-3 staggered-animation font-weight-light" data-animation="slideInLeft" data-animation-delay="0.5s">Taking your Viewing Experience to Next Level</h5>
                                    <h2 class="staggered-animation" data-animation="slideInLeft" data-animation-delay="1s">Summer Sale</h2>
                                    <a class="btn btn-fill-out rounded-0 staggered-animation text-uppercase" href="shop-left-sidebar.html" data-animation="slideInLeft" data-animation-delay="1.5s">Shop Now</a>
                                </div>
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
</>
  )
}
