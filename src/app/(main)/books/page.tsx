import Breadcrumb from '@/components/modules/Breadcrumb'
import BooksList from '@/components/template/books/BooksList'
import CategorySelection from '@/components/template/books/CategorySelection'
import SearchBox from '@/components/template/books/SearchBox'
import ShowingSearchWord from '@/components/template/books/ShowingSearchWord'
import React from 'react'

function page() {
    return (
        <main>
            <Breadcrumb links={[{ name: 'کتاب ها', url: '/books' }]} />

            <div className="container mx-auto">
                <h1 className="text-center font-bold text-2xl max-sm:text-xl text-custom-dark-blue mt-5">لیست کتاب های آموزشی</h1>
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
                <BooksList />
            </section>
        </main>
    )
}

export default page
