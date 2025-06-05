'use client'
import useAppDispatch from '@/hooks/useAppDispatch'
import useAppSelector from '@/hooks/useAppSelector'
import { changePaginatorChangerFlag, setCategory } from '@/redux/slice/allCourses/allCourseSlice'
import { getCourseCategoryThunk } from '@/redux/slice/allCourses/allCourseThunks'
import React, { useEffect } from 'react'

function CategorySelection() {
    const dispatch = useAppDispatch()
    const { allCategory , category} = useAppSelector(state => state.allCourse)
  
    useEffect(() => {
      dispatch(getCourseCategoryThunk())
    }, [])
  
    function changeCategoryHandler(e:React.ChangeEvent<HTMLSelectElement>){
      dispatch(setCategory(e.target.value))
      dispatch(changePaginatorChangerFlag())
    }
  
    return (
      <select value={category} onChange={changeCategoryHandler} className="py-2 px-3 w-full md:max-w-[300px] bg-transparent border-t border-custom-dark-blue">
        <option value="">همه سطوح</option>
        <option value='children'>دوره های کودکان</option>
        <option value='ease'>سطح مقدماتی</option>
        <option value='medum'>سطح متوسط</option>
        <option value='high'>سطح پیشرفته</option>
        {allCategory?.map((item, i) => (
            <option value={item} key={i}>سطح {item}</option>
        ))}
        <option value='free'>دوره های رایگان</option>
        <option value='notFree'>دوره های غیر رایگان</option>
      </select>
    )
}

export default CategorySelection
