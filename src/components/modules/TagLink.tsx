'use client'
import useAppDispatch from '@/hooks/useAppDispatch'
import { setSearchword } from '@/redux/slice/search/searchSlice'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

type pageProps = {
    tagName : string,
}

function TagLink({tagName} : pageProps) {

    const dispatch = useAppDispatch()
    const router = useRouter()

    function linkClickHandler(e:React.MouseEvent<HTMLAnchorElement, MouseEvent> , searchWord:string){
        e.preventDefault()
        dispatch(setSearchword(searchWord))
        router.push('/search')
    }

  return (
    <Link href={'/search'} onClick={(e)=>linkClickHandler(e,tagName)}><span>#{tagName}</span></Link>
  )
}

export default TagLink
