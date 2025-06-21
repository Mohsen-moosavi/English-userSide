'use client'
import useAppDispatch from '@/hooks/useAppDispatch'
import { closeMenu } from '@/redux/slice/ui/uiSlice'
import Link from 'next/link'
import React from 'react'

function HeaderRightLink({url,title} : {url:string , title:string}) {

    const dispatch = useAppDispatch()

    function headerLinkHandler(e:React.MouseEvent<HTMLAnchorElement, MouseEvent>){
        dispatch(closeMenu())    
    }

    return (
        <Link href={url} onClick={headerLinkHandler} className="text-custom-dark-blue hover:text-sky-500">{title}</Link>
    )
}

export default HeaderRightLink
