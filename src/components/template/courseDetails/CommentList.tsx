'use client'

import { CommentsType } from "@/app/(main)/courses/[slug]/page";
import CommentBox from "@/components/modules/CommentBox";
import useAppDispatch from "@/hooks/useAppDispatch";
import useAppSelector from "@/hooks/useAppSelector";
import { addNewComments } from "@/redux/slice/course/courseSlice";
import { getMoreCommentThunk } from "@/redux/slice/course/courseThunks";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

type pageProps = {
    commentCount: number,
    courseId: number,
}

function CommentList({ commentCount, courseId }: pageProps) {

    const [isShowMore, setIsShowMore] = useState(false)
    const [isLoadin, setLoadin] = useState(false)
    const [commentShowCount, setCommentShowCount] = useState(3)
    const dispatch = useAppDispatch()
    const { comments } = useAppSelector(state => state.course)

    async function getMoreComments() {
        setIsShowMore(true)
        setLoadin(true);

        const dispatchResult = await dispatch(getMoreCommentThunk({ courseId, commentShowCount }))
        if ((dispatchResult.meta.requestStatus = 'fulfilled') && !dispatchResult.type.endsWith('rejected')) {
            dispatch(addNewComments([...comments, ...dispatchResult.payload.data.comments]))
            setCommentShowCount(dispatchResult.payload.data.newOffset)
        }
        setLoadin(false)
    }

    if ((commentCount > 3)) {
        return (
            <>
                {isShowMore ? (
                    <>
                        {isLoadin ? (
                            <div className='flex justify-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#166d91" className="w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] animate-spin" viewBox="0 0 512 512">
                                    <path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z" />
                                </svg>
                            </div>
                        ) : (<>
                            {comments?.map((comment, index) => (
                                <CommentBox key={index} {...comment} />
                            ))}
                            {(commentCount - commentShowCount <= 0) ? null : (
                                <div className='flex justify-center'>
                                    <button className='flex gap-x-2 items-center text-[10px] sm:text-[14px] bg-sky-300/20 px-1 sm:px-3 py-1 rounded-full cursor-pointer hover:opacity-70' onClick={getMoreComments}>
                                        <span className="text-nowrap text-custom-dark-blue">مشاهده بیشتر</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-[14px] h-[14px]" fill="#166d91" viewBox="0 0 448 512">
                                            <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                                        </svg>
                                    </button>
                                </div>
                            )}
                        </>)}
                    </>
                ) : (
                    <div className='flex justify-center'>
                        <button className='flex gap-x-2 items-center text-[10px] sm:text-[14px] bg-sky-300/20 px-1 sm:px-3 py-1 rounded-full cursor-pointer hover:opacity-70' onClick={getMoreComments}>
                            <span className="text-nowrap text-custom-dark-blue">مشاهده بیشتر</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-[14px] h-[14px]" fill="#166d91" viewBox="0 0 448 512">
                                <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                            </svg>

                        </button>
                    </div>
                )}

            </>
        )
    } else {
        return null;
    }
}

export default CommentList
