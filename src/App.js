




import './App.css';


import { Outlet } from 'react-router-dom';


import Navigation from './components/Navbar/Navigation';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
  
   
    <Header/>
    <hr></hr>
    <Navigation/>
    <Outlet/>
    <Footer/>
    </>
  );
}

export default App;
