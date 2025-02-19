import { useContext } from 'react'
import { AppContext } from './context/AppContext'
import './App.css'
import Table from './components/Table'
import Formulario from './components/Formulario'

function App() {
  const { items } = useContext(AppContext)

  return (
    <>
      <h2 className="text-3xl mb-2">Inventario</h2>
      <Table data={items} />
      <Formulario />
    </>
  )
}

export default App
