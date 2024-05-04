import { useState } from 'react'
import './App.css'
import useStorage from './customhooks'

function App() {
  const [inp,setInputValue]=useState('')
  const [storageValue,setStorageValue]=useStorage(inp)

  const passInputValue=(e)=>{
    setInputValue(e.target.value)
    setStorageValue(e.target.value)
  }

  return (

    <div className='style'>
    <p>Enter</p>
    <input type="text"
    defaultValue={sessionStorage.getItem('InputValue')} 
    onChange={passInputValue}
    placeholder='Type here...'/>
    </div>
  
  )
}

export default App