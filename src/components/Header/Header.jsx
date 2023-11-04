import React,{useReducer,useEffect} from 'react'
import './Header.css'
import { Link,useNavigate } from 'react-router-dom'
import {AiOutlineUser} from 'react-icons/ai'
import {BsHeart} from 'react-icons/bs'

export default function Header() {
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
  const redirect = useNavigate()
  useEffect(()=>{
    // forceUpdate()
  },[ignored])

  return (
    <>
    <div className="headdernav2">
        <div className='header-left'>
        <div class="d-flex align-items-center justify-content-center justify-content-md-start">
                        <div class="lng_dropdown me-2">
                            <select name="countries" class="custome_select">
                                <option value='en' data-image="assets/images/eng.png" data-title="English">English</option>
                                <option value='fn' data-image="assets/images/fn.png" data-title="France">France</option>
                                <option value='us' data-image="assets/images/us.png" data-title="United States">United States</option>
                            </select>
                        </div>
                        <div class="me-3">
                            <select name="countries" class="custome_select">
                                <option value='USD' data-title="USD">USD</option>
                                <option value='EUR' data-title="EUR">EUR</option>
                                <option value='GBR' data-title="GBR">GBR</option>
                            </select>
                        </div>
                        <ul class="contact_detail text-center text-lg-start">
                            <li><i class="ti-mobile"></i><span>123-456-7890</span></li>
                        </ul>
                    </div>
        </div>
        <div className='header-right'>
            <Link to='/Login' className='wishlist'><BsHeart /> Whishlist</Link>
            {localStorage.getItem("username") === null && <Link to='/Login' className='login'><AiOutlineUser/>Login</Link>}
              <li className="login">
                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {localStorage.getItem("username")}
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" onClick={()=>{localStorage.clear();}}>Logout</Link></li>
                </ul>
              </li>
            
        </div>
    </div>
    </>
  )
}
