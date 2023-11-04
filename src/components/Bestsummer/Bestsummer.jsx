import React from 'react'
import './Bestsummer.css'

export default function Bestsummer() {
  return (
    <>
                {/* <!-- START SECTION SINGLE BANNER -->  */}
                <div className="section bg_light_blue2 pb-0 pt-md-0">
                <div className="container">
                    <div className="row align-items-center flex-row-reverse">
                        <div className="col-md-6 offset-md-1">
                            <div className="medium_divider d-none d-md-block clearfix"></div>
                            <div className="trand_banner_text text-center text-md-start">
                                <div className="heading_s1 mb-3">
                                    <span className="sub_heading">New season trends!</span>
                                    <h2>Best Summer Collection</h2>
                                </div>
                                <h5 className="mb-4">Sale Get up to 50% Off</h5>
                                <a href="shop-left-sidebar.html" className="btn btn-fill-out rounded-0">Shop Now</a>
                            </div>
                            <div className="medium_divider clearfix"></div>
                        </div>
                        <div className="col-md-5">
                            <div className="text-center trading_img">
                                <img src={require("../assets//images/trending/tranding_img.png")} alt="tranding_img"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- END SECTION SINGLE BANNER -->  */}
    </>
  )
}
