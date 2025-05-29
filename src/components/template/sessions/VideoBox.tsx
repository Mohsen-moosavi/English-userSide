'use client'
import SessionLink from '@/components/modules/SessionLink'
import useAppSelector from '@/hooks/useAppSelector'
import { getSingleSession } from '@/services/sessionsService'
import { SessionsType, SingleSessionType } from '@/utils/types'
import React, { useEffect, useState } from 'react'

type PageProps = {
  sessionId: number,
  courseId: number
}

function VideoBox({ sessionId, courseId }: PageProps) {

  const { userCourses } = useAppSelector(state => state.user)
  const [allSessions, setAllSessions] = useState<SessionsType[]>([])
  const [sessionDetails, setSessionDetails] = useState<SingleSessionType>()
  const [error, setError] = useState<any>()

  useEffect(() => {
    getSessionInfo()
  }, [])

  async function getSessionInfo() {
    const { response, error } = await getSingleSession(sessionId,courseId)
    if (response) {
      setAllSessions(response.data.data.allSessions)
      setSessionDetails(response.data.data.session)
    }
    if (error) {
      setError(error)
    }
  }

  if (error) {
    return (
      <>
        {error.status === 403 ? (
          <div className='h-[300px] items-self-start text-red-400 font-bold text-sm flex items-center w-full justify-center'>
            شما به این دوره دسترسی ندارید!
          </div>
        ) : (
          <div className='h-[300px] items-self-start text-red-400 font-bold text-sm flex items-center w-full justify-center'>
            جلسه مورد نظر یافت نشد!
          </div>
        )}
      </>
    )
  } else {
    return (
      <div className="grid lg:grid-cols-7 gap-x-3 gap-y-3 mb-5">
        <div className='lg:col-span-5'>
          <section className="p-3 rounded-xl shadow-center">

            <div className="flex items-center mb-4">
              <svg className="w-[17px] sm:w-[30px]" xmlns="http://www.w3.org/2000/svg" fill="#166d91"
                viewBox="0 0 16 16">
                <path
                  d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
              </svg>
              <h1 className="text-custom-dark-blue font-bold text-xl">{sessionDetails?.name}</h1>
            </div>
            <video controls src={sessionDetails?.video} className="w-full rounded-xl"></video>
            {(sessionDetails?.file && (sessionDetails?.isFree || userCourses?.includes(courseId))) ? (

              <div className='mt-5 mb-3 flex items-center justify-center'>
                <a href={sessionDetails?.file} className='px-3 py-2 rounded-xl !text-white bg-yellow-500 hover:opacity-60'>فایل پیوست</a>
              </div>
            ) : null}
          </section>
        </div>

        <div className='lg:col-span-2'>
          <article className="p-3 rounded-xl shadow-center sticky top-3">
            <div className="flex items-center">
              <svg className="w-[17px] sm:w-[30px] bi bi-stars" xmlns="http://www.w3.org/2000/svg"
                fill="#166d91" viewBox="0 0 16 16">
                <path
                  d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
              </svg>
              <span className="text-custom-dark-blue">جلسات دوره</span>
            </div>
            {allSessions.length ? (
              <>
                <div className="p-3 border-solid border-custom-dark-blue border-2 mt-2 rounded-xl max-h-[90vh] overflow-y-auto">
                  {allSessions.map((session, i) => (
                    <div key={i} className="py-2 border-b border-solid border-custom-dark-blue">
                      {(session.isFree || userCourses?.includes(courseId)) ? (
                        <SessionLink courseId={courseId} number={i + 1} sessionId={session.id} isActive={sessionDetails?.name=== session.name} sessionName={session.name} sessionTime={session.time} />
                      ) : (
                        <div className="flex items-center gap-x-1 sm:gap-x-3 text-custom-dark-blue max-sm:text-[12px]">
                          <span className="border-2 border-solid border-custom-dark-blue rounded-full w-[20px] h-[20px] leading-[20px] sm:w-[40px] sm:h-[40px] text-center sm:leading-[40px] text-custom-dark-blue">{i + 1}</span>
                          <h4>{session.name}</h4>
                          <span className="text-custom-gray mr-auto">{session.time}</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-[20px] h-[20px]" fill="#166d91" viewBox="0 0 448 512">
                            <path d="M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z" />
                          </svg>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className='h-[100px] items-self-start text-red-400 font-bold text-sm flex items-center w-full justify-center'>
                جلسه مرتبطی یافت نشد!!!
              </div>
            )}

          </article>
        </div>
      </div>
    )
  }
}

export default VideoBox
