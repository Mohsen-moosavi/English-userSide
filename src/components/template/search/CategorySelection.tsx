'use client'
import useAppDispatch from '@/hooks/useAppDispatch'
import useAppSelector from '@/hooks/useAppSelector'
import { changeCategoryChangerFlag, setArticleOffset, setArticles, setBookOffset, setBooks, setCategory, setCourseOffset, setCourses } from '@/redux/slice/search/searchSlice'
import React from 'react'

function CategorySelection() {
    const dispatch = useAppDispatch()
    const { category } = useAppSelector(state => state.search)

    function changeCategoryHandler(e: React.ChangeEvent<HTMLSelectElement>) {
        dispatch(setCategory(e.target.value))
        dispatch(setCourses([]))
        dispatch(setBooks([]))
        dispatch(setArticles([]))
        dispatch(setCourseOffset(0))
        dispatch(setBookOffset(0))
        dispatch(setArticleOffset(0))
        dispatch(changeCategoryChangerFlag(e.target.value))
    }

    return (
        <select defaultValue={category} onChange={changeCategoryHandler} className="py-2 px-3 w-full md:max-w-[300px] bg-transparent border-t border-custom-dark-blue">
            <option value="">همه نتایج</option>
            <option value='book'>کتاب ها</option>
            <option value='course'>دوره ها</option>
            <option value='article'>مقالات</option>
        </select>
    )
}

export default CategorySelection
