import { useEffect, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Timer } from './Components/Timer'

function App() {
  const [bgcolor, setbgcolor] = useState("");

  const [setting, setSetting] = useState(false);

  // timer setting variables
  const [pomoMin, setPomoMin] = useState(25);
  const [pomoSec, setPomoSec] = useState(0);

  const [shortMin, setShortMin] = useState(5);
  const [shortSec, setShortSec] = useState(0);

  const [longMin, setLongMin] = useState(15);
  const [longSec, setLongSec] = useState(0);

  const [focusSession, setFocusSession] = useState(4);

  const handleSettingsButton = ()=>{
    setSetting(true);
  }

  const handleCloseSetting = ()=>{
    setSetting(false);
  }

  return (
    <div style={{backgroundColor:bgcolor}} className={`h-screen w-screen flex justify-center items-center`}>

      {/* Settings */}
      {setting && <>
        <div className='absolute bg-white min-h-[300px] max-h-[300px] max-w-[300px] min-w-[300px] z-3 rounded-lg p-6'>
          <div className='absolute top-1 right-1' onClick={handleCloseSetting}>
            <svg className="w-6 h-6 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6"/>
            </svg>
          </div>

          {/* content of setting */}
          <div className='text-center text-xs mb-[30px]'>
            Set the time according to your desire and then close the menu
          </div>
          <div className='flex flex-col justify-center gap-5'>
            <label className='flex justify-between'>
              Pomodoro
              <input type='number' defaultValue={pomoMin} className='w-[30px]  bg-slate-100 rounded-lg text-center outline-none border-b-2 border-r-2 border-slate-400' onChange={(e)=>{
                if(e.target.value >= 0)
                  setPomoMin(e.target.value)}}/>
              :
              <input type='number'defaultValue={pomoSec} className='w-[30px]  bg-slate-100 rounded-lg text-center outline-none border-b-2 border-r-2 border-slate-400' onChange={(e)=> {
                if(e.target.value < 60 && e.target.value >= 0)
                  setPomoSec(e.target.value)}}/>
            </label>

            <label className='flex justify-between'>
              Short Rest
              <input type='number' defaultValue={shortMin} className='w-[30px]  bg-slate-100 rounded-lg text-center outline-none border-b-2 border-r-2 border-slate-400' onChange={(e)=>{
                if(e.target.value >= 0)
                  setShortMin(e.target.value)}}/>
              :
              <input type='number'defaultValue={shortSec} className='w-[30px]  bg-slate-100 rounded-lg text-center outline-none border-b-2 border-r-2 border-slate-400' onChange={(e)=>{
                if(e.target.value < 60 && e.target.value >= 0)
                  setShortSec(e.target.value)}}/>
            </label>

            <label className='flex justify-between'>
              Long Rest
              <input type='number' defaultValue={longMin} className='w-[30px]  bg-slate-100 rounded-lg text-center outline-none border-b-2 border-r-2 border-slate-400' onChange={(e)=>{
                if(e.target.value >= 0)
              setLongMin(e.target.value)}}/>
              :
              <input type='number'defaultValue={longSec} className='w-[30px]  bg-slate-100 rounded-lg text-center outline-none border-b-2 border-r-2 border-slate-400' onChange={(e)=>{
                if(e.target.value < 60 && e.target.value >= 0)
                  setLongSec(e.target.value)}}/>
            </label>

            <label className='flex justify-between'>
              Number of focus Session before Long break
              <input type='number'defaultValue={focusSession} className='w-[30px]  bg-slate-100 rounded-lg text-center outline-none border-b-2 border-r-2 border-slate-400' onChange={(e)=>setFocusSession(e.target.value)}/>
            </label>
          </div>

        </div>
        <div className='absolute bg-slate-400 min-h-[300px] min-w-[300px] z-2 rounded-lg translate-x-[3px] translate-y-[4px]'></div>
        <div className='h-screen w-screen absolute bg-black z-1 opacity-80 backdrop-blur-sm flex justify-center items-center'>
        </div>
      </>}

      <div className='absolute top-0 translate-x-[0.4vh] translate-y-[0.3vh] text-slate-400 font-bold text-[5vh] select-none'>PomoFocus</div>
      <div className='absolute top-0 text-white font-bold text-[5vh] select-none'>PomoFocus</div>

      <div className='absolute text-2 top-5 lg:right-[2vw] md:right-[2vw] right-[4vw] text-white translate-x-[3px] translate-y-[3px]' onClick={handleSettingsButton}>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50" fill='#afb0c9ff'>
          <path d="M47.16,21.221l-5.91-0.966c-0.346-1.186-0.819-2.326-1.411-3.405l3.45-4.917c0.279-0.397,0.231-0.938-0.112-1.282 l-3.889-3.887c-0.347-0.346-0.893-0.391-1.291-0.104l-4.843,3.481c-1.089-0.602-2.239-1.08-3.432-1.427l-1.031-5.886 C28.607,2.35,28.192,2,27.706,2h-5.5c-0.49,0-0.908,0.355-0.987,0.839l-0.956,5.854c-1.2,0.345-2.352,0.818-3.437,1.412l-4.83-3.45 c-0.399-0.285-0.942-0.239-1.289,0.106L6.82,10.648c-0.343,0.343-0.391,0.883-0.112,1.28l3.399,4.863 c-0.605,1.095-1.087,2.254-1.438,3.46l-5.831,0.971c-0.482,0.08-0.836,0.498-0.836,0.986v5.5c0,0.485,0.348,0.9,0.825,0.985 l5.831,1.034c0.349,1.203,0.831,2.362,1.438,3.46l-3.441,4.813c-0.284,0.397-0.239,0.942,0.106,1.289l3.888,3.891 c0.343,0.343,0.884,0.391,1.281,0.112l4.87-3.411c1.093,0.601,2.248,1.078,3.445,1.424l0.976,5.861C21.3,47.647,21.717,48,22.206,48 h5.5c0.485,0,0.9-0.348,0.984-0.825l1.045-5.89c1.199-0.353,2.348-0.833,3.43-1.435l4.905,3.441 c0.398,0.281,0.938,0.232,1.282-0.111l3.888-3.891c0.346-0.347,0.391-0.894,0.104-1.292l-3.498-4.857 c0.593-1.08,1.064-2.222,1.407-3.408l5.918-1.039c0.479-0.084,0.827-0.5,0.827-0.985v-5.5C47.999,21.718,47.644,21.3,47.16,21.221z M25,32c-3.866,0-7-3.134-7-7c0-3.866,3.134-7,7-7s7,3.134,7,7C32,28.866,28.866,32,25,32z"></path>
        </svg>
      </div>

      <div className='absolute text-2 top-5 lg:right-[2vw] md:right-[2vw] right-[4vw] text-white' onClick={handleSettingsButton}>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50" fill='#ffffff'>
          <path d="M47.16,21.221l-5.91-0.966c-0.346-1.186-0.819-2.326-1.411-3.405l3.45-4.917c0.279-0.397,0.231-0.938-0.112-1.282 l-3.889-3.887c-0.347-0.346-0.893-0.391-1.291-0.104l-4.843,3.481c-1.089-0.602-2.239-1.08-3.432-1.427l-1.031-5.886 C28.607,2.35,28.192,2,27.706,2h-5.5c-0.49,0-0.908,0.355-0.987,0.839l-0.956,5.854c-1.2,0.345-2.352,0.818-3.437,1.412l-4.83-3.45 c-0.399-0.285-0.942-0.239-1.289,0.106L6.82,10.648c-0.343,0.343-0.391,0.883-0.112,1.28l3.399,4.863 c-0.605,1.095-1.087,2.254-1.438,3.46l-5.831,0.971c-0.482,0.08-0.836,0.498-0.836,0.986v5.5c0,0.485,0.348,0.9,0.825,0.985 l5.831,1.034c0.349,1.203,0.831,2.362,1.438,3.46l-3.441,4.813c-0.284,0.397-0.239,0.942,0.106,1.289l3.888,3.891 c0.343,0.343,0.884,0.391,1.281,0.112l4.87-3.411c1.093,0.601,2.248,1.078,3.445,1.424l0.976,5.861C21.3,47.647,21.717,48,22.206,48 h5.5c0.485,0,0.9-0.348,0.984-0.825l1.045-5.89c1.199-0.353,2.348-0.833,3.43-1.435l4.905,3.441 c0.398,0.281,0.938,0.232,1.282-0.111l3.888-3.891c0.346-0.347,0.391-0.894,0.104-1.292l-3.498-4.857 c0.593-1.08,1.064-2.222,1.407-3.408l5.918-1.039c0.479-0.084,0.827-0.5,0.827-0.985v-5.5C47.999,21.718,47.644,21.3,47.16,21.221z M25,32c-3.866,0-7-3.134-7-7c0-3.866,3.134-7,7-7s7,3.134,7,7C32,28.866,28.866,32,25,32z"></path>
        </svg>
      </div>
      
      <Timer pomomin={pomoMin} pomosec={pomoSec} shortmin={shortMin} shortsec={shortSec} longmin={longMin} longsec={longSec} focusSession={focusSession} setbgcolor={setbgcolor} bgcolor={bgcolor}/>
    </div>
  )
}

export default App;
