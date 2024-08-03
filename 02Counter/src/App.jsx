import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(0)

  //let counter = 15
  
  const addValue = ()=>{    
      console.log("Clicked", counter + 1);
      setCounter(counter + 1)      
  }

  const removeValue = ()=>{
      if(counter > 0 ){
        setCounter(counter - 1)
      }
  }

  return (
    <>
     
      <h1>
        chai aur code 
      </h1>
      <h2>
        Count value:{counter}
      </h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>remove value</button>

      
    </>
  )
}

export default App
