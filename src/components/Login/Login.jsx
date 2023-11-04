import {React , useState , useEffect} from 'react'
import './Login.css'
import axios from 'axios'
import {useForm}  from 'react-hook-form'
import {Link,useNavigate}   from 'react-router-dom'
import { FaFacebookF } from 'react-icons/fa';
import { TfiGoogle } from 'react-icons/tfi';


export default function Login() {
  const {register,handleSubmit} = useForm()
  const redirect = useNavigate()


  return (
    <>
        <div className='title'>
          <div className='details'>
            <h3>Login</h3>
            <p > <Link to='/Homepage'>Home</Link>  <Link to='#'>Pages</Link>  <Link to='/login'>Login</Link></p>
          </div>
        </div>
        <div className='login-form'>
          <form onSubmit={handleSubmit(handlelogin)}>
            <h3>Login</h3>
              <div className="form-group">
                  <input {...register("username")} type="text" className="form-control" placeholder="Username" id="validationCustom03" required/>
              </div>
              <div className="form-group">
                  <input {...register("password")} type="password" className="form-control"  placeholder="Password" id="validationCustom03" required/>
              </div>
              <div className="form-group form-check">
                  <input type="checkbox" className="check-login"/>
                      <label className="remember-me" >Remember me</label>
                      <Link to='#' className="forgot-password" >Forgot Password?</Link>
              </div>
              <button type="submit" className="btn-submit">Login</button>
              <div className='or-login'>
                <div className='hr'>
                  <br />
                </div>
                <div className='or'></div>
            <ul className="text-center link-my-style">
              <li><Link to="https://www.facebook.com/" className="btn btn-facebook" id="fb_login_btn"><FaFacebookF/> Facebook</Link></li>
              <li><Link to="https://accounts.google.com/" className="btn btn-google" id="ggl_login_btn"><TfiGoogle/> Google</Link></li>
            </ul>
            <p>Don't Have an Account? <Link to="">Sign up now</Link></p>
              </div>
          </form>
        </div>
    </>
  )


  function handlelogin(form_data){
    axios.post("https://fakestoreapi.com/auth/login",form_data).then((res)=>{
      console.log(res.data.token)
      redirect("/Homepage")
      localStorage.setItem("User_Token",res.data.token)
      localStorage.setItem("username",form_data.username)
    })
  }

}
