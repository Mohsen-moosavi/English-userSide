'use client'
import useAppDispatch from '@/hooks/useAppDispatch'
import useAppSelector from '@/hooks/useAppSelector'
import { changePaginatorChangerFlag, setCategory } from '@/redux/slice/allBooks/allBookSlice'
import { getBookCategoryThunk } from '@/redux/slice/allBooks/allBooksThunk'
import React, { useEffect } from 'react'

function CategorySelection() {

  const dispatch = useAppDispatch()
  const { allCategory , category} = useAppSelector(state => state.allBook)

  useEffect(() => {
    dispatch(getBookCategoryThunk())
  }, [])

  function changeCategoryHandler(e:React.ChangeEvent<HTMLSelectElement>){
    dispatch(setCategory(e.target.value))
    dispatch(changePaginatorChangerFlag())
  }

  return (
    <select defaultValue={category} onChange={changeCategoryHandler} className="py-2 px-3 w-full md:max-w-[300px] bg-transparent border-t border-custom-dark-blue">
      <option value="">همه سطوح</option>
      {allCategory.map((item, i) => (
        <option value={item} key={i}>سطح {item}</option>
      ))}
      <option value="forChildren">مخصوص کودکان</option>
    </select>
  )
}

export default CategorySelection
