'use client'
import useAppDispatch from '@/hooks/useAppDispatch'
import useAppSelector from '@/hooks/useAppSelector'
import { changePaginatorChangerFlag, setSearchword} from '@/redux/slice/allBooks/allBookSlice'
import React from 'react'

function SearchBox() {
    const { searchWord, loaded } = useAppSelector(state => state.allBook)
    const dispatch = useAppDispatch()

    function searchFormSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        dispatch(changePaginatorChangerFlag())
    }

    return (
        <form className='relative max-md:w-full' onSubmit={(e) => searchFormSubmitHandler(e)}>
            <input
                type="text"
                className="max-md:w-full py-2 pr-3 pl-8 rounded-full shadow-inset-center bg-sky-400/10 placeholder-gray-400 w-full md:max-w-[300px]"
                placeholder="جستجو..."
                value={searchWord}
                disabled={!loaded}
                onChange={(e) => dispatch(setSearchword(e.target.value))}
            />
            <button type='submit' className='absolute top-[12px] left-[10px] hover:opacity-70 cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" fill='#166d91' className='w-[20px] h-[20px]' viewBox="0 0 512 512">
                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                </svg>
            </button>
        </form>
    )
}

export default SearchBox
