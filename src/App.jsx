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
import WhishList from './components/pages/WhishList'
import { CartProvider } from './components/hooks/Context'



function App() {
  const location = useLocation()

  //Hide Navbar & Footer on Dashboard Component
  const hideNavbarAndFooter = location.pathname === '/dashboard'

  return (
    <CartProvider>
    {!hideNavbarAndFooter && <NavBar2/>}

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/shop' element={<Shop />} />
      <Route path='/store' element={<Store />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/blog' element={<Blog/>} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/dashboard' element={<WholeDashboard />} />
      <Route path='/wishlist' element={<WhishList />} />
    </Routes>

    {!hideNavbarAndFooter && <Footer/>}


    </CartProvider>
  )
}

export default App
