import React, { useContext, useEffect, useState } from 'react'
import { productsContext } from '../../../Contexts/ProductsContext'
import './EditModal.css'

const EditModal = ({ searchVal }) => {
  const { editedShoe, saveEditShoe } = useContext(productsContext)

  const [editShoe, setEditShoe] = useState(editedShoe)

  function handleValue(e) {
    let newShoe = {
      ...editShoe,
    }
    newShoe[e.target.name] = e.target.value
    setEditShoe(newShoe)
  }

  function toggleSize(e) {
    let newShoe = {
      ...editShoe,
    }
    if (newShoe.size.indexOf(e.target.value) === -1) {
      newShoe.size.push(e.target.value)
      newShoe.size.sort((a, b) => a - b)
      setEditShoe(newShoe)
    } else {
      newShoe.size.sort((a, b) => a - b)
      newShoe.size = newShoe.size.filter((item) => item !== e.target.value)
      setEditShoe(newShoe)
    }
  }

  console.log(editShoe)

  return (
    <>
      {editShoe ? (
        <div className="modalEdit">
          <input
            type="text"
            name="title"
            placeholder="title"
            value={editShoe.title}
            onChange={(e) => handleValue(e)}
          />
          <input
            type="text"
            name="price"
            placeholder="price"
            value={editShoe.price}
            onChange={(e) => handleValue(e)}
          />
          <input
            type="text"
            name="count"
            placeholder="count"
            value={editShoe.count}
            onChange={(e) => handleValue(e)}
          />
          <textarea
            type="text"
            name="about"
            placeholder="about"
            value={editShoe.about}
            onChange={(e) => handleValue(e)}
          />
          <input
            type="text"
            name="category"
            placeholder="category"
            value={editShoe.category}
            onChange={(e) => handleValue(e)}
          />
          <button
            onClick={() => saveEditShoe(editShoe.id, editShoe, searchVal)}
          >
            Сохранить
          </button>
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </>
  )
}

export default EditModal
