import React,{ useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Category.css'
import axios from 'axios'

export default function Category() {
    const [womenclo, setWomenclo] = useState([])
    const [menclo, setMenclo] = useState([])
    const [accessoriesclo, setAccessoriesclo] = useState([])
    const [electronicsclo, setElectronicsclo] = useState([])

    useEffect(()=>{
        get_women()
        get_men()
        get_accessories()
        get_electronics()
    },[])
  return (
    <>
    <div className="main_content">





{/* ============================== Category section =============================== */}


{/* <!-- START SECTION SHOP --> */}
<div className="section small_pt pb_70">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-6">
                <div className="heading_s1 text-center">
                    <h2>Exclusive Products</h2>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                <div className="tab-style1">
                    <ul className="nav nav-tabs justify-content-center" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="women-tab" data-bs-toggle="tab" href="#women" role="tab" aria-controls="women" aria-selected="true">Women's Clothing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="men-tab" data-bs-toggle="tab" href="#men" role="tab" aria-controls="men" aria-selected="false">Men's Clothing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="accessories-tab" data-bs-toggle="tab" href="#accessories" role="tab" aria-controls="accessories" aria-selected="false">Accessories</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="electronics-tab" data-bs-toggle="tab" href="#electronics" role="tab" aria-controls="electronics" aria-selected="false">Electronics</a>
                        </li>
                    </ul>
                </div>
                <div className="tab-content">



                    {/* Start (Arrival) Women's Clothing */}
                        <div className="tab-pane fade show active" id="women" role="tabpanel" aria-labelledby="women-tab">
                        <div className="row shop_container">

                        {womenclo.map((eveyproduct) => 
                            <div className="col-lg-3 col-md-4 col-6">
                                

                                <div className="product">
                                    <div className="product_img">
                                        <Link href="shop-product-detail.html">
                                            <img src={eveyproduct.image}  alt="product_img1" />
                                        </Link>
                                        <div className="product_action_box">
                                            <ul className="list_none pr_action_btn">
                                             <  li className="add-to-cart"><Link to={`/Shoppingcart/${eveyproduct.id}`}><i className="icon-basket-loaded"></i> Add To Cart</Link></li>
                                                <li><Link to="shop-quick-view.html"><i className="icon-magnifier-add"></i></Link></li>
                                                <li><Link to="shop-compLinkre.html"><i className="icon-shuffle"></i></Link></li>
                                                <li><Link to="#"><i className="icon-heart"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product_info">
                                    <h6 classNameName="product_title"><Link to={`/ProductDetails/${eveyproduct.id}`}>{eveyproduct.title}</Link></h6>
                                        <div className="product_price">
                                        <span classNameName="price">${eveyproduct.price}</span>
                                            <del>$55.25</del>
                                            <div className="on_sale">
                                                <span>35% Off</span>
                                            </div>
                                        </div>
                                        <div className="rating_wrap">
                                            <div className="rating">
                                                <div className="product_rate" style={{width:"80%"}}></div>
                                            </div>
                                            <span className="rating_num">(21)</span>
                                        </div>
                                        <div className="pr_desc">
                                            <p>{eveyproduct.description}</p>
                                        </div>
                                        <div className="pr_switch_wrap">
                                            <div className="product_color_switch">
                                                <span className="active"></span>
                                                <span data-color="#333333"></span>
                                                <span data-color="#DA323F"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        )}


                        </div>


                    </div>
                    {/* End (Arrival) Women's Clothing */}




                    {/* (Best Sellers) Men's Clothing */}
                    <div className="tab-pane fade" id="men" role="tabpanel" aria-labelledby="men-tab">
                        <div className="row shop_container">
                            {menclo.map((eveyproduct) =>
                                <div className="col-lg-3 col-md-4 col-6">
                                                    
                                <div className="product">
                                    <div className="product_img">
                                        <Link href="shop-product-detail.html">
                                            <img src={eveyproduct.image}  alt="product_img1" />
                                        </Link>
                                        <div className="product_action_box">
                                            <ul className="list_none pr_action_btn">
                                                <li className="add-to-cart"><Link to={`/Shoppingcart/${eveyproduct.id}`}><i className="icon-basket-loaded"></i> Add To Cart</Link></li>
                                                <li><Link to="shop-compLinkre.html"><i className="icon-shuffle"></i></Link></li>
                                                <li><Link to="shop-quick-view.html"><i className="icon-magnifier-add"></i></Link></li>
                                                <li><Link to="#"><i className="icon-heart"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product_info">
                                    <h6 classNameName="product_title"><Link to={`/ProductDetails/${eveyproduct.id}`}>{eveyproduct.title}</Link></h6>
                                        <div className="product_price">
                                        <span classNameName="price">${eveyproduct.price}</span>
                                            <del>$55.25</del>
                                            <div className="on_sale">
                                                <span>35% Off</span>
                                            </div>
                                        </div>
                                        <div className="rating_wrap">
                                            <div className="rating">
                                                <div className="product_rate" style={{width:"80%"}}></div>
                                            </div>
                                            <span className="rating_num">(21)</span>
                                        </div>
                                        <div className="pr_desc">
                                            <p>{eveyproduct.description}</p>
                                        </div>
                                        <div className="pr_switch_wrap">
                                            <div className="product_color_switch">
                                                <span className="active"></span>
                                                <span data-color="#333333"></span>
                                                <span data-color="#DA323F"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                </div>
                            )}
                        </div>
                    </div>
                    {/* (Best Sellers) Men's Clothing  */}







                    {/* Start (Featured) Accessories */}
                    <div className="tab-pane fade" id="accessories" role="tabpanel" aria-labelledby="accessories-tab">
                        <div className="row shop_container">
                            {accessoriesclo.map((eveyproduct) =>
                            <div className="col-lg-3 col-md-4 col-6">

                                <div className="product">
                                    <div className="product_img">
                                        <Link href="shop-product-detail.html">
                                            <img src={eveyproduct.image} alt="product_img1" />
                                        </Link>
                                        <div className="product_action_box">
                                            <ul className="list_none pr_action_btn">
                                                <li className="add-to-cart"><Link to={`/Shoppingcart/${eveyproduct.id}`}><i className="icon-basket-loaded"></i> Add To Cart</Link></li>
                                                <li><Link to="shop-compLinkre.html"><i className="icon-shuffle"></i></Link></li>
                                                <li><Link to="shop-quick-view.html"><i className="icon-magnifier-add"></i></Link></li>
                                                <li><Link to="#"><i className="icon-heart"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product_info">
                                    <h6 classNameName="product_title"><Link to={`/ProductDetails/${eveyproduct.id}`}>{eveyproduct.title}</Link></h6>
                                        <div className="product_price">
                                        <span classNameName="price">${eveyproduct.price}</span>
                                            <del>$55.25</del>
                                            <div className="on_sale">
                                                <span>35% Off</span>
                                            </div>
                                        </div>
                                        <div className="rating_wrap">
                                            <div className="rating">
                                                <div className="product_rate" style={{width:"80%"}}></div>
                                            </div>
                                            <span className="rating_num">(21)</span>
                                        </div>
                                        <div className="pr_desc">
                                            <p>{eveyproduct.description}</p>
                                        </div>
                                        <div className="pr_switch_wrap">
                                            <div className="">
                                                <span className="active"></span>
                                                <span data-color="#333333"></span>
                                                <span data-color="#DA323F"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            )}
                        </div>
                    </div>
                    {/* (Featured) Accessories  */}







                    {/* Start (Special) Electronics */}
                    <div className="tab-pane fade" id="electronics" role="tabpanel" aria-labelledby="electronics-tab">
                        <div className="row shop_container">
                            {electronicsclo.map((eveyproduct) =>
                            <div className="col-lg-3 col-md-4 col-6">
                                <div className="product">
                                    <div className="product_img">
                                        <Link href="shop-product-detail.html">
                                            <img src={eveyproduct.image} alt="product_img1" />
                                        </Link>
                                        <div className="product_action_box">
                                            <ul className="list_none pr_action_btn">
                                                <li className="add-to-cart"><Link to={`/Shoppingcart/${eveyproduct.id}`}><i className="icon-basket-loaded"></i> Add To Cart</Link></li>
                                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                                <li><a href="#"><i className="icon-heart"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product_info">
                                    <h6 classNameName="product_title"><Link to={`/ProductDetails/${eveyproduct.id}`}>{eveyproduct.title}</Link></h6>
                                        <div className="product_price">
                                        <span classNameName="price">${eveyproduct.price}</span>
                                            <del>$55.25</del>
                                            <div className="on_sale">
                                                <span>35% Off</span>
                                            </div>
                                        </div>
                                        <div className="rating_wrap">
                                            <div className="rating">
                                                <div className="product_rate" style={{width:"80%"}}></div>
                                            </div>
                                            <span className="rating_num">(21)</span>
                                        </div>
                                        <div className="pr_desc">
                                            <p>{eveyproduct.description}</p>
                                        </div>
                                        <div className="pr_switch_wrap">
                                            <div className="product_color_switch">
                                                <span className="active"></span>
                                                <span data-color="#333333"></span>
                                                <span data-color="#DA323F"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                            )}
                        </div>
                    </div>
                    {/* End (Special) Electronics */}

                </div>
            </div>
        </div> 
    </div>
</div>
{/* <!-- END SECTION Category --> */}
</div>
{/* <!-- END MAIN CONTENT --> */}
    </>
  )
  function get_women(){
    axios.get("https://fakestoreapi.com/products/category/women's clothing").then((res)=>{
        setWomenclo(res.data)
    })
  }
  function get_men(){
    axios.get("https://fakestoreapi.com/products/category/men's clothing").then((res)=>{
        setMenclo(res.data)
    })
  }
  function get_accessories(){
    axios.get("https://fakestoreapi.com/products/category/jewelery").then((res)=>{
        setAccessoriesclo(res.data)
    })
  }
  function get_electronics(){
    axios.get("https://fakestoreapi.com/products/category/electronics").then((res)=>{
        setElectronicsclo(res.data)
    })
  }
}
