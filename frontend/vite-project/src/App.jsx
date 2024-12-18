import { useState } from 'react'
import './App.css'
import Nav from './Components/Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './Components/Footer'
import Signup from './Components/Signup'
import PrivateComponent from './Components/PrivateComponent'
import Login from './Components/Login'
import AddProduct from './Components/AddProduct'
import ProductList from './Components/ProductList'
import UpdateProduct from './Components/UpdateProduct'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<PrivateComponent/>}>
            <Route path='/' element={<ProductList/>} />
            <Route path='/add' element={<AddProduct/>} />
            <Route path='/update/:id' element={<UpdateProduct/>} />
            <Route path='/logout' element={<h1>Logout</h1>} />
            <Route path='/profile' element={<h1>Profile</h1>} />
          </Route>

          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />

        </Routes>
      </BrowserRouter>
      <Footer />
    </div>

  )
}

export default App
