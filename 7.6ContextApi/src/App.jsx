import { useState } from 'react'
import './App.css'
import Card from './Componets/Card'
import Cart from './Componets/Cart'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card name="MacBook" price={400}/>
      <Card name="Dell Latitude" price={300}/>
      <Card name="HP Laptop" price={200}/>
      <Cart />
    </>
  )
}

export default App
