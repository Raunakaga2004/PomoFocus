import { useEffect, useState } from "react";
import { Howl } from "howler";
import alarmSound from "../assets/a.mp3"
import clickSound from "../assets/click.mp3"

let timeoutId;

let shortBreakCount = 0;

export function Timer(props){
    const [timertype, setTimerType] = useState("Pomodoro");

    const curMin = ()=>{
        if(timertype == "Pomodoro") return props.pomomin;
        else if (timertype == "Short Break") return props.shortmin;
        else return props.longmin;
    }

    const curSec = ()=>{
        if(timertype == "Pomodoro") return props.pomosec;
        else if (timertype == "Short Break") return props.shortsec;
        else return props.longsec;
    }

    const [Min, setMin] = useState(curMin);
    const [Sec, setSec] = useState(curSec);

    const [isTimerOn, setTimer] = useState(false);

    const alarm = new Howl({
        src: [alarmSound],
        volume: 1.0,
    });
    const click = new Howl({
        src: [clickSound],
        volume: 0.1,
        rate: 1.25
    });


    useEffect( ()=>{
        if(isTimerOn){
            if(Min > 0 || Sec>0){
                const updateSec = Sec>0 ? Sec-1 : 59;
                timeoutId = setTimeout(()=>{
                    setSec(updateSec); 
                    if(Sec == 0)
                        setMin(Min-1);
                },1000);
            }
            else{
                alarm.play();
                if(timertype == "Pomodoro"){
                    if(shortBreakCount == props.focusSession-1){
                        shortBreakCount = 0;
                        setTimerType("Long Break");
                    }
                    else{
                        shortBreakCount++;
                        setTimerType("Short Break");
                    }
                }
                else 
                    setTimerType("Pomodoro");
                
                setTimeout(()=>{
                    alarm.stop();
                },3000);
            }
        }
        else{
            clearTimeout(timeoutId);
        }
    },[Sec, Min, isTimerOn])

    useEffect(()=>{
        setMin(curMin);
        setSec(curSec);
    },[timertype])

    useEffect(()=>{
        if(timertype == "Pomodoro") props.setbgcolor("#CE4257");
        else if(timertype == "Long Break") props.setbgcolor("#1E6091");
        else props.setbgcolor("#0A9396");
        
    },[timertype])
    
    return <div className="text-white flex flex-col bg-neutral-900/20 rounded-xl justify-between p-8 items-center xl:h-[35vh] 2xl:w-[30vw] xl:w-[40vw] lg:w-[50vw] md:w-[65vw] sm:w-[75vw] h[70vh] select-none">
        <div className="flex flex-row sm:text-lg md:text-xl gap-6 justify-center mb-2">
            <button onClick={()=>{setTimerType("Pomodoro"); setTimer(false); setMin(props.pomomin); setSec(props.pomosec)}} className={`${timertype == "Pomodoro" ? "bg-neutral-900/40 py-1 px-2 rounded-md" : "border-0"}`}>Pomodoro</button>
            <button onClick={()=>{setTimerType("Short Break"); setTimer(false); setMin(props.shortmin); setSec(props.shortsec)}} className={`${timertype == "Short Break" ? "bg-neutral-900/40 py-1 px-2 rounded-md" : "border-0"}`}>Short Break</button>
            <button onClick={()=>{setTimerType("Long Break"); setTimer(false); setMin(props.longmin); setSec(props.longsec)}} className={`${timertype == "Long Break" ? "bg-neutral-900/40 py-1 px-2 rounded-md" : "border-0"}`}>Long Break</button>
        </div>
        
        <div className="md:text-9xl text-8xl font-bold text-center">
            {`${Min < 10 ? "0" : ""}${Min} : ${Sec < 10 ? "0" : ""}${Sec}`}
        </div>
        
        <div className="flex flex-row justify-center items-center">
            <button onClick={()=>{setTimer(!isTimerOn); click.play()}} style={{color : props.bgcolor}} className={`${isTimerOn ? "mt-4" : "border-b-4 mt-3 border-slate-300" } px-10 bg-white font-semibold text-2xl py-1 text-black rounded-md` }>{isTimerOn ? "PAUSE" : "START"}</button>
            
            {isTimerOn ? <button onClick={()=>changeTimer()} className="absolute translate-x-[100px] translate-y-[5px]">
                <div className="flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-12 w-12">
                        <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z" />
                    </svg>
                </div>
            </button> : null}
        </div>
        
        <div className="">
            <button onClick={()=>{setTimer(false); click.play(); setMin(curMin); setSec(curSec);}} className={`text-white text-center mt-2 bg-neutral-900/20 rounded-md font-semibold py-0.5 px-4`}>RESET</button>
        </div>
        
    </div>

    function changeTimer(){
        if(timertype == "Pomodoro"){
            if(shortBreakCount == props.focusSession-1){
                setTimerType("Long Break");
                shortBreakCount = 0;
            }
            else{ 
                setTimerType("Short Break");
                shortBreakCount++;
            }
        }
        else
            setTimerType("Pomodoro");

        setTimer(false);
    }
}