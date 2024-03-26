import Chai from "./chai"
function App() {
  const username = "chai aur code !";
  return (
    // <> ... </> is called fragment 
    <>
    <Chai/>
    <h1>chai aur react {username}</h1>
    <p>test para</p>
    </>
  )
}

export default App
