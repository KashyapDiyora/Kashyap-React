import React from 'react'
import { useId } from 'react'

function InputeBox({
    label,
    amount,
    onAmountChange,
    currencyList = [],
    selectedCurrency = "usd",
    setSelectedCurrency,
    amountDisable = false,
    currencyDisable = false,
    className = ""
}) {
    const amountInputId = useId()
    return (
        <div className={`w-full rounded-lg bg-white flex ${className} p-4 `}>
            <div className='w-1/2 flex flex-col justify-start'>
                <label htmlFor={amountInputId} className='w-full mb-2 text-black/40'>
                    {label}
                </label>
                <input type="number"
                    name=""
                    id={amountInputId}
                    className='outline-none text-left w-full bg-transparent py-1.5'
                    placeholder='Amount'
                    disabled = {amountDisable}
                    value={amount}
                    onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className='w-1/2 flex flex-col justify-end'>
                <p className='text-black/40 w-full mb-2'>Currency Type</p>
                <select name="" id="" className='rounded-lg outline-none bg-gray-100 px-1 py-1 cursor-pointer' value={selectedCurrency} disabled={currencyDisable} onChange={(e)=> setSelectedCurrency && setSelectedCurrency(e.target.value)}>
                    {
                        currencyList.map((items)=>{
                            return(
                                <option key={items} value={items}>{items}</option>
                            )
                        })
                    }
                </select>
            </div>
        </div>
    )
}

export default InputeBox
