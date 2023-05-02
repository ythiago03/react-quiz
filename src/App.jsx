//react
import { useContext, useEffect } from 'react'
import { QuizContext } from './context/quiz'

//components
import Welcome from './components/Welcome/Welcome'
import Questions from './components/Questions/Questions'
import { GameOver } from './components/GameOver/GameOver'

//estáticos
import './App.css'



export function App() {
  const [quizState, dispatch] = useContext(QuizContext)  

  useEffect(() => {
    dispatch({type: 'REORDER_QUESTIONS',})
    
  }, [])

  return (
    <div className='App'>
        <h1>Quiz de Programação</h1>
        {quizState.gameStage === "Start" && <Welcome />}
        {quizState.gameStage === "Playing" && <Questions />}
        {quizState.gameStage === "End" && <GameOver />}
    </div>  
  )
}
