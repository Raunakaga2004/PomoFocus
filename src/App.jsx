import { useEffect, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Timer } from './Components/Timer'

function App() {
  const [bgcolor, setbgcolor] = useState("");
  return (
    <div style={{backgroundColor:bgcolor}} className={`min-h-screen pt-10`}>
      <Timer pomomin={25} pomosec={0} shortmin={5} shortsec={0} longmin={15} longsec={0} focusSession={4} setbgcolor={setbgcolor} bgcolor={bgcolor}/>
    </div>
  )
}

export default App;
