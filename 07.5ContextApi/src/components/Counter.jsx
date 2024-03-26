import React from 'react'
import { useContext } from 'react'
import { CounterContex } from '../Context/Counter/'


function Counter() {
    const context =  useContext(CounterContex);
    return (
        <>
            <div>
                <button onClick={() => context.setCounter(context.count + 1)}>Increment</button>
                <button onClick={() => context.setCounter(context.count - 1)}>Decrement</button>
            </div>
        </>
    )
}

export default Counter
