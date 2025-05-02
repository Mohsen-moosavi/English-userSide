'use client'
import useAppSelector from '@/hooks/useAppSelector'
import React, { useEffect, useState } from 'react'

function ShowingSearchWord() {
    const {searchWord,paginatorChangerFlag} = useAppSelector(state=>state.allCourse)
    const [word, setWord] = useState('')

    useEffect(()=>{
        setWord(searchWord)
    },[paginatorChangerFlag])

    if(word){
        return (
            <h2 className='text-md text-custom-dark-blue opacity-90 text-center mt-2'>نتایج جستجو برای "{word}"</h2>
        )
    }else{
        return null;
    }
}

export default ShowingSearchWord
