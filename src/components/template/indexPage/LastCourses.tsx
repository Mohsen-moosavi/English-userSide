import { getLastCourseService } from '@/services/indexpageService'
import Link from 'next/link'
import React from 'react'
import LastCourseSwiper from './LastCourseSwiper';

export const revalidate = 86400

async function LastCourses() {

  const { responseData: courses, error } = await getLastCourseService()

  if (error) {
    return (
      <></>
    )
  } else {
    return (
      <section>
        <div className="container mx-auto">
          <div className="flex justify-between mt-6 sm:mt-14 mb-7">
            <div className="flex items-center gap-x-2 textt-xl">
              <svg className="w-[17px] sm:w-[30px] bi bi-stars" xmlns="http://www.w3.org/2000/svg" fill="#288c89"
                viewBox="0 0 16 16">
                <path
                  d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
              </svg>
              <span className="text-custom-dark-blue font-bold text-md sm:text-xl">جدید ترین دوره ها</span>
            </div>
            <Link href="/courses" className="flex items-center gap-x-2 text-sm sm:text-md">
              <span>مشاهده همه</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                className="bi bi-arrow-left" viewBox="0 0 16 16">
                <path fillRule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
              </svg>
            </Link>
          </div>
            <LastCourseSwiper courses={courses} />
        </div>
      </section>
    )
  }
}

export default LastCourses
