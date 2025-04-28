import RelatedCourseBox from '@/components/modules/RelatedCourseBox'
import { getRelatedCoursesService } from '@/services/singleArticleService'
import { RelatedCourseType } from '@/utils/types'
import React from 'react'

async function RelatedCourses({slug}:{slug:string}) {

    const { responseData: courses, error }: { responseData?: RelatedCourseType[], error?: any } = await getRelatedCoursesService(slug)

    return (
        <article className="rounded-xl p-3 items-self-start shadow-center">
            <span className="text-lg text-custom-dark-blue font-bold">دوره های مرتبط</span>
            <div className="mt-3 flex flex-col gap-y-3">
                {courses?.map((course,i)=>(
                    <RelatedCourseBox key={i} {...course}/>
                ))}
            </div>
        </article>
    )
}

export default RelatedCourses
