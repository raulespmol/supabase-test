import { useContext } from 'react'
import { AppContext } from './context/AppContext'
import './App.css'
import Table from './components/Table'
import Formulario from './components/Formulario'

function App() {
  const { items } = useContext(AppContext)

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-3xl mb-2 font-medium">Inventario</h2>
      <Table data={items} />
      <Formulario />
    </main>
  )
}

export default App
