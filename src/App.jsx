import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './componente/NavBar/NavBar'
import ItemListContainer from './componente/ItemListContainer/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)
  const greeting = "Bienvenidos"

  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={greeting}/>
    </>
  )
}

export default App
