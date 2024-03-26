import { useState, useCallback,useEffect,useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [Password, setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null)

  const PasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,length);
    window.navigator.clipboard.writeText(Password);
  },[Password])

  useEffect(() => {
    PasswordGenerator()
  },[length,numberAllowed,charAllowed,PasswordGenerator])
  console.log(passwordRef);
  return (
    <>
      <div className='max-w-md mx-auto shadow-md rounded-lg px-4 my-20 pb-5 text-white bg-gray-800'>
        <h3 className='text-center pt-4 w-full h-full'>Password Generator</h3>
        <div className='flex shadow rounded-lg overflow-hidden pt-3 px-3 pb-6'>
          <input type="text" value={Password} className='outline-none py-1 px-3 rounded-lg w-full text-black' placeholder='password' readOnly ref={passwordRef} />
          <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 rounded-lg'>copy</button>
        </div>
        <div className='flex text-sm gap-x-3 px-3'>
          <div className='flex items-center gap-x1'>
            <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e)=> {setLength(e.target.value)}}/>
            <label>Length{length}</label>
          </div>
          <div className='flex items-center gap-x1'>
            <input type="checkbox" defaultChecked={numberAllowed} id="numberInput" onChange={()=>{setNumberAllowed((pre) => !pre)}} />
            <label htmlFor='numberInput'>Number</label>
          </div>
          <div className='flex items-center gap-x1'>
            <input type="checkbox" defaultChecked={charAllowed} id="charInput" onChange={()=>{setCharAllowed((pre) => !pre)}} />
            <label htmlFor='charInput'>Character</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
