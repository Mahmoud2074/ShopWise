import React,{useState,useEffect} from 'react'
import { useParams,Link,useNavigate } from 'react-router-dom'
import axios from 'axios'


export default function Shoppingcart() {

    const redirect = useNavigate()
    const {id} = useParams()
    const [getproduct , setGetproduct] = useState([])
    console.log(getproduct)
    useEffect(()=>{
        getproducts()
      },[])
      if(localStorage.getItem("username") === null){
        console.log("You Should to Login")
        redirect("/Login")
        }
        else{
  return (
      <>
          <section className="h-100 h-custom" style={{ backgroundColor: "white" }}>
              <div className="container py-5 h-100">
                  <div className="row d-flex justify-content-center align-items-center h-100">
                      <div className="col-12">
                          <div className="card card-registration card-registration-2" style={{ borderRadius: "15px" }}>
                              <div className="card-body p-0">
                                  <div className="row g-0">
                                      <div className="col-lg-8">
                                          <div className="p-5">
                                              <div className="d-flex justify-content-between align-items-center mb-5">
                                                  <h1 className="fw-bold mb-0 text-black">Shopping Cart</h1>
                                                  <h6 className="mb-0 text-muted">{getproduct.length}</h6>
                                              </div>
                                              <hr className="my-4" />
                                              {

                                              getproduct.map((item) =>
                                                  <div className="row mb-4 d-flex justify-content-between align-items-center">
                                                      <div className="col-md-2 col-lg-2 col-xl-2">
                                                          <img
                                                              src={item.image}
                                                              className="img-fluid rounded-3" alt="Cotton T-shirt" />
                                                      </div>
                                                      <div className="col-md-3 col-lg-3 col-xl-3">
                                                          <h6 className="text-muted">{item.description}</h6>
                                                          <h6 className="text-black mb-0">{item.title}</h6>
                                                      </div>
                                                      <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                                          <button className="btn btn-link px-2"
                                                              onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                                                              <i className="fas fa-minus"></i>
                                                          </button>

                                                          <input id="form1" min="0" name="quantity" value="1" type="number"
                                                              className="form-control form-control-sm" />

                                                          <button className="btn btn-link px-2"
                                                              onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                                                              <i className="fas fa-plus"></i>
                                                          </button>
                                                      </div>
                                                      <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                          <h6 className="mb-0">${item.price}</h6>
                                                      </div>
                                                      <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                                          <a onClick={(id)=>{
                                                                    const arr = getproduct.filter((item)=>item.id !== id);
                                                                    setGetproduct([]);
                                                                    localStorage.removeItem("cart")
                                                                
                                                          }} className="text-muted"><i className="fas fa-times"></i></a>
                                                      </div>
                                                  </div>


                                              )}
                                              <hr className="my-4" />

                                              <div className="pt-5">
                                                  <h6 className="mb-0"><Link to="/Homepage" className="text-body"><i
                                                      className="fas fa-long-arrow-alt-left me-2"></i>Back to shop</Link></h6>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-lg-4 bg-grey">
                                          <div className="p-5">
                                              <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                                              <hr className="my-4" />

                                              <div className="d-flex justify-content-between mb-4">
                                                  <h5 className="text-uppercase">{getproduct.length}</h5>
                                                  <h5>$ {getproduct.map((item)=>item.price)}</h5>
                                              </div>

                                              <hr className="my-4" />

                                              <div className="d-flex justify-content-between mb-5">
                                                  <h5 className="text-uppercase">Total price</h5>
                                                  <h5>$ {getproduct.map((item)=>item.price)}</h5>
                                              </div>

                                              <button type="button" className="btn btn-dark btn-block btn-lg"
                                                  data-mdb-ripple-color="dark">Check Out</button>

                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

      </>
  )
}
  function getproducts(){
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res)=>{
        let mydata = [...getproduct]
        mydata.push(res.data)
        setGetproduct(mydata)
        localStorage.setItem("cart",getproduct)
    })
  }

}


