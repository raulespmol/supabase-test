import { Button, TextField } from '@mui/material'
import React, { useState, useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Formulario = () => {
  const { createItem } = useContext(AppContext)
  const [nuevoItem, setNuevoItem] = useState({})

  const handleItem = e => {
    setNuevoItem({
      ...nuevoItem,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await createItem(nuevoItem)
    setNuevoItem({})
  }

  return (
    <form 
      className="mt-4"
      onSubmit={handleSubmit}
    >
      <h3>Agregar Item</h3>
      <div className="flex flex-col">
        <TextField 
          name="nombre" 
          label="Nombre" 
          variant="filled"
          onChange={handleItem}
        />
        <TextField 
          name="material" 
          label="Material" 
          variant="filled"
          onChange={handleItem}
        />
        <TextField 
          name="medidas" 
          label="Medidas" 
          variant="filled"
          onChange={handleItem}
        />
        <TextField 
          name="cantidad" 
          label="Cantidad" 
          variant="filled"
          onChange={handleItem}
        />
        <TextField 
          name="observaciones" 
          label="Observaciones" 
          variant="filled"
          onChange={handleItem}
        />
        <Button 
          variant="contained" 
          color="primary"
          type='submit'
        >
          Agregar
        </Button>
        
      </div>
    </form>
  )
}

export default Formulario