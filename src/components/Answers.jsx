import { useRef } from "react"

export default function Answers({answers,selectedAnswer,answerState,onSelect}){
    const shuffledAnswers=useRef()


    if(!shuffledAnswers.current){  //equal to undefined
        shuffledAnswers.current=[...answers]
        shuffledAnswers.current.sort(()=> Math.random() - 0.5)
    }    

    return (
        <ul id="answers">
                    {shuffledAnswers.current.map((answer)=>{
                        let style=''
                        if(answerState==='answered' && answer===selectedAnswer){
                            style='selected'
                        }
                        if ((answerState==='correct' || answerState==='wrong') && answer===selectedAnswer){
                            style=answerState
                        }
                        return <li key={answer} className="answer"><button className={style} onClick={()=>onSelect(answer)} disabled={answerState!==''}>{answer}</button></li>
                    })}
        </ul>
    )
}