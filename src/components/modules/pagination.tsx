'use client'
import useAppDispatch from '@/hooks/useAppDispatch'
import React, { useEffect, useState } from 'react'

type PageProps = {
    itemsCount:number,
    numberOfitemInEveryPage:number,
    defaultPage:number,
    paginationHandler:(page: number)=> void,
    reseter:boolean,
    setOffset:any
}

function Pagination({ itemsCount, numberOfitemInEveryPage, defaultPage = 1, paginationHandler, reseter, setOffset }:PageProps) {

    const paginationBtnCount = Math.ceil(itemsCount / numberOfitemInEveryPage)
    const [page, setPage] = useState(defaultPage)
    const dispatch = useAppDispatch()

    useEffect(()=>{
        setPage(1)
        setOffset ? dispatch(setOffset(0)) : null
    } , [reseter])

    function paginationClickHandler(button:number) {
        paginationHandler(button - 1)
        setOffset ? dispatch(setOffset((button - 1) * numberOfitemInEveryPage)):null;
        setPage(button)
    }

    function paginationPreClickHandler() {
        paginationHandler(page - 2)
        setOffset ? dispatch(setOffset((page - 2) * numberOfitemInEveryPage)):null;
        setPage(prev => prev - 1)
    }

    function paginationNextClickHandler() {
        paginationHandler(page)
        setOffset ? dispatch(setOffset((page) * numberOfitemInEveryPage)):null;
        setPage(prev => prev + 1)
    }
    if(paginationBtnCount > 1){
        return (
            <div className='text-center my-5'>
                <div className='inline-block rounded-lg overflow-hidden'>
                    <div className='flex items-center justify-center gap-x-[1px]'>
                        <button
                            onClick={paginationPreClickHandler}
                            disabled={page === 1}
                            className={`${page === 1 ?'':'cursor-pointer'} md:w-[45px] md:h-[45px] w-[30px] h-[30px] max-md:text-[10px] flex items-center justify-center bg-[#166d91]/70 text-white hover:bg-[#166d91] ${page === 1 ? 'opacity-50 hover:bg-[#166d91]/70' : ''}`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-[20px] h-[20px]' fill='#fff' viewBox="0 0 448 512">
                            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
                            </svg>
                        </button>
                        {Array.from(Array(paginationBtnCount)).map((_, index) => (
                            <button
                            type='button'
                                key={index}
                                onClick={() => paginationClickHandler(index + 1)}
                                className={`cursor-pointer md:w-[45px] md:h-[45px] w-[30px] h-[30px] max-md:text-[10px] flex items-center justify-center bg-[#166d91]/70 text-white hover:bg-[#166d91] ${page === index + 1 ? '!bg-[#166d91]' : ''}`}>
                                {index + 1}
                            </button>
                        ))}
                        <button
                            onClick={paginationNextClickHandler}
                            disabled={page === paginationBtnCount}
                            className={`${page === paginationBtnCount ?'':'cursor-pointer'} md:w-[45px] md:h-[45px] w-[30px] h-[30px] max-md:text-[10px] flex items-center justify-center bg-[#166d91]/70 text-white hover:bg-[#166d91]  ${page === paginationBtnCount ? 'opacity-50 hover:bg-[#166d91]/70' : ''}`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-[20px] h-[20px]' fill='#fff' viewBox="0 0 448 512">
                            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        )
    }else{
        return null
    }
}

export default Pagination
