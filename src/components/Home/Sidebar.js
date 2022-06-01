import React, { useContext, useState } from 'react'
import { productsContext } from '../../Contexts/ProductsContext'
import history from '../../helpers/history'
import '../Home/Category/Category.css'
import './Sidebar.css'
import cx from 'classnames'
import Slider from './Slider'
import { CSSTransition } from 'react-transition-group'


const menuItems = [
  { title: 'Все' },
  { title: 'Готовые Сборки' },
  { title: 'Мониторы' },
  { title: 'Клавиатуры' },
  { title: 'Мышки' },
  { title: 'Видеокарты' },
  { title: 'Наборы' },
]
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true)
  const { getProducts } = useContext(productsContext)
  const [category, setCategory] = useState(getCatgeory())

  function getCatgeory() {
    let search = new URLSearchParams(history.location.search)
    return search.get('category')
  }

  console.log(category)
  function handleChangeCategory(value) {
    if (value === 'Все') {
      history.push(`${history.location.pathname.replace('category')}`)
      getProducts()
      return
    }
    let search = new URLSearchParams(history.location.search)
    search.set('category', value)
    history.push(`${history.location.pathname}?${search.toString()}`)
    getProducts(search.toString())
    setCategory(value)
  }
  return (
    <>
      <div id="navigation">
    <div id="responsive-nav">
        <ul className="main-nav nav navbar-nav">
          {menuItems.map((item) => (
            <li
              key={item.title}
              onClick={() => handleChangeCategory(item.title)}
            >
                  <a>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
      </div>
    </>
  )
}

export default Sidebar
