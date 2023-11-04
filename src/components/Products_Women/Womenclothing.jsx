import Getapi from '../../Hooks/Getapi'
import '../../components/Products/Products.css'
import { Link } from 'react-router-dom'


export default function Womenclothing() {
  let [products] = Getapi("https://fakestoreapi.com/products/category/women's clothing")
  return (
    <>
      <div className='title'>
        <div className='details'>
          <h3>Electronics</h3>
          <p> <Link to='/Homepage'>Home</Link> > <a href='#'>Products</a> > <Link to='/Womenclothing'>Women's Clothing</Link></p>
        </div>
      </div>
    <div className='product-container'>
    {products.map((eveyproduct)=>
    
                                <div className="product my_product">
                                    <div className="product_img">
                                        <a href="shop-product-detail.html">
                                            <img src={eveyproduct.image} alt="product_img1"/>
                                        </a>
                                        <div className="product_action_box">
                                            <ul className="list_none pr_action_btn">
                                                <li className="add-to-cart"><Link to={`/Shoppingcart/${eveyproduct.id}`}><i className="icon-basket-loaded"></i> Add To Cart</Link></li>
                                                <li><Link to="shop-compare.html" ><i className="icon-shuffle"></i></Link></li>
                                                <li><Link to="shop-quick-view.html"><i className="icon-magnifier-add"></i></Link></li>
                                                <li><Link to="#"><i className="icon-heart"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product_info">
                                        <h6 className="product_title"><Link to={`/ProductDetails/${eveyproduct.id}`}>{eveyproduct.title}</Link></h6>
                                        <div className="product_price">
                                            <span className="price">${eveyproduct.price}</span>
                                        </div>
                                        <div className="pr_desc">
                                            <p>{eveyproduct.description}</p>
                                        </div>
                                    </div>
                                </div>
    )}
    </div>
    </>
  )
}


