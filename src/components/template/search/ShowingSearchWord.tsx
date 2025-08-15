'use client'
import useAppSelector from '@/hooks/useAppSelector'
import React, { useEffect, useState } from 'react'

function ShowingSearchWord() {
    const {searchWord,paginatorChangerFlag} = useAppSelector(state=>state.search)
    const [word, setWord] = useState('')
    useEffect(()=>{
        setWord(searchWord)
    },[paginatorChangerFlag])

    if(word){
        return (
            <h1 className='text-center font-bold text-2xl max-sm:text-xl text-custom-dark-blue mt-5'>نتایج جستجو برای "{word}"</h1>
        )
    }else{
        return null;
    }
}

export default ShowingSearchWord
