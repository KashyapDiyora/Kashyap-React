import { useState } from 'react'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import InputeBox from './componets/InputeBox'

function App() {
  const [amount, setAmount] = useState()
  const [from, setFrom] = useState("USD")
  const [to, setTo] = useState("INR")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)
  // console.log(options);
  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = ()=>{
    setConvertedAmount(amount*currencyInfo[to])
  }

  return (
    <>
      <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat '
      style={{backgroundImage : `url("https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`,}}>
        <div className='w-full'>
          <div className='max-w-md border border-gray-60 rounded-lg mx-auto p-5 bg-white/30 backdrop-blur-sm'>
            <form action="" onSubmit={(e)=> {
                e.preventDefault();
                convert();
              }}>

              <div className='w-full mb-2'>
                  <InputeBox 
                    label="From"
                    amount={amount}
                    onAmountChange={(amount)=> setAmount(amount)}
                    currencyList={options}
                    selectedCurrency={from}
                    setSelectedCurrency={(currency)=> {setFrom(currency)}}
                  />
              </div>
              <div className='w-full relative h-0.5'>
                    <button className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
                    onClick={swap}>
                        swap
                    </button>
              </div>
              <div className="w-full mt-1 mb-4">
                     <InputeBox 
                      label="To"
                      amount={convertedAmount}
                      onAmountChange={()=> {}}
                      currencyList={options}
                      selectedCurrency={to}
                      setSelectedCurrency={(currency)=> {setTo(currency)}}
                     />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg transition ease-in-out delay-75 hover:bg-indigo-500 hover:-translate-y-0.5 hover:scale-105 duration-700">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
