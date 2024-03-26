import React,{useState,useContext } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './Componets/Login'
import Profile from './Componets/Profile'
function App() {

  return (
    <>
    <UserContextProvider>
      <h1>React With Chai and Share is Importance</h1>
      <Login />
      <Profile />
    </UserContextProvider>
    </>
  )
}

export default App
