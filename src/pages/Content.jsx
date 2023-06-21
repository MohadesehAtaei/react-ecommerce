import React, { useContext } from 'react'
import Home from './home/Home'
import { MainContext } from '../contexts/MainContext'
import { Route, Routes } from 'react-router-dom'
import Cart from './cart/Cart'
import Login from './login/Login'
import ShowProduct from './showProduct/ShowProduct'

function Content() {
    const {setShowMenu} = useContext(MainContext)

  return (
    <div onClick={()=>setShowMenu(false)}>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/showProduct/:id' element={<ShowProduct/>}/>
      </Routes>
    </div>
  )
}

export default Content;