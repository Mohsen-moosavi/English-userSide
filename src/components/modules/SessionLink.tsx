'use client'
import useAppSelector from '@/hooks/useAppSelector'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import toast from 'react-hot-toast'

type PageProps = {
    sessionId: number,
    number: number,
    sessionTime: string,
    sessionName: string,
    courseId:number,
    isActive?:boolean
}

function SessionLink({ sessionId, number, sessionTime, sessionName,courseId,isActive }: PageProps) {

    const { userPhone } = useAppSelector(state => state.user)
    const router = useRouter()

    function pushToSessionPage(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, url: string) {
        e.preventDefault()
        if (!userPhone) {
            return toast.error("برای مشاهده جلسات، ابتدا باید وارد حساب کاربری تان شوید!")
        }
        return router.push(url)
    }

    return (
        <Link href={`/sessions/${courseId}/${sessionId}`} onClick={e => pushToSessionPage(e, `/sessions/${courseId}/${sessionId}`)} className={`flex items-center gap-x-1 sm:gap-x-3 text-custom-dark-blue max-sm:text-[12px] rounded-2xl hover:bg-sky-400/20 ${isActive?'bg-sky-400/30':''}`}>
            <span className="border-2 border-solid border-custom-dark-blue rounded-full w-[20px] h-[20px] leading-[20px] sm:w-[40px] sm:h-[40px] text-center sm:leading-[40px] text-custom-dark-blue">{number}</span>
            <h4>{sessionName}</h4>
            <span className="text-custom-gray mr-auto">{sessionTime}</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-[20px] h-[20px]" fill="#166d91" viewBox="0 0 576 512">
                <path d="M352 144c0-44.2 35.8-80 80-80s80 35.8 80 80l0 48c0 17.7 14.3 32 32 32s32-14.3 32-32l0-48C576 64.5 511.5 0 432 0S288 64.5 288 144l0 48L64 192c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64l-32 0 0-48z" />
            </svg>
        </Link>
    )
}

export default SessionLink
