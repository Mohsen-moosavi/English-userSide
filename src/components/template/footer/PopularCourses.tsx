import { getPopularCourseService } from '@/services/footerServices'
import Link from 'next/link'
import React from 'react'

export const revalidate = 2592000

async function PopularCourses() {
    const { responseData: courses,error }: { responseData?: { name: string, slug: string }[], error?: any } = await getPopularCourseService()


    return (
        <>
            {courses?.length ? (
                <>
                    <ul>
                        {courses?.map((course,i) => (
                            <li key={i}><Link href={`/courses/${course.slug}`}>{course.name}</Link></li>
                        ))}
                    </ul>
                </>
            ) : null}
        </>
    )
}

export default PopularCourses
