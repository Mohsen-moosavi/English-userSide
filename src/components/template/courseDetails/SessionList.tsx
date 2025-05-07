'use client'

import SessionLink from "@/components/modules/SessionLink";
import useAppSelector from "@/hooks/useAppSelector";
import { getSingleCourseSessionService } from "@/services/singleCourseService";
import { SessionsType } from "@/utils/types";
import { useState } from "react";
import toast from "react-hot-toast";

type PageProps = {
    sessionCount: number,
    courseSlug: string,
    courseId: number,
    courseName: string,
}

function SessionList({ sessionCount, courseSlug, courseId, courseName }: PageProps) {

    const {userCourses} = useAppSelector(state=>state.user)
    const [isShowMore, setIsShowMore] = useState(false)
    const [isLoadin, setLoadin] = useState(false)
    const [moreSessions, setMoreSessions] = useState<SessionsType[]>([])

    async function getMoreSeessions() {
        setIsShowMore(true)
        setLoadin(true);

        const { responseData: sessions, error } = await getSingleCourseSessionService(courseId)
        if (error) {
            toast.error("مشکل در دریافت جلسات")
        } else {
            setMoreSessions(sessions)
        }
        setLoadin(false)
    }

    if (sessionCount > 3) {
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
                            {moreSessions?.map((session, index) => (
                                <div className={`py-2 border-t border-solid border-custom-dark-blue`} key={index}>
                                    {(session.isFree || userCourses?.includes(courseId)) ? (
                                        <SessionLink courseId={courseId} courseName={courseName} courseSlug={courseSlug} number={index + 1} sessionId={session.id} sessionName={session.name} sessionTime={session.time} />
                                    ) : (
                                        <div className="flex items-center gap-x-1 sm:gap-x-3 text-custom-dark-blue max-sm:text-[12px]">
                                            <span className="border-2 border-solid border-custom-dark-blue rounded-full w-[20px] h-[20px] leading-[20px] sm:w-[40px] sm:h-[40px] text-center sm:leading-[40px] text-custom-dark-blue">{index+1}</span>
                                            <h4>{session.name}</h4>
                                            <span className="text-custom-gray mr-auto">{session.time}</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-[20px] h-[20px]" fill="#166d91" viewBox="0 0 448 512">
                                                <path d="M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z" />
                                            </svg>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </>)}
                    </>
                ) : (
                    <div className='flex justify-center'>
                        <button className='flex gap-x-2 items-center text-[10px] sm:text-[14px] bg-sky-300/20 px-1 sm:px-3 py-1 rounded-full cursor-pointer hover:opacity-70' onClick={getMoreSeessions}>
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

export default SessionList
