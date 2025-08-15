'use client'
import useAppDispatch from '@/hooks/useAppDispatch'
import useAppSelector from '@/hooks/useAppSelector'
import { getUserInfoThunk } from '@/redux/slice/user/userThunks'
import moment from 'moment-jalaali'
import React, { useEffect } from 'react'

function page() {

    const {userLevel ,userCreated_at, userPhone,userUsername,userScore} = useAppSelector(state=>state.user)

    // const dispatch = useAppDispatch()

    // useEffect(()=>{
    //     dispatch(getUserInfoThunk())
    // },[])

    return (
        <div className='grid sm:grid-cols-3 sm:gap-y-5 max-md:mt-25'>
        <span className='text-custom-gray content-center max-sm:pr-2'>شماره تلفن:</span>
        <span className='max-sm:block max-sm:mb-3 max-sm:mt-1 sm:col-span-2 text-custom-dark-blue font-bold content-center p-2 border-2 border-white rounded-xl bg-white/30 '>{userPhone}</span>

        <span className='text-custom-gray content-center max-sm:pr-2'>نام کاربری:</span>
        <span className='max-sm:block max-sm:mb-3 max-sm:mt-1 sm:col-span-2 text-custom-dark-blue font-bold content-center p-2 border-2 border-white rounded-xl bg-white/30 '>{userUsername}</span>

        <span className='text-custom-gray content-center max-sm:pr-2'>سطح:</span>
        <span className='max-sm:block max-sm:mb-3 max-sm:mt-1 sm:col-span-2 text-custom-dark-blue font-bold content-center p-2 border-2 border-white rounded-xl bg-white/30 '>{userLevel ? userLevel :'تعیین نشده'}</span>

        <span className='text-custom-gray content-center max-sm:pr-2'>امتیاز:</span>
        <span className='max-sm:block max-sm:mb-3 max-sm:mt-1 sm:col-span-2 text-custom-dark-blue font-bold content-center p-2 border-2 border-white rounded-xl bg-white/30 '>{userScore}</span>

        <span className='text-custom-gray content-center max-sm:pr-2'>تاریخ پیوستن:</span>
        <span className='max-sm:block max-sm:mb-3 max-sm:mt-1 sm:col-span-2 text-custom-dark-blue font-bold content-center p-2 border-2 border-white rounded-xl bg-white/30 '>{moment(userCreated_at).format('jYYYY/jMM/jDD')}</span>


    </div>
    )
}

export default page
