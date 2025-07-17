import { useEffect, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Timer } from './Components/Timer'

function App() {
  const [bgcolor, setbgcolor] = useState("");
  return (
    <div style={{backgroundColor:bgcolor}} className={`h-screen w-screen flex flex-col justify-center items-center gap-4`}>
      {/* <div className='text-white font-semibold text-5xl absolute top-[30vh]'>PomoFocus</div> */}
      <Timer pomomin={25} pomosec={0} shortmin={5} shortsec={0} longmin={15} longsec={0} focusSession={4} setbgcolor={setbgcolor} bgcolor={bgcolor}/>
    </div>
  )
}

export default App;
