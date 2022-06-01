import axios from 'axios'
import React, { useState } from 'react'
import './AddProduct.css'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

const AddProduct = () => {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [count, setCount] = useState([])
  const [about, setAbout] = useState([])
  const [imgColor, setImgColor] = useState('')
  const [img, setImg] = useState('')
  const [category, setCategory] = useState('')

  const handleChange = (event) => {
    setCategory(event.target.value)
  }

  function handleAddProduct() {
    let shoes = {
      title,
      price,
      count,
      about,
      images: [
        {
          color: imgColor,
          images: img,
        },
      ],
      category,
    }
    axios.post(' http://localhost:8000/shoes', shoes)
    setTitle('')
    setPrice('')
    setImgColor('')
    setImg('')
    setCategory('')
    setCount('')
    setAbout('')
  }

  // function addSize(val) {
  //   let newSize = [...size]
  //   if (newSize.indexOf(val) === -1) {
  //     newSize.push(val)
  //     newSize.sort((a, b) => a - b)
  //     setSize(newSize)
  //   } else {
  //     newSize.sort((a, b) => a - b)
  //     setSize(newSize.filter((item) => item !== val))
  //   }
  // }

  return (
    <div className="addProduct">
      <h2>Add product</h2>
      <input
        type="text"
        placeholder="TITLE"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="PRICE"
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="IMAGE COLOR"
        onChange={(e) => setImgColor(e.target.value)}
      />
      <input
        type="text"
        placeholder="IMAGE"
        accept=".jpg, .jpeg, .png"
        multiple
        onChange={(e) => setImg(e.target.value)}
      />
      <input
        type="text"
        placeholder="Count"
        onChange={(e) => setCount(e.target.value)}
      />
      <input
        type="text"
        placeholder="About"
        onChange={(e) => setAbout(e.target.value)}
      />
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            label="Category"
            onChange={handleChange}
          >
            <MenuItem value="Готовые Сборки">Готовые Сборки</MenuItem>
            <MenuItem value="Мониторы">Мониторы</MenuItem>
            <MenuItem value="Мышки">Мышки</MenuItem>
            <MenuItem value="Клавиатуры">Клавиатуры</MenuItem>
            <MenuItem value="Видокарты">Видокарты</MenuItem>
            <MenuItem value="Наборы">Наборы</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <button onClick={handleAddProduct} className="add-btn">
        Add
      </button>
    </div>
  )
}

export default AddProduct
