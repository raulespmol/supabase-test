import { useContext } from 'react'
import { AppContext } from './context/AppContext'
import './App.css'
import Item from './components/Item'
import Button from './components/Button'

function App() {
  const { items } = useContext(AppContext)

  return (
    <>
      <h2>Inventario</h2>
      {items && items.length > 0 ? (
        items.map((item, index) => (
          <Item key={index} {...item} />
        ))
      ) : (
        <p>Cargando items...</p>
      )}
      <Button />
    </>
  )
}

export default App
