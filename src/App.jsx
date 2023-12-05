import { useState } from 'react'
import Navbar  from './components/Navbar'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-gray-100 min-h-screen min-w-fit'>
      <Navbar/>
      <Card />
    </div>
  )
}

export default App
