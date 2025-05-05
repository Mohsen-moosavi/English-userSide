'use client'
import useAppSelector from '@/hooks/useAppSelector'
import Link from 'next/link'
import React from 'react'

function LoginBtn() {

    const {userName} = useAppSelector(state=>state.user)

    return (
        <>
        {userName ? (
            <Link href="/user-info"
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
        ): (
                    <Link href="/login"
                    className="flex items-center py-1 px-2 sm:py-2 sm:px-3 text-custom-black bg-custom-blue rounded-lg hover:!text-black hover:opacity-60">
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
