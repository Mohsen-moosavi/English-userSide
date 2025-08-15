'use client'
import useAppDispatch from '@/hooks/useAppDispatch'
import { setSearchword } from '@/redux/slice/search/searchSlice'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

function Search() {

    const [searchWord,setSearchWord] = useState('')
    const dispatch = useAppDispatch()
    const router = useRouter()

    function searchSubmitHandler(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        if(!searchWord.trim()){
            return toast.error("لطفا یک عبارت صحیح وارد کنید!")
        }
        dispatch(setSearchword(searchWord))
        router.push(`/search?searchword=${searchWord}`)
    }

    return (
        <section>
            <div className="container mx-auto">
                <div
                    className="flex flex-col items-center gap-y-3 border-y-2 border-custom-dark-green border-solid py-4 sm:py-8 mt-6 sm:mt-4">
                    <span className="font-bold text-custom-dark-green max-sm:text-sm">چی دوست داری یاد بگیری؟</span>
                    <form className="relative max-w-[500px] w-full" onSubmit={searchSubmitHandler}>
                        <input type="text"
                            className="max-sm:text-sm w-full border-2 border-custom-dark-green bg-custom-dark-green/50 pr-2 pl-8 sm:pr-4 py-2 rounded-full text-custom-dark-blue placeholder-custom-dark-blue/50"
                            placeholder="جستجو..."
                            value={searchWord}
                            onChange={e=>setSearchWord(e.target.value)}
                            />
                        <button className="absolute top-3 left-3 bi bi-search cursor-pointer" type='submit'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill='#166d91' viewBox="0 0 16 16">
                                <path
                                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Search
