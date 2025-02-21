import logo from '../assets/quiz-logo.png'

export default function Header(){

    return(
        <header>
            <img src={logo} alt="quiz-image" />
            <h1>React quiz</h1>
        </header>
    )
}