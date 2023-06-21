import React , { useContext } from 'react'
import logo from '../../assets/images/image.png'
import { MainContext } from '../../contexts/MainContext'
import { Link, NavLink } from 'react-router-dom'

function Header() {

    const {showMenu , setShowMenu , cartItems} = useContext(MainContext)

    const handleShowMenu = (e)=>{
        e.stopPropagation()
        setShowMenu(!showMenu)
      }

  return (
    <header className='d-flex justify-content-between align-items-center'>
        <div className="logo py-1 px-2">
            <img src={logo} alt="#" />
        </div>
        <div className="menu d-flex justify-content-between" style={showMenu ? {right: '0'} : {}}>
            <div className="nav">
                <i className="bi bi-x-lg text-light fs-2 d-md-none pointer close-sidebar" onClick={() => setShowMenu(false)}></i>
                <div className="nav-item d-flex align-items-center">
                    <NavLink to="/" className="text-light">
                    <i className="bi bi-house-fill text-light px-2"></i>
                        Home
                    </NavLink>
                </div>
                <div className="nav-item d-flex align-items-center position-relative">
                    <NavLink to="/cart" className="text-light">
                    <i className="bi bi-cart-fill text-light px-2"></i>
                        Cart
                    </NavLink>
                    <span className="cart-counter position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {cartItems.length ? cartItems.length : ""}
                    </span>
                </div>
                {/* <NavLink to="/favorit" className="nav-item d-flex align-items-center">
                    <i className="bi bi-heart-fill text-light px-2"></i>
                    <span className="nav-link text-light">Favorite</span>
                </NavLink> */}
            </div>
            <NavLink to="/login" className='btn btn-outline-light'>log-in</NavLink>
        </div>
        <i className="bi bi-filter-right me-3 fs-1 d-md-none" onClick={handleShowMenu}></i>
    </header>
  )
}

export default Header