import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive");
  const root = document.getElementById('root');
  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>

      <div className='fixed flex flex-wrap bottom-28 items-center inset-x-64  border-4 rounded-full justify-around bg-white py-3 px-0'>
        <div className='w-20 h-8 bg-red-500 text-center rounded-full cursor-pointer outline-none' onClick={()=> setColor("red")}>red</div>
        <div className='w-20 h-8 bg-blue-600 text-center rounded-full cursor-pointer outline-none' onClick={()=> setColor("blue")} >blue</div>
        <div className='w-20 h-8 bg-green-600 text-center rounded-full cursor-pointer outline-none' onClick={()=> setColor("green")}>green</div>
        <div className='w-20 h-8 bg-orange-600 text-center rounded-full cursor-pointer outline-none' onClick={()=> setColor("orange")}>orange</div>
        <div className='w-20 h-8 bg-yellow-300 text-center rounded-full cursor-pointer outline-none' onClick={()=> setColor("yellow")}>yellow</div>
      </div>

    </div>
  )
}

export default App
