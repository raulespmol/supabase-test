import { Button, TextField } from '@mui/material'
import React, { useState, useContext } from 'react'
import { AppContext } from '../context/AppContext'

const nuevoItemInicial = {
  nombre: '',
  material: '',
  medidas: '',
  cantidad: '',
  observaciones: ''
}

const Formulario = () => {
  const { createItem } = useContext(AppContext)
  const [nuevoItem, setNuevoItem] = useState(nuevoItemInicial)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleItem = e => {
    setNuevoItem({
      ...nuevoItem,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      await createItem(nuevoItem)
      setNuevoItem(nuevoItemInicial)
    } catch (error) {
      console.error("Error al crear el item", error)
    } finally {
      setIsSubmitting(false)
    }
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
          value={nuevoItem.nombre}
          onChange={handleItem}
        />
        <TextField 
          name="material" 
          label="Material" 
          variant="filled"
          value={nuevoItem.material}
          onChange={handleItem}
        />
        <TextField 
          name="medidas" 
          label="Medidas" 
          variant="filled"
          value={nuevoItem.medidas}
          onChange={handleItem}
        />
        <TextField 
          name="cantidad" 
          label="Cantidad" 
          variant="filled"
          value={nuevoItem.cantidad}
          onChange={handleItem}
        />
        <TextField 
          name="observaciones" 
          label="Observaciones" 
          variant="filled"
          value={nuevoItem.observaciones}
          onChange={handleItem}
        />
        <Button 
          variant="contained" 
          color="primary"
          type="submit"
          loading={isSubmitting}
        >
          Agregar
        </Button>
        
      </div>
    </form>
  )
}

export default Formulario