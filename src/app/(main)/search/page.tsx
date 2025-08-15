import Breadcrumb from '@/components/modules/Breadcrumb'
import ArticleList from '@/components/template/search/ArticleList'
import BookList from '@/components/template/search/BookList'
import CategorySelection from '@/components/template/search/CategorySelection'
import CourseList from '@/components/template/search/CourseList'
import SearchBox from '@/components/template/search/SearchBox'
import ShowingSearchWord from '@/components/template/search/ShowingSearchWord'
import React from 'react'

type props = {
    searchParams: Promise<{[key:string] : string}>
}

async function Page({searchParams}:props) {
    const {searchword} = await searchParams;
    return (
        <main>
            <Breadcrumb links={[{ name: 'جستوجو', url: '/search' }]} />
    
            <div className="container mx-auto">
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
                <BookList />
                <CourseList/>
                <ArticleList/>
            </section>
        </main>
    )
}

export default Page
