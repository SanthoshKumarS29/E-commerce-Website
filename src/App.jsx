import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Navbar from './components/constant-file/Navbar'
import Home from './components/pages/Home'
import Footer from './components/constant-file/Footer'
import Shop from './components/pages/Shop'
import Store from './components/pages/store'
import Register from './components/register-file/Register'
import Login from './components/register-file/login'
import Blog from './components/pages/Blog'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import WholeDashboard from './components/dashboard/WholeDashboard'
import NavBar2 from './components/constant-file/NavBar2'
import { CartProvider } from './components/hooks/Context'
import ShopCart from './components/pages/ShopCart'



function App() {
  const location = useLocation()

  //Hide Navbar & Footer on Dashboard Component
  const hideNavbarAndFooter = location.pathname === '/E-commerce-Website/dashboard'

  return (
    <CartProvider>
    {!hideNavbarAndFooter && <NavBar2/>}

    <Routes>
      <Route path='/E-commerce-Website/' element={<Home />} />
      <Route path='/E-commerce-Website/shop' element={<Shop />} />
      <Route path='/E-commerce-Website/store' element={<Store />} />
      <Route path='/E-commerce-Website/register' element={<Register />} />
      <Route path='/E-commerce-Website/login' element={<Login />} />
      <Route path='/E-commerce-Website/blog' element={<Blog/>} />
      <Route path='/E-commerce-Website/about' element={<About />} />
      <Route path='/E-commerce-Website/contact' element={<Contact />} />
      <Route path='/E-commerce-Website/dashboard' element={<WholeDashboard />} />
      <Route path='/E-commerce-Website/shopcart' element={<ShopCart />}/>
    </Routes>

    {!hideNavbarAndFooter && <Footer/>}


    </CartProvider>
  )
}

export default App
