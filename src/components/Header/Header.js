import React, { useContext } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { useAuth } from '../../Contexts/AuthContext'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { productsContext } from '../../Contexts/ProductsContext'
import { red } from '@mui/material/colors'
import Logo from '../../assets/img/logo.png'

const Header = () => {
  const {
    isAdmin,
    handleLogOut,
    user: { email },
  } = useAuth()

  const { getProducts } = useContext(productsContext)

  return (
    <div className="header">
      <div className="container-header">
        <div className="header-top">
          <div className="header-top-icon">
          </div>
          <div className="header-top-title">
            {isAdmin && (
              <Link to="/admin">
                <p>Админ панель</p>
              </Link>
            )}
            <p>FAQ</p>
            <p>Соц.сети</p>
            {email ? (
              <Link to="/auth">
                <p onClick={handleLogOut}>Выйти</p>
              </Link>
            ) : null}
            {email ? null : (
              <Link to="/auth">
                <p>Войти</p>
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="mid-bg">
        <div className="container-header">
          <div className="header-mid">
            <div className="header-mid-icon">
              <Link to="/">
                <img src={Logo} alt='logo' width='150' />
              </Link>
            </div>
            <div className="header-mid-title">
              <Link to="/favorites">
                <FavoriteBorderIcon style={{ color: red[500] }} />
              </Link>
              <Link to="/cart">
                <ShoppingCartIcon color="primary" />
              </Link>
            </div>
            <div className="header-mid-search">
              <input
                type="text"
                placeholder="search..."
                onChange={(e) => getProducts(`q=${e.target.value}`)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
