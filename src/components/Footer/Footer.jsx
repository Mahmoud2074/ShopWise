import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
          <div className="section bg_default small_pt small_pb">
              <div className="container">
                  <div className="row align-items-center">
                      <div className="col-md-6">
                          <div className="heading_s1 mb-md-0 heading_light">
                              <h3>Subscribe Our Newsletter</h3>
                          </div>
                      </div>
                      <div className="col-md-6">
                          <div className="newsletter_form">
                              <form>
                                  <input type="text" required="" className="form-control rounded-0" placeholder="Enter Email Address"/>
                                  <button type="submit" className="btn btn-dark rounded-0" name="submit" value="Submit">Subscribe</button>                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
    <footer className="footer_dark">
	<div className="footer_top">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12">
                	<div className="widget">
                        <div className="footer_logo">
                            <Link to="#"><img src={require("../assets//images/logo/logo_light.png")} alt="logo"/></Link>
                        </div>
                        <p>If you are going to use of Lorem Ipsum need to be sure there isn't hidden of text</p>
                    </div>
                    <div className="widget">
                        <ul className="social_icons social_white">
                            <li><Link to="#"><i className="ion-social-facebook"></i></Link></li>
                            <li><Link to="#"><i className="ion-social-twitter"></i></Link></li>
                            <li><Link to="#"><i className="ion-social-googleplus"></i></Link></li>
                            <li><Link to="#"><i className="ion-social-youtube-outline"></i></Link></li>
                            <li><Link to="#"><i className="ion-social-instagram-outline"></i></Link></li>
                        </ul>
                    </div>
        		</div>
                <div className="col-lg-2 col-md-3 col-sm-6">
                	<div className="widget">
                        <h6 className="widget_title">Useful Links</h6>
                        <ul className="widget_links">
                            <li><Link to="#">About Us</Link></li>
                            <li><Link to="#">FAQ</Link></li>
                            <li><Link to="#">Location</Link></li>
                            <li><Link to="#">Affiliates</Link></li>
                            <li><Link to="#">Contact</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-6">
                	<div className="widget">
                        <h6 className="widget_title">Category</h6>
                        <ul className="widget_links">
                            <li><Link to="#">Men</Link></li>
                            <li><Link to="#">Woman</Link></li>
                            <li><Link to="#">Kids</Link></li>
                            <li><Link to="#">Best Saller</Link></li>
                            <li><Link to="#">New Arrivals</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-6">
                	<div className="widget">
                        <h6 className="widget_title">My Account</h6>
                        <ul className="widget_links">
                            <li><Link to="#">My Account</Link></li>
                            <li><Link to="#">Discount</Link></li>
                            <li><Link to="#">Returns</Link></li>
                            <li><Link to="#">Orders History</Link></li>
                            <li><Link to="#">Order Tracking</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                	<div className="widget">
                        <h6 className="widget_title">Contact Info</h6>
                        <ul className="contact_info contact_info_light">
                            <li>
                                <i className="ti-location-pin"></i>
                                <p>123 Street, Old Trafford, New South London , UK</p>
                            </li>
                            <li>
                                <i className="ti-email"></i>
                                <Link to="mailto:info@sitename.com">info@sitename.com</Link>
                            </li>
                            <li>
                                <i className="ti-mobile"></i>
                                <p>+ 457 789 789 65</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="bottom_footer border-top-tran">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <p className="mb-md-0 text-center text-md-start">© 2020 All Rights Reserved by Mahmoud Ashraf</p>
                </div>
                <div className="col-md-6">
                    <ul className="footer_payment text-center text-lg-end">
                        <li><Link to="#"><img src={require("../assets//images/visa.png")} alt="visa"/></Link></li>
                        <li><Link to="#"><img src={require("../assets//images/discover.png")} alt="discover"/></Link></li>
                        <li><Link to="#"><img src={require("../assets//images/master_card.png")} alt="master_card"/></Link></li>
                        <li><Link to="#"><img src={require("../assets//images/paypal.png")} alt="paypal"/></Link></li>
                        <li><Link to="#"><img src={require("../assets//images/amarican_express.png")} alt="amarican_express"/></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</footer>
    </>
  )
}
