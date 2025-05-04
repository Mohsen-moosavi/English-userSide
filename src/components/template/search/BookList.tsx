'use client'
import BookBox from '@/components/modules/BookBox'
import useAppDispatch from '@/hooks/useAppDispatch'
import useAppSelector from '@/hooks/useAppSelector'
import { setBookOffset, setBooks } from '@/redux/slice/search/searchSlice'
import { searchBookThunk } from '@/redux/slice/search/searchThunk'
import React, { useEffect, useState } from 'react'

function BookList() {
    const dispatch = useAppDispatch()
    const [isFirstRendering, setIsFirstRendering] = useState(true)
    const { books, bookLimit, bookOffset, category, searchWord, bookLoaded, booksCount, paginatorChangerFlag, categoryChangerFlag } = useAppSelector(state => state.search)

    useEffect(() => {
        if (category === '' || category === 'book') {
            dispatch(searchBookThunk({ limit: bookLimit, offset: bookOffset, prevBooks: books, searchWord }))
        }

        return ()=>{
            dispatch(setBookOffset(0))
            dispatch(setBooks([]))
        }
    }, [paginatorChangerFlag])

    useEffect(() => {
        if (isFirstRendering) {
            setIsFirstRendering(false)
        } else {
            if (category === '' || category === 'book') {
                dispatch(searchBookThunk({ limit: bookLimit, offset: bookOffset, searchWord, prevBooks: books }))
            }
        }
    }, [categoryChangerFlag])

    function paginationHandler() {
        dispatch(searchBookThunk({ limit: bookLimit, offset: bookOffset + bookLimit, prevBooks: books, searchWord }))
        dispatch(setBookOffset(bookOffset + bookLimit))
    }

    return (
        <>
            {(category === '' || category === 'book') ? (
                <div className="container mx-auto">
                <h2 className='text-start font-bold text-xl max-sm:text-lg text-custom-dark-blue mt-5 border-b-2 border-custom-dark-blue pb-2'>لیست کتاب ها</h2>
                    {!bookLoaded ? (
                        <div className="h-[70vh] w-full flex items-center justify-center">
                            <svg className='animate-spin' fill="#166d91" height="60px" width="60px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 330 330">
                                <g id="XMLID_2_">
                                    <path id="XMLID_4_" d="M97.5,165c0-8.284-6.716-15-15-15h-60c-8.284,0-15,6.716-15,15s6.716,15,15,15h60
                        C90.784,180,97.5,173.284,97.5,165z"/>
                                    <path id="XMLID_5_" d="M307.5,150h-30c-8.284,0-15,6.716-15,15s6.716,15,15,15h30c8.284,0,15-6.716,15-15S315.784,150,307.5,150z"
                                    />
                                    <path id="XMLID_6_" d="M172.5,90c8.284,0,15-6.716,15-15V15c0-8.284-6.716-15-15-15s-15,6.716-15,15v60
                        C157.5,83.284,164.216,90,172.5,90z"/>
                                    <path id="XMLID_7_" d="M172.501,240c-8.284,0-15,6.716-15,15v60c0,8.284,6.716,15,15,15c8.284,0,15-6.716,15-15v-60
                        C187.501,246.716,180.785,240,172.501,240z"/>
                                    <path id="XMLID_8_" d="M77.04,48.327c-5.856-5.858-15.354-5.857-21.213,0c-5.858,5.858-5.858,15.355,0,21.213l42.427,42.428
                        c2.929,2.929,6.768,4.394,10.606,4.394c3.838,0,7.678-1.465,10.606-4.393c5.858-5.858,5.858-15.355,0-21.213L77.04,48.327z"/>
                                    <path id="XMLID_9_" d="M246.746,218.034c-5.857-5.857-15.355-5.857-21.213,0c-5.858,5.858-5.857,15.355,0,21.213l42.428,42.426
                        c2.929,2.929,6.768,4.393,10.607,4.393c3.839,0,7.678-1.465,10.606-4.393c5.858-5.858,5.858-15.355,0-21.213L246.746,218.034z"/>
                                    <path id="XMLID_10_" d="M98.254,218.034L55.828,260.46c-5.858,5.858-5.858,15.355,0,21.213c2.929,2.929,6.768,4.393,10.607,4.393
                        c3.839,0,7.678-1.464,10.606-4.393l42.426-42.426c5.858-5.858,5.858-15.355,0-21.213
                        C113.609,212.176,104.111,212.176,98.254,218.034z"/>
                                </g>
                            </svg>
                        </div>
                    ) :
                        (
                            <>
                                {books.length ? (
                                    <>
                                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-5 my-5">
                                            {books.map((book, i) => (
                                                <BookBox {...book} key={i} />
                                            ))}
                                        </div>
                                    </>
                                ) : (
                                    <div className="h-[60vh] w-full flex items-center justify-center">
                                        <span className='text-red-400 text-md'>موردی یافت نشد!!!</span>
                                    </div>
                                )}
                            </>

                        )}
                    {booksCount > (bookOffset + bookLimit) ? (
                        <div className='flex justify-center mb-3'>
                            <button className='flex gap-x-2 items-center text-[10px] sm:text-[14px] bg-sky-300/20 px-1 sm:px-3 py-1 rounded-full cursor-pointer hover:opacity-70' onClick={() => paginationHandler()}>
                                <span className="text-nowrap text-custom-dark-blue">مشاهده بیشتر</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-[14px] h-[14px]" fill="#166d91" viewBox="0 0 448 512">
                                    <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                                </svg>
                            </button>
                        </div>
                    ) : null}
                </div>
            ) : null}
        </>
    )
}

export default BookList
