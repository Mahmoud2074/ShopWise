import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import '../src/components/assets/css/style.css'
import './components/assets/css/ionicons.min.css'
import './components/assets/css/flaticon.css'
import './components/assets/css/linearicons.css'
import './components/assets/css/simple-line-icons.css'
import './components/assets/css/all.min.css'
import './components/assets/css/animate.css'

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Login from './components/Login/Login';
import Homepage from './components/Home/Homepage';
import Products from './components/Products/Products';
import Womenclothing from './components/Products_Women/Womenclothing';
import Menclothing from './components/Products_Men/Menclothing';
import Accessories from './components/Products_Accessories/Accessories';
import Electronics from './components/Products_Electronics/Electronics';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Shoppingcart from './components/ShoppingCart/Shoppingcart';





const root = ReactDOM.createRoot(document.getElementById('root'));
const routers = createBrowserRouter([
  {path:"/"
,element:<App />
,children:[
  {path:"/Homepage",element:<Homepage />},
  {path:"/Login",element:<Login />},
  {path:"/Products",element:<Products />},
  {path:"/Womenclothing",element:<Womenclothing />},
  {path:"/Menclothing",element:<Menclothing />},
  {path:"/Accessories",element:<Accessories />},
  {path:"/Electronics",element:<Electronics />},
  {path:"/ProductDetails/:id",element:<ProductDetails />},
  {path:"/Shoppingcart/:id",element:<Shoppingcart />},
  {path:"/Mycart",element:<Shoppingcart />},

]
}])

root.render(
  <RouterProvider router={routers}/>
);
