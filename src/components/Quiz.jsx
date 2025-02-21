import questions from "../questions";
import { useCallback, useEffect, useRef, useState } from "react";
import quizCompleteImg from '../assets/quiz-complete.png'
import Question from "./Question";
import Summary from "./Summary";



export default function Quiz(){

    // const [activeQuestion,setActiveQuestion]= useState(0)  we can derive the activeQ index from the answers state instead of making a state for it
    const [answers,setAnswers]=useState([])
    // const [answerState,setAnswerState]=useState('')

    const activeQuestionIndex= answers.length // deriving the active question index

    console.log(activeQuestionIndex)

    const quizCompleted=activeQuestionIndex === questions.length

    const handleSelectAnswer=useCallback(function handleSelectAnswer(selectedAnswer){

        // setAnswerState('answered')
        setAnswers(oldState => [...oldState,selectedAnswer])


        // setTimeout(()=>{
        //     if(selectedAnswer===questions[activeQuestionIndex].answers[0]){
        //         setAnswerState('correct')
        //     }else{
        //         setAnswerState('wrong')
        //     }

        //     setTimeout(()=>{
        //         setAnswerState('') 
        //     },2000)
        // },1000)
    },[])

    const handleSkipAnswer=useCallback(()=>handleSelectAnswer(null)
    ,[handleSelectAnswer])


    if(quizCompleted){
        return(
            <div id="summary">
                <img src={quizCompleteImg} alt="quiz-completed" />
                <h2>Quiz Completed!</h2>
                <Summary answers={answers} />
            </div>
        )
    }



    return(
        <section id="quiz">
            <Question key={activeQuestionIndex}
            index={activeQuestionIndex}
             onSelectAnswer={handleSelectAnswer}
             onSkipAnswer={handleSkipAnswer} 
            />
        </section>
    )
}