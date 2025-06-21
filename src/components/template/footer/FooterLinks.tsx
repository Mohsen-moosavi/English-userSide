'use client'
import useAppDispatch from '@/hooks/useAppDispatch'
import { changePaginatorChangerFlag, setCategory } from '@/redux/slice/allCourses/allCourseSlice'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

function FooterLinks() {

    const dispatch = useAppDispatch()
    const router = useRouter()
    const path = usePathname()

    function headerLinkHandler(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,category:string) {
        e.preventDefault()

        dispatch(setCategory(category))
        if (path === '/courses') {
            dispatch(changePaginatorChangerFlag())
        } else {
            router.push('/courses')
        }

    }
    return (
        <ul>
            <li><Link href="/courses" onClick={(e)=>headerLinkHandler(e,'children')}>دوره های کودکان</Link></li>
            <li><Link href="/courses" onClick={(e)=>headerLinkHandler(e,'ease')}>سطح مقدماتی</Link></li>
            <li><Link href="/courses" onClick={(e)=>headerLinkHandler(e,'medum')}>سطح متوسط</Link></li>
            <li><Link href="/courses" onClick={(e)=>headerLinkHandler(e,'high')}>سطح پیشرفته</Link></li>
            <li><Link href="/courses" onClick={(e)=>headerLinkHandler(e,'free')}>دوره های رایگان</Link></li>
        </ul>
    )
}

export default FooterLinks
