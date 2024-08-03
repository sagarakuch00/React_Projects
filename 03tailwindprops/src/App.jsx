import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'
function App() {
  const [count, setCount] = useState(0)

  // let myObj = {
  //   username : "sagar",
  //   age:21
  // }

  return (
    <>
      <h1 className='bg-green-400 p-2 text-xl text-black rounded-xl mb-5' >Tailwind test</h1>

    <Card  username = "Chaiaurcode" btnText = "Click me" /> 
    <Card  username = "Sagar" btnText = "visit me" /> 
    </>
  )
}

export default App
