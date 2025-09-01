import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Signin from './Authencation/Signin'
import Cart from './pages/Cart'
import Hom from "./components/Hom"
import { prodcutsData } from './api/api'


const Layout = () => {

 return (
  <>
  <Navbar />
<Outlet />
  <Footer />
  </>
 )
}

function App() {

  const router =  createBrowserRouter(createRoutesFromElements(

<Route >
  <Route path='/' element={<Layout />}>
  <Route index element={<Hom/>} loader={prodcutsData}></Route>
  <Route path='/cart' element={<Cart/>}></Route>




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