'use client'
import useAppDispatch from '@/hooks/useAppDispatch'
import useAppSelector from '@/hooks/useAppSelector'
import { closeMenu } from '@/redux/slice/ui/uiSlice'
import { getUserInfoThunk } from '@/redux/slice/user/userThunks'
import userProfile from '@images/user-profile.png'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

function MobileLoginMenu() {

    const {userName,userAvatar,bagCount} = useAppSelector(state=>state.user)
    const dispatch = useAppDispatch()
    const router = useRouter()

    useEffect(()=>{
      dispatch(getUserInfoThunk())
    },[])

    function goToHeaderLink(e:React.MouseEvent<HTMLAnchorElement, MouseEvent>,url:string){
      e.preventDefault()

      dispatch(closeMenu())
      router.push(url)
    }

  return (
    <div className='flex flex-col items-center justify-center w-full my-5 z-100'>
      {userName ? (
        <>
            <Image src={userAvatar || userProfile} width={80} height={80} alt='user profile' className='bg-white rounded-full'/>
            <div className='mt-3 flex items-center gap-x-1'>
            <Link href={'/user-panel'} onClick={e=>goToHeaderLink(e,'/user-panel')} className=' px-2 py-1 rounded-xl bg-linear-to-tl from-sky-500 to-indigo-500 shadow-xl !text-[#daecff] font-medium'>{userName}</Link>
            <Link href={'/user-panel/bag'} onClick={e=>goToHeaderLink(e,'/user-panel/bag')}  className='relative block w-[33px] h-[33px] flex items-center justify-center p-1 rounded-xl bg-linear-to-tl to-sky-500 from-indigo-500 shadow-xl font-medium'>
                 <svg className='w-[20px] h-[20px]' fill="#daecff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64l0 48-128 0 0-48zm-48 48l-64 0c-26.5 0-48 21.5-48 48L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-208c0-26.5-21.5-48-48-48l-64 0 0-48C336 50.1 285.9 0 224 0S112 50.1 112 112l0 48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/>
                    </svg>
                { bagCount===0 ? null : <span className='absolute bottom-[-5px] left-[-5px] w-[18px] h-[18px] bg-red-400 text-white flex items-end justify-center rounded-full text-[10px] flex items-center justify-center'><span>{bagCount}</span></span>}
            </Link>
            </div>
        </>
      ) :(
         <>
            <Image src={userProfile} width={80} height={80} alt='user profile' className='bg-white rounded-full'/>
            <Link href={'/login'} onClick={e=>goToHeaderLink(e,'/login')} className='px-2 py-1 rounded-xl bg-linear-to-tl from-sky-500 to-indigo-500 shadow-xl !text-[#daecff] font-medium mt-3'>ورود | ثبت نام</Link>
        </>
    )}
    </div>
  )
}

export default MobileLoginMenu
