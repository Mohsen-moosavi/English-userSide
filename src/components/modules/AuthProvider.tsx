'use client'
import useAppDispatch from '@/hooks/useAppDispatch'
import { getUserInfoThunk } from '@/redux/slice/user/userThunks'
import React, { useEffect } from 'react'

function AuthProvider() {

    const dispatch = useAppDispatch()
    useEffect(()=>{
        dispatch(getUserInfoThunk())
    },[])

  return (
    <div>
      
    </div>
  )
}

export default AuthProvider
