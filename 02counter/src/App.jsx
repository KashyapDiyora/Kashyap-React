import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [Counter,setCounter] = useState(0); // hooks

  // let Counter = 5;

  const addValue = ()=>{
    // console.log("clicked",Counter);
    if(Counter>=20)
    {
      alert("you Can't make Counter above 20");
      setCounter(0)
    }
    else{
      setCounter(prevCounter => prevCounter+1)
      setCounter(prevCounter => prevCounter+1)
      setCounter(prevCounter => prevCounter+1)
      setCounter(prevCounter => prevCounter+1)
    }
  }
  const removeValue = ()=>{
    // console.log("clicked",Counter);
    if(Counter<=0)
    {
      setCounter(0)
      alert("you Can't make Counter Negative");
    }
    else
    {
      setCounter(Counter-1);
    }
  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter Value {Counter}</h2>
      <button
      onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
      <footer>footer:{Counter}</footer>
    </>
  )
}

export default App
