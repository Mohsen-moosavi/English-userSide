import Breadcrumb from '@/components/modules/Breadcrumb'
import ArticleList from '@/components/template/allArticles/ArticleList'
import SearchBox from '@/components/template/allArticles/SearchBox'
import ShowingSearchWord from '@/components/template/allArticles/ShowingSearchWord'
import React from 'react'

function page() {
    return (
        <main>
            <Breadcrumb links={[{ name: 'مقاله ها', url: '/articles' }]} />

            <div className="container mx-auto">
                <h1 className="text-center font-bold text-2xl max-sm:text-xl text-custom-dark-blue mt-5">لیست مقالات</h1>
                <ShowingSearchWord/>
            </div>

            <section>
                <div className="container mx-auto">
                    <div className="max-md:grid max-md:grid-cols-1 flex items-center justify-between gap-y-2 my-5 text-lg text-custom-dark-blue">
                        <SearchBox />
                    </div>
                </div>
            </section>

            <section>
                <ArticleList />
            </section>
        </main>
    )
}

export default page
