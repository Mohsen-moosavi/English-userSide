'use client'
import useAppSelector from '@/hooks/useAppSelector'
import Link from 'next/link'
import React from 'react'

function LoginBtn() {

    const {userName,bagCount} = useAppSelector(state=>state.user)

    return (
        <>
        {userName ? (
            <div className='flex items-center gap-x-1 lg:gap-x-2 max-md:hidden'>
                <Link href={'/user-panel/bag'} className='relative'>
                    <svg className='w-[25px] h-[25px]' fill="#166d91" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64l0 48-128 0 0-48zm-48 48l-64 0c-26.5 0-48 21.5-48 48L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-208c0-26.5-21.5-48-48-48l-64 0 0-48C336 50.1 285.9 0 224 0S112 50.1 112 112l0 48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/>
                    </svg>
                { bagCount===0 ? null : <span className='absolute bottom-[-5px] left-[-5px] bg-red-400 text-white p-1 leading-[8px] rounded-full text-[10px] flex items-center justify-center'>{bagCount}</span>}
                </Link>
                <Link href="/user-panel"
            className="flex items-center py-1 px-2 sm:py-2 sm:px-3 text-custom-black bg-custom-blue rounded-lg hover:!text-black hover:opacity-60">
            <svg className="w-[0.8rem] lg:w-[1rem] ml-3" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512">
                <path
                    d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
            </svg>
            <span className="text-[10px] lg:text-sm">
                {userName}
            </span>
                </Link>
            </div>
        ): (
                    <Link href="/login"
                    className="max-md:hidden flex items-center py-1 px-2 sm:py-2 sm:px-3 text-custom-black bg-custom-blue rounded-lg hover:!text-black hover:opacity-60">
                    <svg className="w-[0.8rem] lg:w-[1rem] ml-3" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512">
                        <path
                            d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                    </svg>
                    <span className="text-[10px] lg:text-sm">
                        ورود | ثبت نام
                    </span>
                </Link>
        )}
        </>
    )
}

export default LoginBtn
