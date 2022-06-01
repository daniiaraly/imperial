import React, { useContext, useEffect } from 'react'
import { authContext } from '../../Contexts/AuthContext'
import CircularProgress from '@mui/material/CircularProgress'
import '../Cart/Cart.css'

const Favorites = () => {
  const { favorites, getDataFavorites, removeFavorites, userId } =
    useContext(authContext)

  function removeProduct(index) {
    let newFavorites = [...favorites]
    newFavorites.splice(index, 1)
    removeFavorites(userId, newFavorites)
  }

  function removeAll() {
    removeFavorites(userId, [])
  }

  useEffect(() => {
    getDataFavorites()
  }, [])

  return (
    <div className="all">
      {favorites ? (
        <div className="cart">
          <div className="cart-container">
            <div className="cart-header">
              <h3 className="heading">Избранное</h3>
              <h5 className="action" onClick={() => removeAll()}>
                Убрать всё
              </h5>
            </div>
            {favorites.map((elem, index) => (
              <div className="cart-items">
                <div className="image-box">
                  <img
                    src={elem.images[0].images}
                    height="120px"
                    width="120px"
                  />
                </div>
                <div className="about">
                  <h2 className="cart-product-title">{elem.title}</h2>
                  <h3 className="cart-product-subtitle">{elem.category}</h3>
                  <hr />
                </div>
                <div className="counter"></div>
                <div className="prices">
                  <div className="prices">
                    <div className="amount">{elem.price}Kzt</div>
                    <div className="remove">
                      <u onClick={() => removeProduct(index)}>Удалить</u>
                    </div>
                  </div>
                  <hr />
                </div>
              </div>
            ))}
            {/* <hr>  */}
            {/* <div className='cart-options'>
                  <h4>Total: {cart.totalPrice} </h4>
                    <Link to="/order">
                      <button>Купить</button>
                    </Link>
                  </div> */}
          </div>
        </div>
      ) : (
        <CircularProgress />
      )}
    </div>
  )
}

export default Favorites
