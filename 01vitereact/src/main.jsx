import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom App | chai</h1>
    </div>
  )
}

// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children:'Click me to visit google'
// }

const anotherElement = (
  <a href="https://youtube.com" target='_blank' >visit youtube</a>
)

const anotherUser = "chai aur code"

const ReactElement = React.createElement(
  'a',
  {
    href: 'https://google.com',
    target: '_blank'
  },
  'click me to visit google',
  anotherUser // evaluelater express
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <App/>
  ReactElement
  // anotherElement
)
