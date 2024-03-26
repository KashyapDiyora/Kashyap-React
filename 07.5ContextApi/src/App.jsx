import { useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import { CounterContex } from './Context/Counter/'



function App() {

  const context = useContext(CounterContex);

  return (
    <>
      <div className="App">
        <h1>Context is {context.count}</h1>
        <Counter/>
        <Counter/>
        <Counter/>
        <Counter/>
      </div>
    </>
  )
}



export default App


