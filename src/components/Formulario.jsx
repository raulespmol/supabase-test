import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useState, useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { campos } from '../data/constants'

const nuevoItemInicial = () => {
  return campos.reduce((acc, campo) => {
    acc[campo.toLowerCase()] = ''
    return acc
  }, {})
}

const Formulario = () => {
  const { createItem, materials } = useContext(AppContext)
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
      <div className="flex flex-col gap-3">
        {campos.map(campo => (
          campo.toLowerCase() === 'material' ? (
            <FormControl fullWidth key={campo}>
              <InputLabel id="material-label">Material</InputLabel>
              <Select
                labelId="material-label"
                value={nuevoItem.material}
                name="material"
                label="Material"
                onChange={handleItem}
              >
                {materials.map(material => (
                  <MenuItem key={material.id} value={material.id}>{material.nombre}</MenuItem>
                ))}
              </Select>
            </FormControl>
            ) : (
            <TextField 
              key={campo}
              name={campo.toLowerCase()} 
              label={campo} 
              variant="outlined"
              value={nuevoItem[campo.toLowerCase()]}
              onChange={handleItem}
            />
            )
          ))
        }
        
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