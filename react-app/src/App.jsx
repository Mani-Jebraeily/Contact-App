import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './assets/components/Header'
import Contacts from './assets/components/contacts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Contacts/>

    </>
  )
}

export default App
