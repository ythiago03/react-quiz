import React from 'react';
import { useContext } from 'react';
import { QuizContext } from '../../context/quiz'

import './Options.css'

export const Options = ({option, selectOption, answer}) => {
    const [quizState, dispatch] = useContext(QuizContext)

  return (
    <div id='options'>
        <p 
          className='option'
          onClick={() => selectOption()}
        >{option}</p>
    </div>
  )
}
