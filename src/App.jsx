import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Signin from './Authencation/Signin'
import Cart from './pages/Cart'
import Products from './pages/Products'
import Favorites from './pages/Favorites'
import Checkout from './pages/Checkout'
import Hom from "./components/Hom"
import Privacy from "./pages/Privacy"
import Terms from "./pages/Terms"
import Cookies from "./pages/Cookies"
import Profile from "./pages/Profile"
import ProductDetails from "./pages/ProductDetails"
import { prodcutsData } from './api/api'


const Layout = () => {

 return (
  <>
  <Navbar />
  <Outlet className='pt-100'/>
  <Footer />
  </>
 )
}

function App() {

  const router =  createBrowserRouter(createRoutesFromElements(

<Route >
  <Route path='/' element={<Layout />}>
  <Route index element={<Hom/>} loader={prodcutsData}></Route>
  <Route path='/products' element={<Products/>} loader={prodcutsData}></Route>
  <Route path='/cart' element={<Cart/>}></Route>
  <Route path='/favorites' element={<Favorites/>}></Route>
  <Route path='/checkout' element={<Checkout/>}></Route>
  <Route path='/privacy' element={<Privacy/>}></Route>
  <Route path='/terms' element={<Terms/>}></Route>
  <Route path='/cookies' element={<Cookies/>}></Route>
  <Route path='/profile' element={<Profile/>}></Route>
  <Route path='/product/:productId' element={<ProductDetails/>} loader={prodcutsData}></Route>
  </Route>
  <Route path='/sign' element={<Signin/>}></Route>
</Route>



  ))




  return (
    <div>
    <RouterProvider router={router}/>
    </div>
  )
}

export default App