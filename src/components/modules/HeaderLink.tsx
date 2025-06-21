'use client'
import useAppDispatch from '@/hooks/useAppDispatch'
import useAppSelector from '@/hooks/useAppSelector'
import { changePaginatorChangerFlag, setCategory } from '@/redux/slice/allCourses/allCourseSlice'
import { closeMenu } from '@/redux/slice/ui/uiSlice'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

type PageProps = {
    title:string,
    category:string
}

function HeaderLink({title,category}:PageProps) {

    const dispatch = useAppDispatch()
    const router = useRouter()
    const path = usePathname()

    function headerLinkHandler(e:React.MouseEvent<HTMLAnchorElement, MouseEvent>){
        e.preventDefault()

        dispatch(setCategory(category))
        if(path === '/courses'){
            dispatch(changePaginatorChangerFlag())
        }else{
            router.push('/courses')
        }

        dispatch(closeMenu())
        
    }

    return (
        <Link href={'/courses'} onClick={headerLinkHandler} className="text-custom-dark-blue hover:text-sky-500">{title}</Link>
    )
}

export default HeaderLink
