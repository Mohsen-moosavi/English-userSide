import Breadcrumb from '@/components/modules/Breadcrumb'
import CategorySelection from '@/components/template/allCourses/CategorySelection'
import CourseList from '@/components/template/allCourses/CourseList'
import SearchBox from '@/components/template/allCourses/SearchBox'
import ShowingSearchWord from '@/components/template/allCourses/ShowingSearchWord'
import React from 'react'

function page() {
  return (
    <main>
        <Breadcrumb links={[{ name: 'دوره ها', url: '/courses' }]} />

        <div className="container mx-auto">
            <h1 className="text-center font-bold text-2xl max-sm:text-xl text-custom-dark-blue mt-5">لیست دوره های آموزشی</h1>
            <ShowingSearchWord/>
        </div>

        <section>
            <div className="container mx-auto">
                <div className="max-md:grid max-md:grid-cols-1 flex items-center justify-between gap-y-2 my-5 text-lg text-custom-dark-blue">
                    <SearchBox />
                    <CategorySelection />
                </div>
            </div>
        </section>

        <section>
            <CourseList />
        </section>
    </main>
)
}

export default page
