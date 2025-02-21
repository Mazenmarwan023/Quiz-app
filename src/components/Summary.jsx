import questions from "../questions"

export default function Summary({answers}){
    const unansweredQuestions=answers.filter((answer)=>answer===null)
    const skippedPercentage=Math.round((unansweredQuestions.length/answers.length)*100)

    const correctAnswers=answers.filter((answer,index)=> answer===questions[index].answers[0])
    const correctPercentage=Math.round((correctAnswers.length/answers.length)*100)

    const wrongPercentage=100-skippedPercentage-correctPercentage
    return(
        <>
            <div id="summary-stats">
                <p>
                    <span className="number">{skippedPercentage}%</span>
                    <span className="text">skipped</span>
                </p>
                <p>
                    <span className="number">{correctPercentage}%</span>
                    <span className="text">answered correctly</span>
                </p>
                <p>
                    <span className="number">{wrongPercentage}%</span>
                    <span className="text">answered incorrectly</span>
                </p>
            </div>
            <ol>
                {questions.map((question,index)=>{
                    let answerClass='user-answer'

                    if(answers[index]===null){
                        answerClass+=' skipped'
                    }else if(answers[index]===question.answers[0]){
                        answerClass+=' correct'
                    }else{
                        answerClass+=' wrong'
                    }

                    return(
                    <li key={question.text}>
                        <h3>{index+=1}</h3>
                        <p className="question">{question.text}</p>
                        <p className={answerClass} >{answers[index]?? 'Skipped'}</p>
                    </li>
                    )
                })}
            </ol>
        </>
    )
}