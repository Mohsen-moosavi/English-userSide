'use client'
import useAppDispatch from '@/hooks/useAppDispatch'
import useAppSelector from '@/hooks/useAppSelector'
import { sendCommentThunk } from '@/redux/slice/course/courseThunks'
import Link from 'next/link'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

function CreateComment({courseId} : {courseId : number}) {

    const { userPhone } = useAppSelector(state => state.user)
    const dispatch = useAppDispatch()
    const [commentBody, setCommentBody] = useState('')
    const [commentScore, setCommentScore] = useState(0)

    async function sendCommentHandler() {
        if (!commentBody.trim()) {
            return toast.error("ابتدا نظر خود را وارد کنید!")
        }

        if (commentBody.trim().length < 3) {
            return toast.error("نظر وارد شده، کوتاه تر از حد مجاز است!")
        }

        if (![1,2,3,4,5].includes(commentScore)) {
            return toast.error("لطفا امتیاز خود را برای دوره، ثبت کنید.")
        }
        const dispatchResult = await dispatch(sendCommentThunk({content:commentBody,score:commentScore,courseId}))
        if((dispatchResult.meta.requestStatus = 'fulfilled') && !dispatchResult.type.endsWith('rejected')){
            setCommentBody('')
            setCommentScore(0)
        }
        
    }

    if (userPhone) {
        return (
            <>
                <select value={commentScore} onChange={e=>setCommentScore(Number(e.target.value))} className='mt-3 w-full border-2 border-custom-dark-blue rounded-full p-1 bg-[#166d91]/10 text-custom-dark-blue'>
                    <option value={0} disabled>امتیاز شما</option>
                    <option value={5}>عالی</option>
                    <option value={4}>خوب</option>
                    <option value={3}>متوسط</option>
                    <option value={2}>بد</option>
                    <option value={1}>خیلی بد</option>
                </select>
                <textarea value={commentBody} onChange={e => setCommentBody(e.target.value)}
                    className="w-full border-2 border-custom-dark-blue bg-[#166d91]/10 shadow-inset-center rounded-xl resize-none outline-none p-2 text-custom-dark-green mt-3 max-sm:text-sm min-h-[100px] sm:min-h-[200px]"
                    placeholder="نظر خود را بنویسید..."></textarea>
                <button onClick={sendCommentHandler}
                    className="bg-custom-dark-blue text-white px-2 py-1 rounded-xl mt-1 w-full shadow-center hover:opacity-60">ارسال
                    نظر</button>
            </>
        )
    } else {
        return (
            <div className='text-center my-3'>
                <span className='text-custom-dark-blue'>برای ثبت نظر، ابتدا باید به حساب کاربری تان، <Link href={'/login'} className='!text-sky-400 !underline'>وارد شوید</Link>.</span>
            </div>
        )
    }

}

export default CreateComment
