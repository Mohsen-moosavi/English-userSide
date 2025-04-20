'use client'
import Image from 'next/image'
import React from 'react'
import humbergerMenuImage from '@images/hamburger.png'
import useAppDispatch from '@/hooks/useAppDispatch'
import { openMenu } from '@/redux/slice/ui/uiSlice'

function HeaderMenuBtn() {

    const dispatch = useAppDispatch()

    return (
        <span className="md:hidden w-[30px] cursor-pointer" id="menu-handler" onClick={()=>dispatch(openMenu())}>
            <Image src={humbergerMenuImage} alt="menu" />
        </span>
    )
}

export default HeaderMenuBtn
