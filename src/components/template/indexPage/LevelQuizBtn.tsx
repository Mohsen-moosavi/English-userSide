'use client'
import React from 'react'
import toast from 'react-hot-toast'

function LevelQuizBtn() {
    function goToLevelQuizHandler(e:React.MouseEvent<HTMLButtonElement, MouseEvent>){
        e.preventDefault()
        toast.error('این بخش به زودی اضافه خواهد شد.')
    }
  return (
    <button onClick={goToLevelQuizHandler} className="text-[12px] lg:text-[16px] bg-custom-blue px-2 lg:px-4 py-2 rounded-md text-custom-black hover:opacity-80 hover:text-black cursor-pointer">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
        className="inline bi bi-signpost-split-fill" viewBox="0 0 16 16">
        <path
            d="M7 16h2V6h5a1 1 0 0 0 .8-.4l.975-1.3a.5.5 0 0 0 0-.6L14.8 2.4A1 1 0 0 0 14 2H9v-.586a1 1 0 0 0-2 0V7H2a1 1 0 0 0-.8.4L.225 8.7a.5.5 0 0 0 0 .6l.975 1.3a1 1 0 0 0 .8.4h5z" />
    </svg>
    تعیین سطح</button>
  )
}

export default LevelQuizBtn
