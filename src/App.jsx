import { useContext } from 'react'
import { AppContext } from './context/AppContext'
import './App.css'
import Item from './components/Item'
import Table from './components/Table'

function App() {
  const { items } = useContext(AppContext)

  return (
    <>
      <h2>Inventario</h2>
      <Table data={items}/>
    </>
  )
}

export default App
