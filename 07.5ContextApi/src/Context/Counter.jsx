import { createContext, useState } from "react";

export const CounterContex = createContext(null);

export const ContextProvider = (props)=>{
    const [count,setCounter] = useState(0);
    console.log(CounterContex);
    return(
        <CounterContex.Provider value={{count,setCounter}}>
            {props.children}
        </CounterContex.Provider>
    )
}

