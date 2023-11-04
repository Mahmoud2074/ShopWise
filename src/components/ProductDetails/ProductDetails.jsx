import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { useParams,Link } from 'react-router-dom'
import './ProductDetails.css'

export default function ProductDetails() {
    const {id} = useParams()
    const [productdetails , setProductdetails] = useState([])
    useEffect(()=>{
      getproducts()
    },[])
    const mystyling={opacity: "1" , width: "556px" , left: "0px"}
  return (
    <>
      <div className='title'>
        <div className='details'>
          <h3>Product Details</h3>
          <p> <Link to='/Homepage' className='link_h'>Home</Link>
           <Link to={`/ProductDetails/${id}`}>Product Details</Link></p>
        </div>
      </div>
      <div className="section">
	<div className="container">
		<div className="row">
            <div className="col-lg-6 col-md-6 mb-4 mb-md-0">
              <div className="product-image">
                    <div className="product_img_box">
                        <img id="product_img" src={productdetails.image} data-zoom-image="assets/images/product_zoom_img1.jpg" alt="product_img1"/>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-6">
                <div className="pr_detail">
                    <div className="product_description">
                        <h4 className="product_title"><Link to="#">{productdetails.title}</Link></h4>
                        <div className="product_price">
                            <span className="price">${productdetails.price}</span>
                        </div>
                        <div className="pr_desc">
                            <p> 
                              <h5>DESCRIPTION</h5>
                              {productdetails.description}
                              </p>
                        </div>
                        <div className="product_sort_info">
                            <ul>
                                <li><i className="linearicons-shield-check"></i> 1 Year AL Jazeera Brand Warranty</li>
                                <li><i className="linearicons-sync"></i> 30 Day Return Policy</li>
                                <li><i className="linearicons-bag-dollar"></i> Cash on Delivery available</li>
                            </ul>
                        </div>
                    </div>
                    <hr/>
                    <div className="cart_extra">
                  <div class="quantity">
                    <input type="button" value="-" class="minus"/>
                      <input type="text" name="quantity" value="1" title="Qty" class="qty" size="4"/>
                        <input type="button" value="+" class="plus"/>
                        </div>
                        <div className="cart_btn">
                            <Link to={`/Shoppingcart/${productdetails.id}`} className="btn btn-fill-out btn-addtocart" type="button"><i className="icon-basket-loaded"></i> Add to cart</Link>
                            <Link className="add_compare" to="/"><i className="icon-shuffle"></i></Link>
                            <Link className="add_wishlist" to="/"><i className="icon-heart"></i></Link>
                        </div>
                    </div>
                    <hr/>
                    
                    <div className="product_share">
                        <span>Share:</span>
                        <ul className="social_icons">
                            <li><Link to="/"><i className="ion-social-facebook"></i></Link></li>
                            <li><Link to="/"><i className="ion-social-twitter"></i></Link></li>
                            <li><Link to="/"><i className="ion-social-googleplus"></i></Link></li>
                            <li><Link to="/"><i className="ion-social-youtube-outline"></i></Link></li>
                            <li><Link to="/"><i className="ion-social-instagram-outline"></i></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
        	<div className="col-12">
            	<div className="large_divider clearfix"></div>
            </div>
        </div>
    </div>
</div>
    </>
  )
  function getproducts(){
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res)=>{
      setProductdetails(res.data)
    })
  }
}
