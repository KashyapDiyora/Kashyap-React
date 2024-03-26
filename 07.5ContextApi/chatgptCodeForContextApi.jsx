import React, { createContext, useContext, useState } from 'react';

// Step 1: Create a context object
const CounterContext = createContext();

// Step 2: Create a provider component
const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  // Provide the state and functions through context
  const contextValue = {
    count,
    increment,
  };

  return (
    <CounterContext.Provider value={contextValue}>
      {children}
    </CounterContext.Provider>
  );
};

// Step 3: Create a consumer hook for functional components
const useCounter = () => {
  const context = useContext(CounterContext);

  if (!context) {
    throw new Error('useCounter must be used within a CounterProvider');
  }

  return context;
};

// Step 4: Create components that use the context
const CounterDisplay = () => {
  const { count } = useCounter();

  return <div>Counter Value: {count}</div>;
};

const CounterButton = () => {
  const { increment } = useCounter();

  return <button onClick={increment}>Increment Counter</button>;
};

// Step 5: Use the components within a CounterProvider
const App = () => {
  return (
    <CounterProvider>
      <div>
        <CounterDisplay />
        <CounterButton />
      </div>
    </CounterProvider>
  );
};

export default App;
