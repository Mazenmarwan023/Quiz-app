import { useState, useEffect } from "react";

export default function QuestionTimer({timer,timeEnds,mode}){

    const [remainingTime,setRemainingTime]=useState(timer)


    useEffect(()=>{
        console.log("SETTING TIMEOUT")
        const time=setTimeout(()=>{
            timeEnds()
        },timer)

        return ()=>{
            clearTimeout(time)
        }
    },[timer,timeEnds])
   

    

    useEffect(()=>{
        console.log("SETTING INTERVAL")
        const interval=setInterval(()=>{
            setRemainingTime(oldTime=>oldTime-=100)
        },100)
    
        return ()=>{
            clearInterval(interval)
        }
    },[])


    return <progress id="question-time" max={timer} value={remainingTime} className={mode} />
}