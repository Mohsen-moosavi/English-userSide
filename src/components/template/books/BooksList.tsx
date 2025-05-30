'use client'
import BookBox from '@/components/modules/BookBox'
import Pagination from '@/components/modules/pagination'
import useAppDispatch from '@/hooks/useAppDispatch'
import useAppSelector from '@/hooks/useAppSelector'
import { setOffset } from '@/redux/slice/allBooks/allBookSlice'
import { searchBookThunk } from '@/redux/slice/allBooks/allBooksThunk'
import React, { useEffect} from 'react'

function BooksList() {

    const dispatch = useAppDispatch()
    const { books, limit, offset, category, searchWord, loaded, booksCount,paginatorChangerFlag } = useAppSelector(state => state.allBook)

    useEffect(() => {
        dispatch(searchBookThunk({ limit, offset, category, searchWord }))
    }, [paginatorChangerFlag])

    function paginationHandler(page: number) {
        dispatch(searchBookThunk({ limit, offset: page * limit, category, searchWord }))
    }

    return (
        <div className="container mx-auto">
            {!loaded ? (
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
            <Pagination itemsCount={booksCount} numberOfitemInEveryPage={limit} defaultPage={1} paginationHandler={paginationHandler} setOffset={setOffset} reseter={paginatorChangerFlag} />
        </div>
    )
}

export default BooksList
