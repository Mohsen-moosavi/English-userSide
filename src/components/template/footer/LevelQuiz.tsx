'use client'
import React from 'react'
import toast from 'react-hot-toast'

function LevelQuiz() {

    function quizBtnHandler(e:React.MouseEvent<HTMLButtonElement, MouseEvent>){
        e.preventDefault()
        toast.error("این بخش به زودی اضافه خواهد شد!")
    }

  return (
    <li><button className='cursor-pointer text-[#bdbdbd] hover:opacity-60' onClick={quizBtnHandler}>تعیین سطح</button></li>
  )
}

export default LevelQuiz
