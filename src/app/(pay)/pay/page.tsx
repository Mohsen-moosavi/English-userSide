'use client'
import useAppDispatch from '@/hooks/useAppDispatch'
import useAppSelector from '@/hooks/useAppSelector'
import { setBagCount } from '@/redux/slice/user/userSlice'
import { payService } from '@/services/userServices'
import { useRouter } from 'next/navigation'
import React from 'react'
import toast from 'react-hot-toast'

function page() {

  const {payData} = useAppSelector(state=>state.user)
  const router = useRouter()
  const dispatch = useAppDispatch()

  async function payHandler(){
    const {response,error} = await payService(payData?.price || 0 , payData?.offCode)
    if(response){
      toast.success(response.data.message)
      dispatch(setBagCount(0))
      router.replace('/user-panel/courses')
    }else{
      toast.error(error.response.data.message)
    }
  }

  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <div className='p-3 max-w-[400px] w-full m-2 rounded-xl border-[3px] border-green-700 bg-green-200 shadow-xl flex flex-col items-center justify-center'>
        <h1 className='text-center font-bold text-custom-dark-blue mb-5 text-sm'>پرداخت مبلغ <br /><span className='text-green-700 text-xl leading-10'>{payData?.price.toLocaleString()}</span><br /><span>تومان</span></h1>
        <button onClick={payHandler} className='rounded-full w-full p-2 font-bold text-white text-lg bg-green-700 shadow-xl cursor-pointer hover:opacity-70'>پرداخت</button>
      </div>
    </div>
  )
}

export default page
