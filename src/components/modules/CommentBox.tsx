import { CommentsType } from '@/app/(main)/courses/[slug]/page'
import moment from 'moment-jalaali'
import userProfile from '@images/user-profile.png'
import Image from 'next/image'
import React from 'react'

type pageProps = {
    content: string,
    score: number|null,
    created_at: Date,
    replies: CommentsType[],
    user: { name: string, avatar: string | null, role: { name: string } }
}

function CommentBox({ content, score, created_at, replies, user }: pageProps) {
    return (
        <div className="border-2 border-solid border-custom-dark-blue rounded-xl mb-3">
            <div className="flex items-center justify-between border-b border-solid border-custom-dark-blue mx-2 py-2">
                <div className="flex items-center gap-x-2">
                    <Image width={40} height={40} src={user.avatar || userProfile} alt="user"
                        className="rounded-full w-[50px] bg-custom-dark-blue/50" />
                    <div className="flex flex-col">
                        <span className="text-custom-dark-blue">{user.name}</span>
                        <span className="text-[12px] text-custom-gray">{moment(created_at).format('jYYYY-jMM-jDD')}</span>
                    </div>
                </div>
                <div className="flex items-center">
                    {Array(score||0).fill(0).map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="w-[16px] h-[16px]" fill='#166d91' viewBox="0 0 576 512">
                            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                        </svg>
                    ))}
                </div>
            </div>
            <p className="text-custom-gray text-[14px] my-2 px-2">{content}</p>
            {replies.length ? (
                <>
                    {replies.map(comment => (
                        <div key={comment.id} className="border-t-2 border-custom-dark-blue border-solid rounded-xl bg-sky-300/10 mx-1 shadow-[inset_0_0_4px_0_#000]">
                            <div className="flex items-center justify-between border-b border-solid border-custom-dark-blue mx-2 py-2">
                                <div className="flex items-center gap-x-2">
                                    <Image width={40} height={40} src={comment.user.avatar || userProfile} alt="user"
                                        className="rounded-full w-[50px] bg-custom-dark-blue/50" />
                                    <div className="flex flex-col">
                                        <span className="text-custom-dark-blue">{comment.user.name}</span>
                                        <span className="text-[12px] text-custom-gray">{moment(comment.created_at).format('jYYYY-jMM-jDD')}</span>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    {Array(comment.score||0).fill(0).map((_, i) => (
                                        <svg key={i} xmlns="http://www.w3.org/2000/svg" fill='#166d91' className="w-[16px] h-[16px]" viewBox="0 0 576 512">
                                            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                            <p className="text-custom-gray text-[14px] my-2 px-2 pb-2">{comment.content}</p>
                        </div>
                    ))}
                </>
            ) : null}
        </div>
    )
}

export default CommentBox
